-- Stats for catichkabeta.com and its apps and games.
-- Lives in the Supabase project "trex-game" (zaujmeukeugxvjtzaspp), next to the T-Rex leaderboard.
-- Applied as the migration "stats_dashboard". Safe to read; holds no secrets.
--
-- Raw rows sit in the private schema "analytics", which the public API cannot reach.
-- Visitors can only call public.track(). Only the owner, signed in, can call public.stats_summary().
-- The owner's email is kept in analytics.settings (key 'owner_email'), not in this public repo.

create schema if not exists analytics;
revoke all on schema analytics from public, anon, authenticated;

create table if not exists analytics.events (
  id      bigint generated always as identity primary key,
  at      timestamptz not null default now(),
  day     date not null default (now() at time zone 'Australia/Sydney')::date,
  product text not null,
  kind    text not null,
  target  text,
  visitor uuid
);
create index if not exists events_day_idx on analytics.events (day, product, kind);

create table if not exists analytics.outpost_daily (
  day        date primary key,
  data       jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists analytics.settings (
  key   text primary key,
  value text not null
);

alter table analytics.events enable row level security;
alter table analytics.outpost_daily enable row level security;
alter table analytics.settings enable row level security;

-- Visitors: record one view or click. Anything unexpected is dropped silently.
create or replace function public.track(p_product text, p_kind text, p_target text default null, p_visitor uuid default null)
returns void language plpgsql security definer set search_path = '' as $$
begin
  if p_product is null or p_product not in ('site','trex','eternity','sands','outpost') then return; end if;
  if p_kind is null or p_kind not in ('view','click') then return; end if;
  insert into analytics.events (product, kind, target, visitor)
  values (p_product, p_kind, left(p_target, 120), p_visitor);
end $$;
revoke all on function public.track(text, text, text, uuid) from public;
grant execute on function public.track(text, text, text, uuid) to anon, authenticated;

-- Outpost's server: send today's totals. The token's SHA-256 is in analytics.settings ('outpost_token_sha256').
create or replace function public.outpost_report(p_token text, p_data jsonb)
returns void language plpgsql security definer set search_path = '' as $$
declare want text;
begin
  select value into want from analytics.settings where key = 'outpost_token_sha256';
  if want is null or p_token is null or encode(pg_catalog.sha256(convert_to(p_token, 'UTF8')), 'hex') <> want then
    raise exception 'not allowed' using errcode = '42501';
  end if;
  if jsonb_typeof(p_data) <> 'object' or length(p_data::text) > 4000 then return; end if;
  insert into analytics.outpost_daily (day, data) values ((now() at time zone 'Australia/Sydney')::date, p_data)
  on conflict (day) do update set data = excluded.data, updated_at = now();
end $$;
revoke all on function public.outpost_report(text, jsonb) from public;
grant execute on function public.outpost_report(text, jsonb) to anon;

-- The owner: everything the stats page shows, for the last p_days days.
create or replace function public.stats_summary(p_days int default 30)
returns jsonb language plpgsql stable security definer set search_path = '' as $$
declare
  owner text;
  who   text := lower(coalesce(auth.jwt() ->> 'email', ''));
  today date := (now() at time zone 'Australia/Sydney')::date;
  since date;
begin
  select lower(value) into owner from analytics.settings where key = 'owner_email';
  -- The signed-in account must be the owner's, with its email proven (signed in by an emailed link).
  if owner is null or who = '' or who <> owner or not exists (
    select 1 from auth.users u where u.id = auth.uid() and lower(u.email) = owner and u.email_confirmed_at is not null
  ) then
    raise exception 'not allowed' using errcode = '42501';
  end if;
  p_days := greatest(1, least(coalesce(p_days, 30), 366));
  since := today - (p_days - 1);
  return jsonb_build_object(
    'today', today,
    'since', since,
    'daily', coalesce((select jsonb_agg(d order by d.day) from (
        select day, product, kind, count(*) as n, count(distinct visitor) as people
        from analytics.events where day >= since group by day, product, kind) d), '[]'::jsonb),
    'totals', coalesce((select jsonb_agg(t) from (
        select product, kind, count(*) as n, count(distinct visitor) as people
        from analytics.events where day >= since group by product, kind) t), '[]'::jsonb),
    'pages', coalesce((select jsonb_agg(p order by p.n desc) from (
        select target as path, count(*) as n, count(distinct visitor) as people
        from analytics.events where day >= since and product = 'site' and kind = 'view'
        group by target order by count(*) desc limit 15) p), '[]'::jsonb),
    'clicks', coalesce((select jsonb_agg(c order by c.n desc) from (
        select target as product, count(*) as n, count(distinct visitor) as people
        from analytics.events where day >= since and product = 'site' and kind = 'click'
        group by target) c), '[]'::jsonb),
    'outpost', (select jsonb_build_object('day', day, 'updated_at', updated_at, 'data', data)
        from analytics.outpost_daily order by day desc limit 1),
    'outpost_daily', coalesce((select jsonb_agg(o order by o.day) from (
        select day, data from analytics.outpost_daily where day >= since) o), '[]'::jsonb),
    'first_day', (select min(day) from analytics.events)
  );
end $$;
revoke all on function public.stats_summary(int) from public;
grant execute on function public.stats_summary(int) to authenticated;

-- Supabase grants new public functions to anon and authenticated by default, so take back what isn't needed.
revoke execute on function public.stats_summary(int) from anon;
revoke execute on function public.outpost_report(text, jsonb) from authenticated;

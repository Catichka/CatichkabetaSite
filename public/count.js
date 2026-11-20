/*
  CatichkaBeta visit counter. Shared by catichkabeta.com and every app and game:
    <script src="https://catichkabeta.com/count.js" data-product="trex" defer></script>

  What it sends, and nothing else:
  - the product, what happened (a page view or a click through to a product),
    the page path or the product clicked, and a random ID made on this device.
  No cookies, names, emails or IP addresses are stored. Counting is skipped when the browser
  sends Global Privacy Control or Do Not Track, and on a device the owner has switched off
  from the stats page.
*/
(function () {
  var SB_URL = 'https://zaujmeukeugxvjtzaspp.supabase.co';
  var SB_KEY = 'sb_publishable_4GhSrh9j7zBi0Mjryub5KQ_SxTXroLt';
  var PRODUCTS = { site: 1, trex: 1, eternity: 1, sands: 1, outpost: 1 };
  // Hosts that count as a click through to a product from the website.
  var HOSTS = {
    'trexgame.catichkabeta.com': 'trex',
    'eternity.catichkabeta.com': 'eternity',
    'sands.catichkabeta.com': 'sands',
    'outpost.catichkabeta.com': 'outpost',
  };

  var me = document.currentScript;
  var product = (me && me.getAttribute('data-product')) || 'site';
  if (!PRODUCTS[product]) return;

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) { return null; }
  }
  // The owner can switch counting off for one device by opening any page with ?cb_ignore=1 (and back on with =0).
  var flag = /[?&]cb_ignore=([01])/.exec(location.search);
  if (flag) store('cb_ignore', flag[1]);
  if (navigator.globalPrivacyControl || navigator.doNotTrack === '1') return;
  if (store('cb_ignore') === '1') return;

  var visitor = store('cb_visitor');
  if (!visitor || !/^[0-9a-f-]{36}$/.test(visitor)) {
    visitor = (window.crypto && crypto.randomUUID) ? crypto.randomUUID()
      : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16);
        });
    store('cb_visitor', visitor);
  }

  function send(kind, target) {
    try {
      fetch(SB_URL + '/rest/v1/rpc/track', {
        method: 'POST',
        keepalive: true,
        headers: { apikey: SB_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({ p_product: product, p_kind: kind, p_target: target || null, p_visitor: visitor }),
      }).catch(function () {});
    } catch (e) {}
  }

  // Every page load counts as a view. Daily players are the different devices seen each day.
  send('view', location.pathname);
  if (product === 'site') {
    document.addEventListener('click', function (event) {
      var link = event.target && event.target.closest && event.target.closest('a[href]');
      if (!link) return;
      var to = HOSTS[link.hostname];
      if (to) send('click', to);
    }, true);
  }
})();

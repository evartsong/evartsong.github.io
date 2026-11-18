/* EVA SONG: THE GAME — page behavior. Content comes from data.js. */
(function () {
  'use strict';
  var P = window.PROJECTS || [];
  var Q = window.QUESTS || [];
  var L = window.LINKS || {};
  var X = window.EXTRAS || [];
  var M = window.MEDIA || {};
  /* attach generated media (covers, images [src, w, h], video clips) to each entry */
  P.concat(X).forEach(function (o) {
    var m = M[o.id] || {};
    o.cover = o.cover || m.cover || '';
    o.coverRatio = m.coverRatio || '';
    o.images = ((o.images && o.images.length) ? o.images : (m.images || [])).map(function (im) { return typeof im === 'string' ? [im, 0, 0] : im; });
    o.clips = (o.clips && o.clips.length) ? o.clips : (m.clips || []);
  });

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function num(i) { return String(i + 1).padStart(2, '0'); }
  function upper(s) { return String(s || '').toUpperCase(); }
  function projectUrl(p) { return 'project.html?id=' + encodeURIComponent(p.id); }
  function artStyle(color, img) {
    return '--c:' + color + ';' + (img ? "background-image:url('" + esc(img) + "');" : '');
  }

  /* ---------- Shared: color theme (Auto / Light / Dark) ---------- */
  var root = document.documentElement;
  var prefersLight = window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;
  var NEXT = { auto: 'light', light: 'dark', dark: 'auto' };
  var LABEL = { auto: 'auto (matches your device)', light: 'light', dark: 'dark' };
  function currentPref() { return root.getAttribute('data-theme-pref') || 'auto'; }
  function syncTheme() {
    var pref = currentPref();
    var effective = pref === 'auto' ? (prefersLight && prefersLight.matches ? 'light' : 'dark') : pref;
    var meta = document.querySelector('[data-theme-meta]');
    if (meta) meta.setAttribute('content', effective === 'light' ? '#F3F4F6' : '#0B0D10');
    document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
      b.setAttribute('aria-label', 'Color theme: ' + LABEL[pref] + '. Change theme');
      b.title = 'Theme: ' + pref.toUpperCase() + ' (click to change)';
    });
  }
  function setTheme(pref) {
    if (pref === 'light' || pref === 'dark') root.setAttribute('data-theme', pref); else root.removeAttribute('data-theme');
    root.setAttribute('data-theme-pref', pref);
    try { localStorage.setItem('es-theme', pref); } catch (e) {}
    syncTheme();
  }
  document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
    b.addEventListener('click', function () { setTheme(NEXT[currentPref()] || 'auto'); });
  });
  if (prefersLight && prefersLight.addEventListener) prefersLight.addEventListener('change', syncTheme);
  syncTheme();

  /* ---------- Shared: social / résumé links ---------- */
  document.querySelectorAll('[data-link]').forEach(function (a) {
    var url = L[a.getAttribute('data-link')];
    if (!url) { a.hidden = true; return; }
    a.href = url;
    if (/^https?:/.test(url) || /\.pdf$/i.test(url)) { a.target = '_blank'; a.rel = 'noopener'; }
  });

  /* ---------- Home: season pass ---------- */
  var tiersEl = document.getElementById('tiers');
  var detailEl = document.getElementById('tier-detail');
  if (tiersEl && detailEl && P.length) {
    var sel = 0;
    var renderTiers = function () {
      tiersEl.innerHTML = '<span class="es-track__line" aria-hidden="true"></span>' + P.map(function (p, i) {
        var on = i === sel;
        return '<button type="button" class="es-tier' + (on ? ' is-selected' : '') + '" data-i="' + i + '" aria-pressed="' + on + '" aria-label="Tier ' + num(i) + ': ' + esc(p.title) + '">' +
          '<span class="es-tier__season">' + esc(p.season) + '</span>' +
          '<span class="es-tier__num">' + num(i) + '</span>' +
          '<span class="es-tier__card">' +
            '<span class="es-tier__art" style="' + artStyle(p.color, p.cover) + '"><span class="es-chip">' + esc(upper(p.era)) + '</span></span>' +
            '<span class="es-tier__body"><span class="es-tier__title">' + esc(p.title) + '</span><span class="es-tier__genre">' + esc(upper(p.genre)) + '</span></span>' +
          '</span></button>';
      }).join('');
    };
    var renderDetail = function () {
      var p = P[sel];
      detailEl.innerHTML =
        '<div class="es-detail__main">' +
          '<p class="es-detail__meta"><span>TIER ' + num(sel) + ' REWARD · ' + esc(upper(p.era)) + ' · ' + esc(upper(p.genre)) + '</span>' +
          (p.badge ? '<span class="es-chip es-chip--accent">' + esc(p.badge) + '</span>' : '') + '</p>' +
          '<p class="es-detail__title">' + esc(p.title) + '</p>' +
          '<p class="es-detail__role">' + esc(p.role) + ' · ' + esc(p.when) + '</p>' +
          '<p class="es-detail__desc">' + esc(p.desc) + '</p>' +
        '</div>' +
        '<div class="es-detail__actions">' +
          '<a class="es-btn" href="' + projectUrl(p) + '">Claim reward →</a>' +
          '<button type="button" class="es-iconbtn" data-step="-1" aria-label="Previous tier">‹</button>' +
          '<button type="button" class="es-iconbtn" data-step="1" aria-label="Next tier">›</button>' +
        '</div>';
    };
    var select = function (i, scroll) {
      sel = (i + P.length) % P.length;
      renderTiers(); renderDetail();
      if (scroll) {
        var b = tiersEl.querySelector('[data-i="' + sel + '"]');
        if (b) b.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }
    };
    tiersEl.addEventListener('click', function (e) {
      var b = e.target.closest('[data-i]');
      if (b) { select(+b.getAttribute('data-i'), true); tiersEl.querySelector('[data-i="' + sel + '"]').focus(); }
    });
    tiersEl.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        select(sel + (e.key === 'ArrowRight' ? 1 : -1), true);
        tiersEl.querySelector('[data-i="' + sel + '"]').focus();
      }
    });
    detailEl.addEventListener('click', function (e) {
      var b = e.target.closest('[data-step]');
      if (b) select(sel + (+b.getAttribute('data-step')), true);
    });
    select(0, false);
  }

  /* ---------- Media helpers (images come from assets/media.js) ---------- */
  function embedHtml(v, title, poster) {
    var yt = /(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([\w-]{6,})/.exec(v);
    var vm = /vimeo\.com\/(?:video\/)?(\d+)/.exec(v);
    if (yt) return '<iframe src="https://www.youtube-nocookie.com/embed/' + yt[1] + '?rel=0&modestbranding=1&playsinline=1" title="' + esc(title) + ' video" allow="fullscreen; picture-in-picture; encrypted-media" allowfullscreen loading="lazy"></iframe>';
    if (vm) return '<iframe src="https://player.vimeo.com/video/' + vm[1] + '?title=0&byline=0&portrait=0&dnt=1" title="' + esc(title) + ' video" allow="fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>';
    return '<video src="' + esc(v) + '"' + (poster ? ' poster="' + esc(poster) + '"' : '') + ' controls playsinline preload="metadata"></video>';
  }
  function imgTag(im, alt) {
    return '<img src="' + esc(im[0]) + '"' + (im[1] ? ' width="' + im[1] + '" height="' + im[2] + '"' : '') + ' alt="' + esc(alt) + '" loading="lazy" decoding="async">';
  }

  /* ---------- Project + side quest pages ---------- */
  var projEl = document.getElementById('project');
  if (projEl && (P.length || X.length)) {
    var qid = new URLSearchParams(location.search).get('id');
    var list = P, isQuest = false;
    var idx = P.findIndex(function (p) { return p.id === qid; });
    if (idx < 0) {
      var xi = X.findIndex(function (p) { return p.id === qid; });
      if (xi >= 0) { list = X; idx = xi; isQuest = true; } else { idx = 0; }
    }
    var n = list.length;
    var p = list[idx];
    var pi = (idx - 1 + n) % n, ni = (idx + 1) % n;
    var prev = list[pi], next = list[ni];
    var unit = isQuest ? 'QUEST' : 'TIER';
    var urlOf = function (t) { return 'project.html?id=' + encodeURIComponent(t.id); };
    document.title = p.title + ' — Eva Song';

    var chips = isQuest ? '' : P.map(function (t, i) {
      return '<a href="' + urlOf(t) + '" class="' + (i === idx ? 'is-current' : '') + '" title="' + esc(t.title) + '" aria-label="Tier ' + num(i) + ': ' + esc(t.title) + '"' + (i === idx ? ' aria-current="page"' : '') + '>' + num(i) + '</a>';
    }).join('');

    var tools = (p.tools && p.tools.length ? p.tools : ['Tools coming soon']).map(function (t) { return '<li class="es-pill">' + esc(t) + '</li>'; }).join('');
    var imgs = p.images || [];
    var wide = imgs.filter(function (im) { return !(im[1] && im[2] > im[1] * 2.2); });
    var tall = imgs.filter(function (im) { return im[1] && im[2] > im[1] * 2.2; });
    var showcase = '';
    if (p.video) showcase += '<div class="es-video" style="--c:' + p.color + '">' + embedHtml(p.video, p.title, p.cover) + '</div>';
    if (p.clips && p.clips.length) {
      showcase += '<p class="es-label es-media-label">VIDEOS · ' + String(p.clips.length).padStart(2, '0') + '</p><div class="es-clips">' +
        p.clips.map(function (v) { return '<video src="' + esc(v) + '" controls playsinline muted loop preload="metadata"></video>'; }).join('') + '</div>';
    }
    if (tall.length) {
      showcase += '<p class="es-label es-media-label">EMAILS + LONG PAGES · SCROLL INSIDE</p><div class="es-longs">' +
        tall.map(function (im, i) { return '<a class="es-long" href="' + esc(im[0]) + '" target="_blank" rel="noopener">' + imgTag(im, p.title + ', long page ' + (i + 1)) + '</a>'; }).join('') + '</div>';
    }
    if (wide.length) {
      showcase += (p.video || (p.clips && p.clips.length) || tall.length ? '<p class="es-label es-media-label">IMAGES · ' + String(wide.length).padStart(2, '0') + '</p>' : '') +
        '<div class="es-gallery">' + wide.map(function (im, i) { return '<a class="es-g" href="' + esc(im[0]) + '" target="_blank" rel="noopener">' + imgTag(im, p.title + ', image ' + (i + 1)) + '</a>'; }).join('') + '</div>';
    }
    if (!showcase) showcase = '<div class="es-video es-video--empty" style="--c:' + p.color + '"><span class="es-video__ph">WORK COMING SOON</span></div>';

    var did = (p.did && p.did.length)
      ? '<p class="es-label">WHAT I DID</p><ul class="es-did">' + p.did.map(function (d) { return '<li><span class="es-check" aria-hidden="true">✓</span><span>' + esc(d) + '</span></li>'; }).join('') + '</ul>'
      : '';

    projEl.innerHTML =
      '<div class="es-subbar"><div class="es-wrap">' +
        '<a class="es-back" href="' + (isQuest ? 'play.html' : 'index.html#work') + '">← <span class="es-d">' + (isQuest ? 'SIDE QUESTS' : 'SEASON PASS') + '</span><span class="es-m">' + (isQuest ? 'ALL PLAY' : 'ALL WORK') + '</span></a>' +
        (isQuest ? '<span class="es-d es-count">QUEST ' + num(idx) + ' / ' + num(n - 1) + ' · ' + esc(upper(p.genre)) + '</span>' : '<nav class="es-chips" aria-label="Jump to a project">' + chips + '</nav>') +
        '<span class="es-m es-count">' + unit + ' ' + num(idx) + ' / ' + num(n - 1) + '</span>' +
        '<div class="es-stepper es-d">' +
          '<a href="' + urlOf(prev) + '" aria-label="Previous: ' + esc(prev.title) + '">← PREV</a>' +
          '<a href="' + urlOf(next) + '" aria-label="Next: ' + esc(next.title) + '">NEXT →</a>' +
        '</div>' +
      '</div></div>' +
      '<nav class="es-pbar" aria-label="Previous and next">' +
        '<a href="' + urlOf(prev) + '"><small>← PREV · ' + num(pi) + '</small><b>' + esc(prev.title) + '</b></a>' +
        '<a class="is-next" href="' + urlOf(next) + '"><small>NEXT · ' + num(ni) + ' →</small><b>' + esc(next.title) + '</b></a>' +
      '</nav>' +

      '<section class="es-phero" style="--c:' + p.color + '" aria-label="' + (isQuest ? 'Side quest' : 'Project') + '">' +
        '<span class="es-phero__num" aria-hidden="true">' + num(idx) + '</span>' +
        '<div class="es-wrap"><div>' +
          '<div class="es-pills"><span class="es-chip">' + (isQuest ? 'SIDE QUEST · ' + esc(upper(p.genre)) : 'TIER ' + num(idx) + ' · REWARD UNLOCKED') + '</span>' + (p.badge ? '<span class="es-chip es-chip--light">' + esc(p.badge) + '</span>' : '') + '</div>' +
          '<h1>' + esc(p.title) + '</h1>' +
          '<p class="es-phero__desc">' + esc(p.desc) + '</p>' +
        '</div>' +
        '<dl><div><dt>ROLE</dt><dd>' + esc(p.role) + '</dd></div><div><dt>CLASS</dt><dd>' + esc(p.genre) + '</dd></div><div><dt>SEASON</dt><dd>' + esc(p.when) + '</dd></div></dl>' +
        '</div>' +
      '</section>' +

      '<section class="es-wrap es-brief" aria-label="The brief">' +
        '<div class="es-brief__main">' +
          '<p class="es-kicker">MISSION BRIEFING</p><h2 class="es-h2">The brief</h2>' +
          '<p class="es-brief__text">' + esc(p.brief || p.desc) + '</p>' +
          did +
        '</div>' +
        '<aside class="es-panel es-card es-details" aria-label="Project details">' +
          '<p class="es-kicker" style="margin:0">DETAILS</p><p class="es-details__title">Tools</p>' +
          '<ul class="es-pills">' + tools + '</ul>' +
          '<dl><div><dt>PROJECT TYPE</dt><dd>' + esc(p.type) + '</dd></div>' +
          (p.collaborators ? '<div><dt>COLLABORATORS</dt><dd>' + esc(p.collaborators) + '</dd></div>' : '') +
          (p.recognition ? '<div><dt>RECOGNITION</dt><dd class="is-accent">' + esc(p.recognition) + '</dd></div>' : '') +
          '</dl>' +
        '</aside>' +
      '</section>' +

      '<section class="es-section" aria-label="Showcase"><div class="es-wrap">' +
        '<p class="es-kicker">SHOWCASE</p><h2 class="es-h2">The work</h2>' +
        '<div class="es-showcase">' + showcase + '</div>' +
      '</div></section>' +

      '<section class="es-section" aria-label="Continue"><div class="es-wrap">' +
        '<p class="es-kicker">CONTINUE?</p>' +
        '<div class="es-continue">' +
          '<a class="es-cont es-cont--prev" href="' + urlOf(prev) + '"><span class="es-cont__label">← PREVIOUS ' + unit + ' · ' + num(pi) + '</span><span class="es-cont__title">' + esc(prev.title) + '</span><span class="es-cont__genre">' + esc(upper(prev.genre)) + '</span></a>' +
          '<a class="es-cont es-cont--next" style="--c:' + next.color + '" href="' + urlOf(next) + '"><span class="es-cont__num" aria-hidden="true">' + num(ni) + '</span><span class="es-cont__label">NEXT ' + unit + ' · ' + num(ni) + ' →</span><span class="es-cont__title">' + esc(next.title) + '</span><span class="es-cont__genre">' + esc(upper(next.genre)) + '</span></a>' +
        '</div>' +
        '<div class="es-btnrow"><a class="es-btn" href="' + (isQuest ? 'play.html' : 'index.html#work') + '">' + (isQuest ? 'Back to side quests' : 'Back to season pass') + '</a><a class="es-btn es-btn--ghost" href="index.html#contact">Send a squad invite</a></div>' +
      '</div></section>';
    projEl.closest('main').classList.add('has-pbar');

    /* keyboard: left / right arrows move between entries, like a game menu */
    document.addEventListener('keydown', function (e) {
      if (e.altKey || e.ctrlKey || e.metaKey || /input|textarea|select|video/i.test(e.target.tagName)) return;
      if (e.key === 'ArrowRight') location.href = urlOf(next);
      if (e.key === 'ArrowLeft') location.href = urlOf(prev);
    });
  }

  /* ---------- Play page ---------- */
  var boardEl = document.getElementById('quest-board');
  var filtersEl = document.getElementById('quest-filters');
  if (boardEl && filtersEl) {
    var TYPES = [['all', 'ALL'], ['3d', '3D MOTION'], ['graphic', 'GRAPHIC DESIGN'], ['illo', 'ILLUSTRATION'], ['editorial', 'EDITORIAL'], ['creator', 'CREATOR']];
    var NAME = { '3d': '3D MOTION', graphic: 'GRAPHIC DESIGN', illo: 'ILLUSTRATION', editorial: 'EDITORIAL', creator: 'CREATOR' };
    var want = new URLSearchParams(location.search).get('type');
    var current = TYPES.some(function (t) { return t[0] === want; }) ? want : 'all';
    var count = function (t) { return String(t === 'all' ? Q.length : Q.filter(function (q) { return q.type === t; }).length).padStart(2, '0'); };
    var setCount = document.getElementById('quest-total');
    if (setCount) setCount.textContent = String(Q.length).padStart(2, '0');
    var renderBoard = function () {
      filtersEl.innerHTML = TYPES.map(function (t) {
        return '<button type="button" class="es-filter" data-f="' + t[0] + '" aria-pressed="' + (t[0] === current) + '">' + t[1] + ' <span>' + count(t[0]) + '</span></button>';
      }).join('');
      boardEl.innerHTML = Q.filter(function (q) { return current === 'all' || q.type === current; }).map(function (q) {
        var x = q.id ? X.find(function (e) { return e.id === q.id; }) : null;
        var href = x ? 'project.html?id=' + encodeURIComponent(x.id) : (q.link || '');
        var cover = (x && (x.cover || (x.images && x.images[0] && x.images[0][0]))) || q.image || '';
        var dims = x && x.images && x.images[0] && x.images[0][1] ? x.images[0][1] + ' / ' + x.images[0][2] : q.ratio;
        if (x && x.cover && x.coverRatio) dims = x.coverRatio;
        var tag = href ? 'a' : 'div';
        var attrs = href ? ' href="' + esc(href) + '"' + (/^https?:/.test(href) ? ' target="_blank" rel="noopener"' : '') : '';
        var badge = x && x.video ? '▶ VIDEO' : (x ? '★ ' + String((x.images || []).length).padStart(2, '0') + ' IMG' : '★ COMPLETE');
        return '<' + tag + ' class="es-panel es-qcard' + (q.open ? ' is-open' : '') + '"' + attrs + '>' +
          '<span class="es-qcard__art" style="aspect-ratio:' + dims + ';' + artStyle(q.color, cover) + '">' +
            '<span class="es-chip">' + NAME[q.type] + '</span>' +
            '<span class="es-qcard__status">' + badge + '</span>' +
          '</span>' +
          '<span class="es-qcard__body"><span class="es-qcard__title">' + esc(q.title) + '</span><span class="es-qcard__sub">' + esc(q.sub) + '</span></span>' +
        '</' + tag + '>';
      }).join('');
    };
    filtersEl.addEventListener('click', function (e) {
      var b = e.target.closest('[data-f]');
      if (b) { current = b.getAttribute('data-f'); renderBoard(); filtersEl.querySelector('[data-f="' + current + '"]').focus(); }
    });
    renderBoard();
  }

  /* ---------- History: chapters open on desktop, tap-to-open on phones ---------- */
  var chapters = document.querySelectorAll('.es-chapter details');
  if (chapters.length) {
    var phone = window.matchMedia('(max-width: 767px)');
    var setOpen = function () { chapters.forEach(function (d, i) { d.open = !phone.matches || i === 0; }); };
    setOpen();
    if (phone.addEventListener) phone.addEventListener('change', setOpen);
  }
})();

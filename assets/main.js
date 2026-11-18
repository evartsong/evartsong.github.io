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
    var ownCover = !!o.cover;
    o.cover = o.cover || m.cover || '';
    o.images = ((o.images && o.images.length) ? o.images : (m.images || [])).map(function (im) { return typeof im === 'string' ? [im, 0, 0] : im; });
    /* ratio of the top image: data.js value, else the media cover's, else the matching image's own size */
    var same = o.images.filter(function (im) { return im[0] === o.cover && im[1]; })[0];
    o.coverRatio = o.coverRatio || (!ownCover || o.cover === m.cover ? m.coverRatio : '') || (same ? same[1] + ' / ' + same[2] : '');
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

  /* ---------- Home: work reel (title screen) + season pass tiles ---------- */
  var tileImg = function (p) { return p.tile || p.cover || (p.images && p.images[0] && p.images[0][0]) || ''; };
  var reelEl = document.getElementById('reel');
  if (reelEl && P.length) {
    reelEl.innerHTML = P.slice(0, 5).map(function (p, i) {
      return '<a class="es-reel__card" role="listitem" href="' + projectUrl(p) + '" style="--c:' + p.color + '">' +
        '<img src="' + esc(tileImg(p)) + '" alt="" decoding="async">' +
        '<span class="es-reel__tag">TIER ' + num(i) + (p.era ? ' · ' + esc(upper(p.era)) : '') + '</span>' +
        '<span class="es-reel__name">' + esc(p.title) + '</span></a>';
    }).join('');
  }
  var tiersEl = document.getElementById('tiers');
  if (tiersEl && P.length) {
    /* ranked layout, biggest first: the featured project, two beside it, three in thirds, four in quarters.
       The 01–10 buttons above the grid choose which project takes the big featured spot. */
    var rank = function (i) { return i === 0 ? 1 : i < 3 ? 2 : i < 6 ? 3 : 4; };
    var renderTiers = function (sel) {
      var order = [sel].concat(P.map(function (p, i) { return i; }).filter(function (i) { return i !== sel; }));
      tiersEl.innerHTML = order.map(function (t, i) {
      var p = P[t];
      var feat = i === 0;
      var meta = p.season || upper(p.era); /* the tier number sits in the corner badge */
      return '<a class="es-tile es-tile--r' + rank(i) + (feat ? ' es-tile--feat' : '') + '" href="' + projectUrl(p) + '" style="--c:' + p.color + '">' +
        '<span class="es-tile__num" aria-hidden="true">' + num(t) + '</span>' +
        '<img src="' + esc(tileImg(p)) + '" alt="" loading="' + (i < 3 ? 'eager' : 'lazy') + '" decoding="async">' +
        '<span class="es-tile__cap">' +
          '<span class="es-tile__text">' +
            '<span class="es-tile__meta">' + esc(meta) + (feat && p.badge ? ' <b>' + esc(p.badge) + '</b>' : '') + '</span>' +
            '<span class="es-tile__title">' + esc(p.title) + '</span>' +
            '<span class="es-tile__genre">' + esc(feat ? p.desc : p.genre) + '</span>' +
          '</span>' +
          (feat ? '<span class="es-btn">View project →</span>' : '') +
        '</span></a>';
      }).join('');
    };
    renderTiers(0);
    var numsEl = document.getElementById('pass-nums');
    if (numsEl) {
      numsEl.innerHTML = P.map(function (p, i) {
        return '<button type="button" data-t="' + i + '" aria-pressed="' + (i === 0) + '" title="' + esc(p.title) + '" aria-label="Feature tier ' + num(i) + ': ' + esc(p.title) + '">' + num(i) + '</button>';
      }).join('');
      numsEl.addEventListener('click', function (e) {
        var b = e.target.closest('[data-t]');
        if (!b) return;
        renderTiers(+b.getAttribute('data-t'));
        numsEl.querySelectorAll('[data-t]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        /* bring the grid into view if the featured tile is off screen */
        var top = tiersEl.getBoundingClientRect().top;
        if (top < 0 || top > window.innerHeight * 0.6) tiersEl.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      });
    }
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
    /* former GIFs are now small looping mp4s: play them silently, like a GIF */
    if (/\.mp4$/i.test(im[0])) return '<video src="' + esc(im[0]) + '"' + (im[1] ? ' width="' + im[1] + '" height="' + im[2] + '"' : '') + ' autoplay muted loop playsinline preload="metadata" aria-label="' + esc(alt) + '"></video>';
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
      showcase += '<p class="es-label es-media-label">EMAILS + LONG PAGES</p><div class="es-longs">' +
        tall.map(function (im, i) { return '<a class="es-long" href="' + esc(im[0]) + '" target="_blank" rel="noopener">' + imgTag(im, p.title + ', long page ' + (i + 1)) + '</a>'; }).join('') + '</div>';
    }
    if (wide.length) {
      showcase += (p.video || (p.clips && p.clips.length) || tall.length ? '<p class="es-label es-media-label">IMAGES · ' + String(wide.length).padStart(2, '0') + '</p>' : '') +
        '<div class="es-gallery">' + wide.map(function (im, i) { return '<a class="es-g" href="' + esc(im[0]) + '" target="_blank" rel="noopener">' + imgTag(im, p.title + ', image ' + (i + 1)) + '</a>'; }).join('') + '</div>';
    }
    if (!showcase) showcase = '<div class="es-video es-video--empty" style="--c:' + p.color + '"><span class="es-video__ph">WORK COMING SOON</span></div>';

    /* Sectioned layout (window.SECTIONS): Final work first and biggest, then Process,
       then Moodboard + references. Each section: title, caption, then its media. */
    var SEC = (window.SECTIONS || {})[p.id] || null;
    var groupHtml = { final: '', process: '', ref: '' };
    if (SEC) {
      var kindOf = function (im) { return im[1] && im[2] > im[1] * 2.2 ? 'tall' : (im[1] && im[2] >= im[1] * 0.95 ? 'port' : 'land'); };
      var shot = function (im, alt) { return '<a class="es-pic" href="' + esc(im[0]) + '" target="_blank" rel="noopener">' + imgTag(im, alt) + '</a>'; };
      var secHtml = function (s, g) {
        var ims = (s.imgs || []).map(function (k) { return imgs[k - 1]; }).filter(Boolean);
        var clips = (s.clips || []).map(function (k) { return p.clips[k - 1]; }).filter(Boolean);
        var media = '';
        if (s.video && p.video) media += '<div class="es-video" style="--c:' + p.color + '">' + embedHtml(p.video, p.title, p.cover) + '</div>';
        if (clips.length) media += '<div class="es-clips">' + clips.map(function (v) { return '<video src="' + esc(v) + '" controls playsinline muted loop preload="metadata"></video>'; }).join('') + '</div>';
        /* run of same-shaped images -> one row type: long pages scroll inside, portraits sit side by side,
           landscapes run full width in Final work and two-up in Process / Moodboard */
        var runs = [];
        ims.forEach(function (im, i) {
          var k = kindOf(im);
          if (g !== 'final' && k !== 'tall') k = 'mix'; /* process + moodboard: one even grid per section */
          var last = runs[runs.length - 1];
          if (last && last.k === k) last.items.push([im, i]); else runs.push({ k: k, items: [[im, i]] });
        });
        runs.forEach(function (r) {
          var alt = function (it) { return p.title + ': ' + s.title + (ims.length > 1 ? ', ' + (it[1] + 1) + ' of ' + ims.length : ''); };
          var n = r.items.length;
          var cells = r.items.map(function (it) { return r.k === 'tall' ? '<a class="es-long" href="' + esc(it[0][0]) + '" target="_blank" rel="noopener">' + imgTag(it[0], alt(it)) + '</a>' : shot(it[0], alt(it)); }).join('');
          if (r.k === 'tall') media += '<div class="es-longs">' + cells + '</div>';
          else if (r.k === 'mix') media += '<div class="es-set es-set--' + (n === 1 ? 'full' : n % 3 === 0 ? 3 : 2) + '">' + cells + '</div>';
          else if (r.k === 'port') media += '<div class="es-set es-set--' + (n === 1 ? 'one' : n <= 3 ? n : (n % 4 === 0 ? 4 : 3)) + '">' + cells + '</div>';
          else media += '<div class="es-set ' + (n === 1 ? 'es-set--full' : s.cols ? 'es-set--' + s.cols : g === 'final' ? 'es-set--full' : 'es-set--2') + '">' + cells + '</div>';
        });
        return '<div class="es-sec">' +
          '<div class="es-sec__head"><h3 class="es-sec__title">' + esc(s.title) + '</h3>' + (s.text ? '<p class="es-sec__text">' + esc(s.text) + '</p>' : '') + '</div>' +
          '<div class="es-sec__media">' + media + '</div>' +
        '</div>';
      };
      SEC.forEach(function (s) { var g = s.g === 'process' || s.g === 'ref' ? s.g : 'final'; groupHtml[g] += secHtml(s, g); });
    }
    var part = 0;
    var group = function (key, title, kicker) {
      if (!groupHtml[key]) return '';
      part++;
      return '<section class="es-section es-group es-group--' + key + '" id="part-' + key + '" aria-labelledby="grp-' + key + '"><div class="es-wrap">' +
        '<div class="es-group__head"><p class="es-kicker">PART ' + String(part).padStart(2, '0') + ' · ' + kicker + '</p><h2 class="es-h2" id="grp-' + key + '">' + title + '</h2></div>' +
        groupHtml[key] +
      '</div></section>';
    };

    /* hero art = the project's cover at its own shape (kept between 4:5 and 12:5) */
    var heroImg = p.cover || (imgs[0] && imgs[0][0]) || '';
    var heroRatio = p.coverRatio || (!p.cover && imgs[0] && imgs[0][1] ? imgs[0][1] + ' / ' + imgs[0][2] : '16 / 10');
    var hr = String(heroRatio).split('/');
    heroRatio = Math.min(2.4, Math.max(0.8, (parseFloat(hr[0]) / parseFloat(hr[1] || 1)) || 1.6)).toFixed(3);
    var jumps = SEC ? [['part-final', 'Final work'], ['brief', 'Brief'], ['part-process', 'Process'], ['part-ref', 'Moodboard']].filter(function (j) {
      return j[0] === 'brief' || groupHtml[j[0].slice(5)];
    }) : [];

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

      '<section class="es-phero' + (heroImg ? ' es-phero--art' : '') + '" style="--c:' + p.color + '" aria-label="' + (isQuest ? 'Side quest' : 'Project') + '">' +
        '<span class="es-phero__num" aria-hidden="true">' + num(idx) + '</span>' +
        '<div class="es-wrap"><div class="es-phero__text"><div>' +
          '<div class="es-pills"><span class="es-chip">' + (isQuest ? 'SIDE QUEST · ' + esc(upper(p.genre)) : 'TIER ' + num(idx) + ' · REWARD UNLOCKED') + '</span>' + (p.badge ? '<span class="es-chip es-chip--light">' + esc(p.badge) + '</span>' : '') + '</div>' +
          '<h1>' + esc(p.title) + '</h1>' +
          '<p class="es-phero__desc">' + esc(p.desc) + '</p>' +
        '</div>' +
        '<dl><div><dt>ROLE</dt><dd>' + esc(p.role) + '</dd></div><div><dt>CLASS</dt><dd>' + esc(p.genre) + '</dd></div><div><dt>SEASON</dt><dd>' + esc(p.when) + '</dd></div>' +
          (p.tools && p.tools.length ? '<div class="es-phero__tools"><dt>TOOLS</dt><dd>' + esc(p.tools.join(' · ')) + '</dd></div>' : '') + '</dl>' +
        '</div>' +
        (heroImg ? '<a class="es-phero__art" href="' + esc(heroImg) + '" target="_blank" rel="noopener" style="aspect-ratio:' + heroRatio + '"><img src="' + esc(heroImg) + '" alt="' + esc(p.title) + ': the final result" decoding="async" fetchpriority="high"></a>' : '') +
        '</div>' +
      '</section>' +

      (SEC ? '<nav class="es-jump" aria-label="On this page"><div class="es-wrap es-jump__row">' + jumps.map(function (j) { return '<a href="#' + j[0] + '">' + j[1] + '</a>'; }).join('') + '</div></nav>' : '') +

      (SEC ? group('final', 'Final work', 'THE RESULT') : '') +

      '<section class="es-wrap es-brief' + (SEC ? ' es-brief--mid' : '') + '" id="brief" aria-label="The brief">' +
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

      (SEC
        ? group('process', 'Process', 'HOW IT WAS MADE') + group('ref', 'Moodboard + references', 'WHERE IT STARTED')
        : '<section class="es-section" aria-label="Showcase"><div class="es-wrap">' +
            '<p class="es-kicker">SHOWCASE</p><h2 class="es-h2">The work</h2>' +
            '<div class="es-showcase">' + showcase + '</div>' +
          '</div></section>') +

      '<section class="es-section" aria-label="Continue"><div class="es-wrap">' +
        '<p class="es-kicker">CONTINUE?</p>' +
        '<div class="es-continue">' +
          '<a class="es-cont es-cont--prev" href="' + urlOf(prev) + '"><span class="es-cont__label">← PREVIOUS ' + unit + ' · ' + num(pi) + '</span><span class="es-cont__title">' + esc(prev.title) + '</span><span class="es-cont__genre">' + esc(upper(prev.genre)) + '</span></a>' +
          '<a class="es-cont es-cont--next" style="--c:' + next.color + '" href="' + urlOf(next) + '"><span class="es-cont__num" aria-hidden="true">' + num(ni) + '</span><span class="es-cont__label">NEXT ' + unit + ' · ' + num(ni) + ' →</span><span class="es-cont__title">' + esc(next.title) + '</span><span class="es-cont__genre">' + esc(upper(next.genre)) + '</span></a>' +
        '</div>' +
        '<div class="es-btnrow"><a class="es-btn" href="' + (isQuest ? 'play.html' : 'index.html#work') + '">' + (isQuest ? 'All side quests' : 'All projects') + '</a><a class="es-btn es-btn--ghost" href="index.html#contact">Contact me</a></div>' +
      '</div></section>';
    projEl.closest('main').classList.add('has-pbar');

    /* jump bar: sits under the sticky header and marks the part you're reading */
    var jumpEl = projEl.querySelector('.es-jump');
    var headerEl = document.querySelector('.es-header');
    var setHeadH = function () { if (headerEl) root.style.setProperty('--es-headh', headerEl.offsetHeight + 'px'); };
    setHeadH(); window.addEventListener('resize', setHeadH);
    if (jumpEl) {
      var links = jumpEl.querySelectorAll('a');
      var parts = jumps.map(function (j) { return document.getElementById(j[0]); }).filter(Boolean);
      var lastId = '';
      var markJump = function () {
        /* the part whose top has passed the line just under the jump bar */
        var line = jumpEl.getBoundingClientRect().bottom + 120, id = parts[0].id;
        parts.forEach(function (el) { if (el.getBoundingClientRect().top <= line) id = el.id; });
        if (id === lastId) return;
        lastId = id;
        links.forEach(function (a) { if (a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
      };
      var ticking = false;
      window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(function () { ticking = false; markJump(); }); } }, { passive: true });
      window.addEventListener('resize', markJump);
      markJump();
    }

    /* keyboard: left / right arrows move between entries, like a game menu */
    document.addEventListener('keydown', function (e) {
      if (e.altKey || e.ctrlKey || e.metaKey || /input|textarea|select|video/i.test(e.target.tagName)) return;
      if (e.key === 'ArrowRight') location.href = urlOf(next);
      if (e.key === 'ArrowLeft') location.href = urlOf(prev);
    });
  }

  /* ---------- Play: Cutscenes (animations as video players with sound, no autoplay) ---------- */
  var cutsEl = document.getElementById('cutscenes');
  var C = window.CUTSCENES || [];
  if (cutsEl && C.length) {
    cutsEl.innerHTML = C.map(function (c) {
      return '<article class="es-story es-cut">' +
        '<div class="es-story__view es-cut__view"><video src="' + esc(c.video) + '"' + (c.poster ? ' poster="' + esc(c.poster) + '"' : '') + ' controls playsinline preload="metadata" aria-label="' + esc(c.title) + ' (video with sound)"></video></div>' +
        '<div class="es-story__info">' +
          '<p class="es-story__meta">' + esc(upper(c.type)) + '</p>' +
          '<h3 class="es-story__title">' + esc(c.title) + '</h3>' +
          (c.text ? '<p class="es-story__text">' + esc(c.text) + '</p>' : '') +
          (c.tools && c.tools.length ? '<p class="es-story__tools"><span class="es-flip__label">MADE WITH</span>' + c.tools.map(function (t) { return '<span class="es-pill">' + esc(t) + '</span>'; }).join('') + '</p>' : '') +
        '</div></article>';
    }).join('');
    /* one cutscene at a time: starting one pauses the others */
    var vids = cutsEl.querySelectorAll('video');
    vids.forEach(function (v) { v.addEventListener('play', function () { vids.forEach(function (o) { if (o !== v) o.pause(); }); }); });
  }

  /* ---------- Play: Story mode slideshows (arrows, dots, swipe, keyboard, autoplay) ---------- */
  var storiesEl = document.getElementById('stories');
  var S = window.STORIES || [];
  if (storiesEl && S.length) {
    var calm = window.matchMedia('(prefers-reduced-motion: reduce)');
    storiesEl.innerHTML = S.map(function (st, si) {
      var ims = (M[st.id] && M[st.id].images) || [];
      return '<article class="es-story" data-i="' + si + '" aria-roledescription="carousel" aria-label="' + esc(st.title) + '">' +
        '<div class="es-story__view" tabindex="0" aria-label="' + esc(st.title) + ' slides. Use left and right arrow keys.">' +
          '<div class="es-story__track">' + ims.map(function (im, k) {
            return '<figure class="es-story__slide" role="group" aria-roledescription="slide" aria-label="' + (k + 1) + ' of ' + ims.length + '"' + (k ? ' aria-hidden="true"' : '') + '>' +
              '<img src="' + esc(im[0]) + '" alt="' + esc(st.title + ', part ' + (k + 1) + ' of ' + ims.length) + '" loading="' + (k ? 'lazy' : 'eager') + '" decoding="async" draggable="false"></figure>';
          }).join('') + '</div>' +
          '<button type="button" class="es-story__arrow es-story__arrow--prev" aria-label="Previous slide">←</button>' +
          '<button type="button" class="es-story__arrow es-story__arrow--next" aria-label="Next slide">→</button>' +
        '</div>' +
        '<div class="es-story__info">' +
          '<div class="es-story__dots" role="tablist" aria-label="Choose a slide">' + ims.map(function (im, k) { return '<button type="button" role="tab" aria-label="Slide ' + (k + 1) + '" aria-selected="' + (k === 0) + '"></button>'; }).join('') + '</div>' +
          '<p class="es-story__meta">' + esc(upper(st.type)) + ' · ' + ims.length + ' PARTS</p>' +
          '<h3 class="es-story__title">' + esc(st.title) + '</h3>' +
          (st.text ? '<p class="es-story__text">' + esc(st.text) + '</p>' : '') +
          (st.tools && st.tools.length ? '<p class="es-story__tools"><span class="es-flip__label">MADE WITH</span>' + st.tools.map(function (t) { return '<span class="es-pill">' + esc(t) + '</span>'; }).join('') + '</p>' : '') +
        '</div>' +
      '</article>';
    }).join('');

    storiesEl.querySelectorAll('.es-story').forEach(function (card) {
      var track = card.querySelector('.es-story__track');
      var slides = card.querySelectorAll('.es-story__slide');
      var dots = card.querySelectorAll('.es-story__dots button');
      var n = slides.length, at = 0, timer = null, hover = false, seen = false;
      var startAt = (S[+card.getAttribute('data-i')] || {}).start || 0; /* STORIES start: slide index the show opens on */
      /* lazy images inside a sliding track never "scroll into view", so load the current + next slide by hand */
      var warm = function (j) { var im = slides[(j + n) % n] && slides[(j + n) % n].querySelector('img'); if (im && im.loading !== 'eager') im.loading = 'eager'; };
      var go = function (k) {
        at = (k + n) % n;
        warm(at); warm(at + 1); warm(at - 1);
        track.style.transform = 'translateX(' + (-100 * at) + '%)';
        slides.forEach(function (s, j) { if (j === at) s.removeAttribute('aria-hidden'); else s.setAttribute('aria-hidden', 'true'); });
        dots.forEach(function (d, j) { d.setAttribute('aria-selected', String(j === at)); });
      };
      var stop = function () { clearInterval(timer); timer = null; };
      if (startAt > 0 && startAt < n) { track.style.transition = 'none'; go(startAt); track.offsetHeight; track.style.transition = ''; }
      var start = function () { stop(); if (n > 1 && seen && !hover && !calm.matches && !document.hidden) timer = setInterval(function () { go(at + 1); }, 4000); };
      card.querySelector('.es-story__arrow--prev').addEventListener('click', function () { go(at - 1); start(); });
      card.querySelector('.es-story__arrow--next').addEventListener('click', function () { go(at + 1); start(); });
      dots.forEach(function (d, j) { d.addEventListener('click', function () { go(j); start(); }); });
      var view = card.querySelector('.es-story__view');
      view.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') { go(at - 1); start(); } if (e.key === 'ArrowRight') { go(at + 1); start(); } });
      /* pause while the pointer or keyboard focus is on the slideshow */
      card.addEventListener('mouseenter', function () { hover = true; stop(); });
      card.addEventListener('mouseleave', function () { hover = false; start(); });
      card.addEventListener('focusin', function () { hover = true; stop(); });
      card.addEventListener('focusout', function () { hover = false; start(); });
      /* swipe on touch screens */
      var x0 = null;
      view.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') x0 = e.clientX; });
      view.addEventListener('pointerup', function (e) { if (x0 === null) return; var dx = e.clientX - x0; x0 = null; if (Math.abs(dx) > 40) { go(at + (dx < 0 ? 1 : -1)); start(); } });
      /* only autoplay while on screen */
      if ('IntersectionObserver' in window) new IntersectionObserver(function (en) { seen = en[0].isIntersecting; if (seen) { warm(at + 1); start(); } else stop(); }, { threshold: 0.4 }).observe(card);
      else { seen = true; start(); }
      document.addEventListener('visibilitychange', function () { if (document.hidden) stop(); else start(); });
    });
  }

  /* ---------- Play page ---------- */
  var boardEl = document.getElementById('quest-board');
  var filtersEl = document.getElementById('quest-filters');
  if (boardEl && filtersEl) {
    /* fresh random order on every visit / refresh (Fisher–Yates); filters keep this visit's order */
    Q = Q.slice();
    for (var si = Q.length - 1; si > 0; si--) { var sj = Math.floor(Math.random() * (si + 1)); var sw = Q[si]; Q[si] = Q[sj]; Q[sj] = sw; }
    var TYPES = [['all', 'ALL'], ['painting', 'PAINTING'], ['drawing', 'DRAWING'], ['ink', 'INK'], ['digital', 'DIGITAL ART'], ['sketch', 'SKETCHBOOK'], ['3d', '3D, SCULPTURE'], ['graphic', 'GRAPHIC DESIGN'], ['editorial', 'EDITORIAL'], ['creator', 'CREATOR']];
    var NAME = {}; TYPES.forEach(function (t) { NAME[t[0]] = t[1]; });
    var want = new URLSearchParams(location.search).get('type');
    var current = TYPES.some(function (t) { return t[0] === want; }) ? want : 'all';
    var count = function (t) { return String(t === 'all' ? Q.length : Q.filter(function (q) { return q.type === t; }).length).padStart(2, '0'); };
    var setCount = document.getElementById('quest-total');
    if (setCount) setCount.textContent = String(Q.length + (window.STORIES || []).length + (window.CUTSCENES || []).length).padStart(2, '0');
    var typeTotal = document.getElementById('type-total');
    if (typeTotal) typeTotal.textContent = String(TYPES.filter(function (t) { return t[0] !== 'all' && +count(t[0]) > 0; }).length).padStart(2, '0');
    /* One plain image (or a looping video) per piece. Click / tap flips the card to show
       the title and what it was made with. Cards keep the art's shape, clamped to 3:4 – 4:3. */
    var still = window.matchMedia('(prefers-reduced-motion: reduce)');
    var ratioOf = function (q, x) {
      var d = (x && x.cover && x.coverRatio) || (x && x.images && x.images[0] && x.images[0][1] ? x.images[0][1] + ' / ' + x.images[0][2] : '') || q.ratio || '1 / 1';
      var p = String(d).split('/');
      var r = parseFloat(p[0]) / parseFloat(p[1] || 1);
      return Math.min(4 / 3, Math.max(3 / 4, r || 1));
    };
    var cardHtml = function (q) {
      var x = q.id ? X.find(function (e) { return e.id === q.id; }) : null;
      var cover = (x && (x.cover || (x.images && x.images[0] && x.images[0][0]))) || q.image || '';
      var vsrc = (x && x.video) || q.video || ''; /* a card can loop a short silent mp4, GIF-style */
      var video = /\.mp4(\?|$)/i.test(vsrc) ? vsrc : '';
      var tools = (x && x.tools) || q.tools || [];
      var when = (x && x.when) || q.when || '';
      var meta = NAME[q.type] + (when ? ' · ' + upper(when) : '');
      var front = video
        ? '<video src="' + esc(video) + '"' + (cover ? ' poster="' + esc(cover) + '"' : '') + ' muted loop playsinline preload="metadata"' + (still.matches ? '' : ' autoplay') + ' aria-hidden="true"></video>'
        : cover
          ? '<img src="' + esc(cover) + '" alt="" loading="lazy" decoding="async">'
          : '<span class="es-flip__plain">' + esc(q.title) + '</span>';
      var made = (q.sub ? '<span class="es-flip__sub">' + esc(q.sub) + '</span>' : '') + (tools.length
        ? '<span class="es-flip__label">MADE WITH</span><span class="es-flip__tools">' + tools.map(function (t) { return '<span class="es-pill">' + esc(t) + '</span>'; }).join('') + '</span>'
        : '');
      var said = q.title + '. ' + NAME[q.type].toLowerCase() + (q.sub ? '. ' + q.sub : '') + (tools.length ? '. Made with ' + tools.join(', ') : '');
      return '<button type="button" class="es-flip" aria-pressed="false" data-say="' + esc(said) + '" aria-label="' + esc(q.title + ': show details') + '" style="--c:' + q.color + ';aspect-ratio:' + ratioOf(q, x).toFixed(4) + '">' +
        '<span class="es-flip__inner">' +
          '<span class="es-flip__front">' + front + '</span>' +
          '<span class="es-flip__back" aria-hidden="true">' +
            '<span class="es-flip__meta">' + esc(meta) + '</span>' +
            '<span class="es-flip__title">' + esc(q.title) + '</span>' + made +
          '</span>' +
        '</span>' +
      '</button>';
    };
    var colCount = function () { var w = boardEl.clientWidth || window.innerWidth; return w < 560 ? 2 : w < 980 ? 3 : 4; };
    var shownCols = 0;
    var watch = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var v = en.target;
        if (en.isIntersecting && !still.matches) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } else { v.pause(); }
      });
    }, { rootMargin: '120px' }) : null;
    var renderBoard = function () {
      filtersEl.innerHTML = TYPES.filter(function (t) { return t[0] === 'all' || +count(t[0]) > 0; }).map(function (t) {
        return '<button type="button" class="es-filter" data-f="' + t[0] + '" aria-pressed="' + (t[0] === current) + '">' + t[1] + ' <span>' + count(t[0]) + '</span></button>';
      }).join('');
      /* fill columns shortest-first so the grid stays even and reads left to right */
      var n = shownCols = colCount(), cols = [], h = [];
      for (var i = 0; i < n; i++) { cols.push(''); h.push(0); }
      Q.filter(function (q) { return current === 'all' || q.type === current; }).forEach(function (q) {
        var x = q.id ? X.find(function (e) { return e.id === q.id; }) : null;
        var k = h.indexOf(Math.min.apply(null, h));
        cols[k] += cardHtml(q);
        h[k] += 1 / ratioOf(q, x) + 0.05;
      });
      if (watch) watch.disconnect();
      boardEl.innerHTML = cols.map(function (c) { return '<div class="es-qgrid__col">' + c + '</div>'; }).join('');
      if (watch) boardEl.querySelectorAll('video').forEach(function (v) { watch.observe(v); });
    };
    filtersEl.addEventListener('click', function (e) {
      var b = e.target.closest('[data-f]');
      if (b) { current = b.getAttribute('data-f'); renderBoard(); filtersEl.querySelector('[data-f="' + current + '"]').focus(); }
    });
    boardEl.addEventListener('click', function (e) {
      var c = e.target.closest('.es-flip');
      if (!c) return;
      var on = c.getAttribute('aria-pressed') !== 'true';
      c.setAttribute('aria-pressed', String(on));
      c.setAttribute('aria-label', on ? c.getAttribute('data-say') + '. Flip back' : c.querySelector('.es-flip__title').textContent + ': show details');
    });
    var resizeT;
    window.addEventListener('resize', function () {
      clearTimeout(resizeT);
      resizeT = setTimeout(function () { if (colCount() !== shownCols) renderBoard(); }, 150);
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

  /* ---------- Every page: header height for sticky bars ---------- */
  var siteHeader = document.querySelector('.es-header');
  var headH = function () { return siteHeader ? siteHeader.offsetHeight : 0; };
  var syncHeadH = function () { document.documentElement.style.setProperty('--es-headh', headH() + 'px'); };
  syncHeadH(); window.addEventListener('resize', syncHeadH);
  var calmScroll = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- Home: sticky section bar that marks the section you're in ---------- */
  var quick = document.querySelector('.es-quick');
  if (quick) {
    var qLinks = [].slice.call(quick.querySelectorAll('.es-quick__links a'));
    var qStrip = quick.querySelector('.es-quick__links');
    var qParts = qLinks.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
    var qLast = null;
    var markQuick = function () {
      var top = quick.getBoundingClientRect().top, stuck = top <= headH() + 1;
      quick.classList.toggle('is-stuck', stuck);
      var line = quick.getBoundingClientRect().bottom + 140, cur = -1;
      /* nothing is "current" while you're still on the title screen */
      if (stuck) qParts.forEach(function (el, i) { if (el && el.getBoundingClientRect().top <= line) cur = i; });
      /* at the very bottom of the page the last section counts as current */
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) cur = qParts.length - 1;
      if (cur === qLast) return;
      qLast = cur;
      qLinks.forEach(function (a, i) { if (i === cur) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
      /* phones: keep the current link visible in the swipe row */
      if (cur >= 0 && qStrip.scrollWidth > qStrip.clientWidth) {
        var a = qLinks[cur];
        qStrip.scrollTo({ left: a.offsetLeft - (qStrip.clientWidth - a.offsetWidth) / 2, behavior: calmScroll.matches ? 'auto' : 'smooth' });
      }
    };
    var qTick = false;
    window.addEventListener('scroll', function () { if (!qTick) { qTick = true; requestAnimationFrame(function () { qTick = false; markQuick(); }); } }, { passive: true });
    window.addEventListener('resize', markQuick);
    markQuick();
  }

  /* ---------- Every page: back-to-top button after you scroll ---------- */
  var toTop = document.createElement('button');
  toTop.type = 'button'; toTop.className = 'es-totop'; toTop.setAttribute('aria-label', 'Back to top');
  toTop.innerHTML = '<span aria-hidden="true">↑</span> TOP';
  document.body.appendChild(toTop);
  var showTop = function () { toTop.classList.toggle('is-on', window.scrollY > window.innerHeight * 0.9); };
  window.addEventListener('scroll', showTop, { passive: true }); showTop();
  toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: calmScroll.matches ? 'auto' : 'smooth' });
    var logo = document.querySelector('.es-logo'); if (logo) logo.focus({ preventScroll: true });
  });
})();

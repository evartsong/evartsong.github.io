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

  /* ---------- Shared: color theme, a 2-way Dark / Light switch ----------
     First visit follows the visitor's device; one click flips it and the choice is remembered. */
  var root = document.documentElement;
  var prefersLight = window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;
  function currentTheme() {
    var t = root.getAttribute('data-theme');
    return t === 'light' || t === 'dark' ? t : (prefersLight && prefersLight.matches ? 'light' : 'dark');
  }
  function syncTheme() {
    var now = currentTheme(), other = now === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme-now', now);
    var meta = document.querySelector('[data-theme-meta]');
    if (meta) meta.setAttribute('content', now === 'light' ? '#F3F4F6' : '#0B0D10');
    document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
      b.setAttribute('aria-label', 'Color theme: ' + now + '. Switch to ' + other);
      b.title = 'Switch to ' + other;
    });
  }
  function setTheme(t) {
    root.setAttribute('data-theme', t);
    try { localStorage.setItem('es-theme', t); } catch (e) {}
    syncTheme();
  }
  document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
    b.addEventListener('click', function () { setTheme(currentTheme() === 'dark' ? 'light' : 'dark'); });
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
        '<img src="' + esc(tileImg(p)) + '"' + (p.tilePos ? ' style="object-position:' + esc(p.tilePos) + '"' : '') + ' alt="" loading="' + (i < 3 ? 'eager' : 'lazy') + '" decoding="async">' +
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
    if (/\.mp4$/i.test(im[0])) return '<video src="' + esc(im[0]) + '"' + (im[1] ? ' width="' + im[1] + '" height="' + im[2] + '" style="aspect-ratio:' + im[1] + ' / ' + im[2] + '"' : '') + ' autoplay muted loop playsinline preload="metadata" aria-label="' + esc(alt) + '"></video>';
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
    if (p.video) showcase += '<div class="es-video" style="--c:' + p.color + '">' + embedHtml(p.video, p.title, p.poster || p.cover) + '</div>';
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
      var shot = function (im, alt) {
        /* a color-variant set: one tile that cycles through its colorways like a GIF (see es-cycle below) */
        if (im.frames && im.frames.length > 1) return '<a class="es-pic es-cycle" href="' + esc(im[0]) + '" target="_blank" rel="noopener">' +
          im.frames.map(function (f, i) { return imgTag(f, alt + (i ? ', color ' + (i + 1) : '')).replace('<img ', '<img' + (i ? ' aria-hidden="true"' : ' class="is-on"') + ' '); }).join('') +
          '<span class="es-cycle__n" aria-hidden="true">' + im.frames.length + ' ' + esc(im.word || 'COLORS') + '</span></a>';
        return '<a class="es-pic" href="' + esc(im[0]) + '" target="_blank" rel="noopener">' + imgTag(im, alt) + '</a>';
      };
      /* meta: { label, focus } for one image, from the section's labels: {n: 'text'} and focus: {n: 'left'|'right'|'top'|...} */
      var macShot = function (im, alt, scroll, meta) {
        meta = meta || {};
        var dur = scroll && im[1] ? Math.round(Math.min(40, Math.max(10, im[2] / im[1] * 2.2))) : 0;
        var pic = imgTag(im, alt);
        if (meta.focus) pic = pic.replace(/^<(img|video) /, '<$1 style="object-position:' + esc(meta.focus) + ' top" ');
        return '<a class="es-mac' + (scroll ? ' es-mac--scroll' : '') + '" href="' + esc(im[0]) + '" target="_blank" rel="noopener"' + (dur ? ' style="--dur:' + dur + 's"' : '') + '>' +
          '<span class="es-mac__screen"><span class="es-mac__view">' + pic + '</span></span><span class="es-mac__base" aria-hidden="true"></span>' +
          (meta.label ? '<span class="es-mac__label">' + esc(meta.label) + '</span>' : '') + '</a>';
      };
      var secHtml = function (s, g) {
        /* per-image label + crop anchor, keyed by image number */
        var metaOf = {};
        [['labels', 'label'], ['focus', 'focus'], ['start', 'start'], ['overlays', 'ov']].forEach(function (f) { /* start: where a long page's window opens (0-1); overlays: animated slices laid over a long email */
          Object.keys(s[f[0]] || {}).forEach(function (k) { var im = imgs[k - 1]; if (im) { (metaOf[im[0]] = metaOf[im[0]] || {})[f[1]] = s[f[0]][k]; } });
        });
        /* recipes: [{ ref, refLabel, fabric, out: [..], outLabel }] -> cards reading "reference + fabric = AI result",
           the result slot cycling through every AI shot like a GIF. Images used in a card leave the normal grid. */
        var used = {}, recipeHtml = '';
        if (s.recipes && s.recipes.length) {
          var cell = function (im, tag, ai) { return '<figure class="es-recipe__cell' + (ai ? ' is-ai' : '') + '"><figcaption class="es-recipe__tag">' + esc(tag) + '</figcaption>' + shot(im, p.title + ': ' + s.title + ', ' + tag) + '</figure>'; };
          recipeHtml = '<div class="es-recipes">' + s.recipes.map(function (r) {
            var ref = imgs[r.ref - 1], fab = r.fabric ? imgs[r.fabric - 1] : null;
            var outs = (r.out || []).map(function (k) { return imgs[k - 1]; }).filter(Boolean);
            if (!ref || !outs.length) return '';
            [r.ref, r.fabric].concat(r.out || []).forEach(function (k) { if (k) used[k] = 1; });
            var res = outs[0];
            if (outs.length > 1) { res = outs[0].slice(); res.frames = outs; res.word = 'SHOTS'; }
            return '<div class="es-recipe' + (fab ? '' : ' es-recipe--two') + '">' + cell(ref, r.refLabel || 'Reference') +
              '<span class="es-recipe__op" aria-hidden="true">' + (fab ? '+' : '→') + '</span>' +
              (fab ? cell(fab, r.fabricLabel || 'Fabric') + '<span class="es-recipe__op" aria-hidden="true">=</span>' : '') +
              cell(res, r.outLabel || 'AI result', true) + '</div>';
          }).join('') + '</div>';
        }
        /* sets:[[a, b, c], ...] folds each group of images into one cycling tile */
        var setOf = {}, made = {};
        (s.sets || []).forEach(function (st, si) { st.forEach(function (k) { setOf[k] = si; }); });
        var ims = [];
        (s.imgs || []).forEach(function (k) {
          var im = imgs[k - 1]; if (!im || used[k]) return;
          var si = setOf[k];
          if (si == null) { ims.push(im); return; }
          if (made[si]) { made[si].frames.push(im); return; }
          var t = im.slice(); t.frames = [im]; t.word = s.setWord; made[si] = t; ims.push(t); /* setWord: tag text, e.g. 'STYLES' */
        });
        var clips = (s.clips || []).map(function (k) { return p.clips[k - 1]; }).filter(Boolean);
        var media = recipeHtml;
        if (s.video && p.video) media +='<div class="es-video" style="--c:' + p.color + '">' + embedHtml(p.video, p.title, p.poster || p.cover) + '</div>';
        /* section videos loop silently like GIFs (they play only while on screen; see es-loop below) */
        var clipHtml = clips.length ? '<div class="es-clips">' + clips.map(function (v) { return '<video class="es-loop" src="' + esc(v) + '" muted loop playsinline preload="metadata"></video>'; }).join('') + '</div>' : '';
        if (!ims.length) media += clipHtml;
        /* run of same-shaped images -> one row type: long pages scroll inside, portraits sit side by side,
           landscapes two-up (never one huge image per row); phones get one per row in Final work */
        var runs = [];
        if (s.layout === 'pairs') {
          /* layout 'pairs': two images per row, a graphic at 1/3 next to a screen at 2/3, rows alternating sides */
          for (var pi2 = 0; pi2 < ims.length; pi2 += 2) {
            var row = ims.slice(pi2, pi2 + 2);
            media += '<div class="es-pair' + ((pi2 / 2) % 2 ? ' es-pair--flip' : '') + '">' + row.map(function (im) {
              var land = kindOf(im) === 'land', alt2 = p.title + ': ' + s.title;
              return '<div class="es-pair__cell' + (land ? ' is-screen' : '') + '">' + (land && /^macbook/.test(s.frame || '') ? macShot(im, alt2, false, metaOf[im[0]]) : shot(im, alt2)) + '</div>';
            }).join('') + '</div>';
          }
        }
        if (s.layout === 'poster') {
          /* layout 'poster': a comic page like the printed gallery poster: panel 1 big with panels 2 + 3 stacked
             beside it, then every later panel full width, all on one black board */
          media += '<div class="es-poster">' + ims.map(function (im, i) {
            return '<div class="es-poster__panel es-poster__panel--' + (i + 1) + '">' + shot(im, p.title + ': ' + s.title + ', scene ' + (i + 1) + ' of ' + ims.length) + '</div>';
          }).join('') + '</div>';
        }
        if (s.layout === 'trio') {
          /* layout 'trio': the first two images stacked on the left, the third (a tall one) beside them on the right */
          media += '<div class="es-trio">' + ims.map(function (im, i) {
            return '<div class="es-trio__cell es-trio__cell--' + (i + 1) + '">' + shot(im, p.title + ': ' + s.title + ', ' + (i + 1) + ' of ' + ims.length) + '</div>';
          }).join('') + '</div>';
        }
        if (s.layout !== 'pairs' && s.layout !== 'poster' && s.layout !== 'trio') ims.forEach(function (im, i) {
          var k = kindOf(im);
          if (g !== 'final' && k !== 'tall') k = 'mix'; /* process + moodboard: one even grid per section */
          var last = runs[runs.length - 1];
          if (last && last.k === k) last.items.push([im, i]); else runs.push({ k: k, items: [[im, i]] });
        });
        runs.forEach(function (r, ri) {
          if (ri === 1 && clipHtml) media += clipHtml; /* videos sit right after the first group of images */
          var alt = function (it) { return p.title + ': ' + s.title + (ims.length > 1 ? ', ' + (it[1] + 1) + ' of ' + ims.length : ''); };
          var n = r.items.length;
          /* frame: 'macbook' puts every image on a black MacBook screen; 'macbook-pages' only the long pages,
             which then scroll top to bottom on the screen in a loop, like a GIF */
          /* 'macbook-screens' frames screenshots (wide or long) but leaves square/portrait graphics as they are */
          var framed = s.frame === 'macbook' || (s.frame === 'macbook-pages' && r.k === 'tall') || (s.frame === 'macbook-screens' && r.k !== 'port');
          var cells = r.items.map(function (it) {
            if (framed) return macShot(it[0], alt(it), r.k === 'tall', metaOf[it[0][0]]);
            /* frame: 'phone' -> app screens on a black phone drawn in CSS, the same materials as the MacBook */
            if (s.frame === 'phone') return '<a class="es-phone" href="' + esc(it[0][0]) + '" target="_blank" rel="noopener"><span class="es-phone__screen">' + imgTag(it[0], alt(it)) + '</span></a>';
            var st = (metaOf[it[0][0]] || {}).start, ov = (metaOf[it[0][0]] || {}).ov;
            /* overlays: [[src or [frame srcs], top 0-1, height 0-1], ...] put the email's GIFs back in place, like the email that was sent */
            var ovs = ov ? ov.map(function (o) {
              var srcs = [].concat(o[0]);
              return '<span class="es-ov' + (srcs.length > 1 ? ' es-ov--frames' : '') + '" style="top:' + (o[1] * 100).toFixed(3) + '%;height:' + (o[2] * 100).toFixed(3) + '%" aria-hidden="true">' +
                srcs.map(function (src, fi) { return '<img src="' + esc(src) + '" alt="" decoding="async"' + (fi === 0 ? ' class="is-on"' : '') + '>'; }).join('') + '</span>';
            }).join('') : '';
            var body = ov ? '<span class="es-long__in">' + imgTag(it[0], alt(it)) + ovs + '</span>' : imgTag(it[0], alt(it));
            var lab = (metaOf[it[0][0]] || {}).label; /* page name, shown as a hover title, e.g. 'Early Black Friday · Faire' */
            return r.k === 'tall' ? '<a class="es-long" href="' + esc(it[0][0]) + '" target="_blank" rel="noopener"' + (st ? ' data-start="' + (+st) + '"' : '') + (lab ? ' title="' + esc(lab) + '"' : '') + '>' + body + '</a>' : shot(it[0], alt(it));
          }).join('');
          if (framed && r.k === 'tall') media += '<div class="es-set es-set--' + (n >= 3 ? 3 : 2) + '">' + cells + '</div>';
          else if (r.k === 'tall') media +='<div class="es-longs" style="--n:' + (n === 1 ? 2 : Math.min(n, 3)) + '">' + cells + '</div>'; /* long pages: at most 3 per row */
          else if (s.layout) media += '<div class="es-set es-set--' + (+s.layout === 1 ? (r.k === 'port' ? 'one' : 'full') : s.layout) + '">' + cells + '</div>'; /* layout picked in the page editor */
          else if (r.k === 'mix') media += '<div class="es-set es-set--' + (n === 1 ? 'full' : n % 3 === 0 ? 3 : 2) + '">' + cells + '</div>';
          else if (r.k === 'port') media += '<div class="es-set es-set--' + (n === 1 ? 'one' : n <= 3 ? n : (n % 4 === 0 ? 4 : 3)) + '">' + cells + '</div>';
          else media += '<div class="es-set ' + (n === 1 ? 'es-set--solo' : s.cols ? 'es-set--' + s.cols : 'es-set--2') + '">' + cells + '</div>';
        });
        if (ims.length && runs.length < 2) media += clipHtml;
        /* screen: '16 / 9' -> MacBook screens take the screenshots' own shape instead of 16:10 (nothing cropped) */
        if (s.screen && /^[\d.]+ ?\/ ?[\d.]+$/.test(s.screen)) media = media.split('class="es-mac__view"').join('class="es-mac__view" style="aspect-ratio:' + s.screen + '"');
        return '<div class="es-sec' + (s.phone === 2 ? ' es-sec--p2' : '') + (s.bare ? ' es-sec--bare' : '') + '">' + /* phone: 2 -> two per row on phones; bare: no card behind cut-out images */
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

    /* results: [['30%', 'open rate'], ...] -> a row of big numbers above What I did */
    var results = (p.results && p.results.length)
      ? '<p class="es-label">RESULTS</p><ul class="es-results">' + p.results.map(function (r) { return '<li><b>' + esc(r[0]) + '</b><span>' + esc(r[1]) + '</span></li>'; }).join('') + '</ul>'
      : '';

    projEl.innerHTML =
      '<div class="es-subbar"><div class="es-wrap">' +
        '<a class="es-back" href="' + (isQuest ? 'play.html' : './#work') + '">← <span class="es-d">' + (isQuest ? 'SIDE QUESTS' : 'SEASON PASS') + '</span><span class="es-m">' + (isQuest ? 'ALL PLAY' : 'ALL WORK') + '</span></a>' +
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
          results + did +
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
        '<div class="es-btnrow"><a class="es-btn" href="' + (isQuest ? 'play.html' : './#work') + '">' + (isQuest ? 'All side quests' : 'All projects') + '</a><a class="es-btn es-btn--ghost" href="./#contact">Contact me</a></div>' +
      '</div></section>';
    projEl.closest('main').classList.add('has-pbar');

    /* GIF-style section videos: play silently on loop while on screen, pause when scrolled away.
       With reduced motion they stay still and get normal controls instead. */
    var loops = projEl.querySelectorAll('video.es-loop');
    if (loops.length) {
      var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (calm || !('IntersectionObserver' in window)) loops.forEach(function (v) { if (calm) v.controls = true; else { v.autoplay = true; v.play().catch(function () {}); } });
      else {
        var lio = new IntersectionObserver(function (es) {
          es.forEach(function (e) { if (e.isIntersecting) { var pr = e.target.play(); if (pr) pr.catch(function () {}); } else e.target.pause(); });
        }, { rootMargin: '200px 0px' });
        loops.forEach(function (v) { lio.observe(v); });
      }
    }

    /* long pages with a start point open their window part-way down (e.g. below a header shared with the email beside it) */
    projEl.querySelectorAll('.es-long[data-start]').forEach(function (a) {
      var img = a.querySelector('img'); if (!img) return;
      var go = function () { a.scrollTop = img.offsetHeight * parseFloat(a.dataset.start); };
      if (img.complete && img.naturalWidth) go(); else img.addEventListener('load', go);
      window.addEventListener('resize', go);
    });

    /* long pages on MacBook screens scroll only while on screen */
    var macs = projEl.querySelectorAll('.es-mac--scroll');
    if (macs.length && 'IntersectionObserver' in window) {
      var mio = new IntersectionObserver(function (es) { es.forEach(function (e) { e.target.classList.toggle('is-playing', e.isIntersecting); }); });
      macs.forEach(function (a) { mio.observe(a); });
    } else macs.forEach(function (a) { a.classList.add('is-playing'); });

    /* color-variant tiles: step through the colorways every 0.9s while on screen (still with reduced motion) */
    var cycles = projEl.querySelectorAll('.es-cycle');
    var stillCycles = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (cycles.length && !stillCycles && 'IntersectionObserver' in window) {
      /* one shared clock: every tile on screen switches on the same beat, showing frame (tick % its length),
         so matched pairs all flip to the same style together */
      var tick = 0, live = [], clock = 0;
      var show = function (a) {
        var fr = a.querySelectorAll('img'), k = tick % fr.length;
        fr.forEach(function (f, i) { f.classList.toggle('is-on', i === k); });
        a.href = fr[k].getAttribute('src');
      };
      var cio = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          var i = live.indexOf(e.target);
          if (e.isIntersecting && i < 0) { live.push(e.target); show(e.target); }
          else if (!e.isIntersecting && i >= 0) live.splice(i, 1);
        });
        if (live.length && !clock) clock = setInterval(function () { tick++; live.forEach(show); }, 1100);
        else if (!live.length && clock) { clearInterval(clock); clock = 0; }
      });
      cycles.forEach(function (a) { cio.observe(a); });
    }

    /* email GIFs rebuilt from frames: step every 0.5s (the GIFs' own timing) while on screen */
    var ovFrames = projEl.querySelectorAll('.es-ov--frames');
    if (ovFrames.length && !stillCycles && 'IntersectionObserver' in window) {
      var otick = 0, olive = [], oclock = 0;
      var oshow = function (el) { var fr = el.querySelectorAll('img'), k = otick % fr.length; fr.forEach(function (f, i) { f.classList.toggle('is-on', i === k); }); };
      var oio = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          var i = olive.indexOf(e.target);
          if (e.isIntersecting && i < 0) olive.push(e.target); else if (!e.isIntersecting && i >= 0) olive.splice(i, 1);
        });
        if (olive.length && !oclock) oclock = setInterval(function () { otick++; olive.forEach(oshow); }, 500);
        else if (!olive.length && oclock) { clearInterval(oclock); oclock = 0; }
      });
      ovFrames.forEach(function (el) { oio.observe(el); });
    }

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

/* T1T Core · Great T1T RESET
   Plakat als visuelle Quelle. Rauschen wird zur Linie. */
(function () {
  "use strict";

  var STORAGE_KEY = "t1t-lang";
  var DEFAULT_LANG = "de";

  var COPY = {
    de: {
      "meta.title": "T1T CORE · Signal statt Rauschen",
      "meta.desc": "T1T Core ist die Kern-Check-Instanz. SIGNAL STATT RAUSCHEN. Great T1T RESET. Gestartet in Deggendorf. Gedacht für die Welt.",
      "meta.ogalt": "Great T1T RESET. SIGNAL STATT RAUSCHEN. KERN VERTRAUEN · RELEVANZ · ECHT. Gestartet in Deggendorf. Gedacht für die Welt.",
      "nav.lang": "Sprache",
      "hero.kicker": "Great T1T RESET",
      "hero.claim": "SIGNAL STATT RAUSCHEN",
      "hero.claim1": "SIGNAL STATT",
      "hero.claim2": "RAUSCHEN",
      "hero.sub": "Alles auf Null. Dann bleibt das Signal.",
      "kern.label": "KERN",
      "kern.lead": "T1T Core ist die Kern\u2011Check\u2011Instanz.",
      "kern.body": "Wir hören durch das Rauschen. Drei Stufen. Ein Ergebnis: der T1T SCORE.",
      "stage1.name": "VERTRAUEN",
      "stage1.line": "Hält, was versprochen wird.",
      "stage2.name": "RELEVANZ",
      "stage2.line": "Trifft, was jetzt gebraucht wird.",
      "stage3.name": "ECHT",
      "stage3.line": "Stimmt innen und außen überein.",
      "score.label": "ERGEBNIS",
      "score.title": "T1T SCORE",
      "score.wordplay": "In T1TCORE steckt SCORE.",
      "score.body": "Drei Stufen. Ein Wert. Klar und sichtbar.",
      "score.example": "Beispiel",
      "score.n1": "VERTRAUEN",
      "score.n2": "RELEVANZ",
      "score.n3": "ECHT",
      "niki.label": "NIKI",
      "niki.line1": "Natürliche Intelligenz und Künstliche Intelligenz im Einklang.",
      "niki.line2": "Der Mensch hat das letzte Wort.",
      "place.label": "RAUM",
      "place.body": "Für Unternehmen, Selbstständige und Marken im Raum Deggendorf.",
      "place.line": "Gestartet in Deggendorf. Gedacht für die Welt.",
      "cta.button": "Kontakt über X",
      "cta.note": "Ein kurzes Schreiben reicht.",
      "footer.init": "Initiative von Thomas Malyska",
      "footer.foto": "dargestellt von Fotomek",
      "footer.imp": "Impressum",
      "footer.dat": "Datenschutz",
      "footer.proto": "Noch nicht veröffentlicht",
      "legal.imp.title": "Impressum",
      "legal.imp.body": "Diese Seite ist ein Platzhalter. Angaben zum Impressum folgen.",
      "legal.dat.title": "Datenschutz",
      "legal.dat.body": "Diese Seite ist ein Platzhalter. Angaben zum Datenschutz folgen.",
      "legal.back": "Zurück zur Seite"
    },
    en: {
      "meta.title": "T1T CORE · Signal over Noise",
      "meta.desc": "T1T Core is the core check instance. SIGNAL OVER NOISE. Great T1T RESET. Started in Deggendorf. Meant for the world.",
      "meta.ogalt": "Great T1T RESET. SIGNAL OVER NOISE. CORE TRUST · RELEVANCE · REAL. Started in Deggendorf. Meant for the world.",
      "nav.lang": "Language",
      "hero.kicker": "Great T1T RESET",
      "hero.claim": "SIGNAL OVER NOISE",
      "hero.claim1": "SIGNAL OVER",
      "hero.claim2": "NOISE",
      "hero.sub": "All back to zero. Then the signal remains.",
      "kern.label": "CORE",
      "kern.lead": "T1T Core is the core check instance.",
      "kern.body": "We listen through the noise. Three stages. One result: the T1T SCORE.",
      "stage1.name": "TRUST",
      "stage1.line": "Holds what is promised.",
      "stage2.name": "RELEVANCE",
      "stage2.line": "Meets what is needed now.",
      "stage3.name": "REAL",
      "stage3.line": "True inside and out.",
      "score.label": "RESULT",
      "score.title": "T1T SCORE",
      "score.wordplay": "SCORE lives inside T1TCORE.",
      "score.body": "Three stages. One value. Clear and visible.",
      "score.example": "Example",
      "score.n1": "TRUST",
      "score.n2": "RELEVANCE",
      "score.n3": "REAL",
      "niki.label": "NIKI",
      "niki.line1": "Natural intelligence and artificial intelligence in harmony.",
      "niki.line2": "The human has the last word.",
      "place.label": "REGION",
      "place.body": "For businesses, independent professionals and brands in the Deggendorf\u00A0region.",
      "place.line": "Started in Deggendorf. Meant for the world.",
      "cta.button": "Contact on X",
      "cta.note": "A short message is enough.",
      "footer.init": "An initiative by Thomas Malyska",
      "footer.foto": "rendered by Fotomek",
      "footer.imp": "Impressum",
      "footer.dat": "Privacy",
      "footer.proto": "Not yet published",
      "legal.imp.title": "Impressum",
      "legal.imp.body": "This page is a placeholder. Legal details will follow.",
      "legal.dat.title": "Privacy",
      "legal.dat.body": "This page is a placeholder. Privacy details will follow.",
      "legal.back": "Back to the page"
    }
  };

  /* Kontakt auf der Startseite nur über X (https://x.com/T1TCORE). */

  function reducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  var BASE_URL = "https://fotomek.github.io/t1tcore/";
  /* Umstellung auf t1tcore.com: BASE_URL ändern, siehe REPO-SETUP.md. */

  function queryLang() {
    try {
      var q = new URLSearchParams(window.location.search).get("lang");
      if (q === "en" || q === "de") return q;
    } catch (e) {}
    return null;
  }

  function readLang() {
    var q = queryLang();
    if (q) return q;
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "de") return stored;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  function currentLeaf() {
    var name = (window.location.pathname || "").split("/").pop() || "";
    if (!name || name === "index.html") return "";
    return name;
  }

  function pageUrl(lang) {
    var url = BASE_URL + currentLeaf();
    if (lang === "en") url += "?lang=en";
    return url;
  }

  function syncLangUrl(lang) {
    var url = pageUrl(lang);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:url"]', "content", url);
    try {
      var next = lang === "en" ? "?lang=en" : window.location.pathname;
      if (window.history && window.history.replaceState) {
        var cur = window.location.search;
        var want = lang === "en" ? "?lang=en" : "";
        if (cur !== want) {
          window.history.replaceState(null, "", want === "" ? window.location.pathname : want);
        }
      }
    } catch (e) {}
  }

  function writeLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function setMeta(sel, attr, value) {
    var el = document.querySelector(sel);
    if (el && value != null) el.setAttribute(attr, value);
  }

  function applyLang(lang) {
    var dict = COPY[lang] || COPY.de;
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);
    document.title = dict["meta.title"];

    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", dict["meta.desc"]);
    setMeta('meta[property="og:title"]', "content", dict["meta.title"]);
    setMeta('meta[property="og:description"]', "content", dict["meta.desc"]);
    setMeta('meta[property="og:image:alt"]', "content", dict["meta.ogalt"]);
    setMeta('meta[property="og:locale"]', "content", lang === "en" ? "en_US" : "de_DE");
    setMeta('meta[name="twitter:title"]', "content", dict["meta.title"]);
    setMeta('meta[name="twitter:description"]', "content", dict["meta.desc"]);
    syncLangUrl(lang);

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      var val = dict[key];
      if (val == null) continue;
      el.textContent = val;
    }

    var l1 = document.querySelector(".claim-l1");
    var l2 = document.querySelector(".claim-l2");
    if (l1) l1.textContent = dict["hero.claim1"];
    if (l2) l2.textContent = dict["hero.claim2"];
    fitClaim();

    var attrs = document.querySelectorAll("[data-i18n-aria]");
    for (var a = 0; a < attrs.length; a++) {
      var ak = attrs[a].getAttribute("data-i18n-aria");
      if (dict[ak] != null) attrs[a].setAttribute("aria-label", dict[ak]);
    }

    var buttons = document.querySelectorAll(".lang button");
    for (var b = 0; b < buttons.length; b++) {
      var isActive = buttons[b].getAttribute("data-set-lang") === lang;
      buttons[b].classList.toggle("is-active", isActive);
      buttons[b].setAttribute("aria-pressed", isActive ? "true" : "false");
    }
  }


  function fitClaim() {
    var lines = [
      document.querySelector(".claim-l1"),
      document.querySelector(".claim-l2")
    ];
    for (var i = 0; i < lines.length; i++) {
      var el = lines[i];
      if (!el) continue;
      el.removeAttribute("textLength");
      var nat = 0;
      try {
        nat = el.getComputedTextLength();
      } catch (e) {
        nat = 0;
      }
      if (!nat) {
        el.setAttribute("textLength", "1000");
        continue;
      }
      /* Zeile 1 darf voll die Breite füllen. Zeile 2 (besonders EN NOISE)
         höchstens 1.48fach strecken, sonst zerfließen die Buchstaben. */
      var cap = i === 0 ? 1.35 : 1.48;
      var target = 1000 / nat <= cap ? 1000 : Math.round(nat * cap);
      el.setAttribute("textLength", String(target));
    }
  }

  function initLang() {
    applyLang(readLang());
    var buttons = document.querySelectorAll(".lang button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function (ev) {
        var next = ev.currentTarget.getAttribute("data-set-lang");
        if (next !== "de" && next !== "en") return;
        writeLang(next);
        applyLang(next);
      });
    }
  }

  /* --- Rauschen wird zur Linie (Plakat) --- */

  function mulberry32(a) {
    return function () {
      var t = (a += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /* Hüllkurve im Endzustand: links hoch, rechts nur die Linie.
     t in [0,1]. Angepasst an das Plakat. */
  function envelope(t) {
    if (t < 0.012) {
      return Math.pow(t / 0.012, 0.55) * 1;
    }
    if (t >= 0.72) return 0;
    var u = (t - 0.012) / 0.708;
    return Math.pow(1 - u, 1.55);
  }

  function gauss2(rng) {
    var g1 = rng();
    var g2 = rng();
    return (
      Math.sqrt(-2 * Math.log(Math.max(1e-6, g1))) *
      Math.cos(2 * Math.PI * g2)
    );
  }

  function buildParticles(cssW) {
    var rng = mulberry32(0x715c0);
    var list = [];
    var nCore = Math.min(16000, Math.max(5000, Math.floor(cssW * 18)));
    var nSpray = Math.min(6000, Math.max(1800, Math.floor(cssW * 5.5)));
    var i;
    for (i = 0; i < nCore; i++) {
      var x = Math.pow(rng(), 0.7);
      if (rng() < 0.12) x = rng() * 0.62;
      var g = gauss2(rng) * 0.7;
      list.push({
        x: x,
        g: g,
        b: 0.62 + rng() * 0.38,
        s: 0.85 + rng() * 0.55,
        k: 0
      });
    }
    for (i = 0; i < nSpray; i++) {
      var xs = Math.pow(rng(), 0.52);
      var gs = gauss2(rng);
      if (rng() < 0.12) gs *= 1.7;
      list.push({
        x: xs,
        g: gs,
        b: 0.28 + rng() * 0.55,
        s: 0.7 + rng() * 1.35,
        k: 1
      });
    }
    return list;
  }

  function startHero() {
    var canvas = document.querySelector(".hero-canvas");
    if (!canvas) {
      document.documentElement.classList.add("is-hero-done");
      return;
    }
    var ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    var particles = [];
    var cssW = 0;
    var cssH = 0;
    var dpr = 1;
    var progress = reducedMotion() ? 1 : 0;
    var running = true;
    var started = false;
    var t0 = 0;
    var duration = 2100;

    function resize() {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      cssW = canvas.clientWidth || canvas.parentElement.clientWidth || 1;
      cssH = canvas.clientHeight || 1;
      canvas.width = Math.floor(cssW * dpr);
      canvas.height = Math.floor(cssH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = buildParticles(cssW);
    }

    function draw(p) {
      ctx.clearRect(0, 0, cssW, cssH);
      var mid = cssH / 2;
      var maxAmp = cssH * 0.52;
      var lineEnd = cssW * (0.12 + 0.88 * Math.min(1, p * 1.15));

      /* Linie zuerst: links vom Rauschen überdeckt, rechts sauber. */
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = Math.max(1, 1.15);
      ctx.lineCap = "butt";
      ctx.beginPath();
      ctx.moveTo(0, mid);
      ctx.lineTo(lineEnd, mid);
      ctx.stroke();

      for (var i = 0; i < particles.length; i++) {
        var pt = particles[i];
        var target = envelope(pt.x) * maxAmp;
        var startEnv = maxAmp * (0.9 + 0.06 * (1 - pt.x));
        var amp = startEnv + (target - startEnv) * p;
        if (amp < 1.15) continue;
        var spread = pt.k === 0 ? 0.38 : 0.5;
        var y = mid + pt.g * amp * spread;
        if (y < -2 || y > cssH + 2) continue;
        var fadeRight = 1;
        if (pt.x > 0.58) fadeRight = Math.max(0, 1 - (pt.x - 0.58) / 0.2);
        fadeRight = fadeRight * fadeRight;
        var vert = Math.exp(-Math.abs(pt.g) * (pt.k === 0 ? 0.85 : 0.45));
        var alpha = pt.b * (0.5 + 0.5 * vert) * fadeRight;
        alpha *= 0.62 + 0.38 * p;
        if (alpha < 0.04) continue;
        ctx.fillStyle = "rgba(255,255,255," + Math.min(1, alpha) + ")";
        ctx.fillRect(pt.x * cssW, y, pt.s, pt.s);
      }
    }

    function frame(now) {
      if (!running) return;
      if (!started) {
        started = true;
        t0 = now;
      }
      var t = Math.min(1, (now - t0) / duration);
      var eased = 1 - Math.pow(1 - t, 3.2);
      progress = eased;
      draw(progress);
      if (t < 1) {
        requestAnimationFrame(frame);
      } else {
        progress = 1;
        draw(1);
        document.documentElement.classList.add("is-hero-done");
        running = false;
      }
    }

    resize();
    window.addEventListener("resize", function () {
      resize();
      draw(progress);
    });

    if (reducedMotion()) {
      progress = 1;
      draw(1);
      document.documentElement.classList.add("is-hero-done");
      return;
    }

    draw(0);
    requestAnimationFrame(frame);
  }

  document.documentElement.classList.remove("no-js");
  initLang();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fitClaim);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startHero);
  } else {
    startHero();
  }
})();

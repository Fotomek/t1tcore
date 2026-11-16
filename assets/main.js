/* T1T Core · Great T1T RESET
   Plakat als visuelle Quelle. Rauschen wird zur Linie. */
(function () {
  "use strict";

  var STORAGE_KEY = "t1t-lang";
  var DEFAULT_LANG = "de";

  var DM_BASE = "https://x.com/messages/compose?recipient_id=2050408646815715328&text=";

  var COPY = {
    de: {
      "meta.title": "T1T CORE · Signal statt Rauschen",
      "meta.desc": "T1T Core ist die Kern-Check-Instanz. SIGNAL STATT RAUSCHEN. Great T1T RESET. Gestartet in Deggendorf. Gedacht für die Welt.",
      "meta.ogalt": "T1T CORE Logo, weiß auf Schwarz, mit einer klaren weißen Signallinie.",
      "brand.logo.alt": "T1T CORE Logo · zur Startseite",
      "nav.lang": "Sprache",
      "hero.kicker": "Great T1T RESET",
      "offer.label": "TRUST",
      "offer.line": "TRUST · die ehrliche Analyse deiner Marke nach dem MIKI Prinzip.",
      "offer.benefit": "Du siehst klar, wo deine Marke Vertrauen schafft und wo sie es verliert. Geprüft von Mensch und Maschine.",
      "offer.button": "Analyse anfragen",
      "dm.text": "Hallo T1T CORE, ich möchte eine TRUST Analyse für meine Marke anfragen. Marke: … Website oder Profil: …",
      "flow.label": "ABLAUF",
      "flow.lead": "Drei Schritte. Ehrlich geplant.",
      "flow.s1.name": "Anfrage",
      "flow.s1.line": "Du schreibst eine kurze Nachricht auf X. Marke und Link reichen.",
      "flow.s2.name": "Analyse",
      "flow.s2.line": "T1T Core prüft deine Marke auf Vertrauen, Relevanz und Echtheit. Signal statt Rauschen.",
      "flow.s3.name": "Ergebnis",
      "flow.s3.line": "Thomas Malyska prüft jedes Ergebnis persönlich und bespricht es mit dir. Das ist das MIKI Prinzip: Mensch und Maschine, der Mensch hat das letzte Wort.",
      "flow.time": "Ehrlicher Zeitplan · Dauer bis zum Ergebnis: 3 Tage. Kein Versprechen, das wir nicht halten.",
      "entry.label": "EINSTIEG",
      "entry.lead": "Klein anfangen. Klar sehen.",
      "entry.body": "Die TRUST Analyse zum Einstiegspreis von 190 €.",
      "entry.time": "Dauer bis zum Ergebnis: 3 Tage.",
      "entry.tax": "Rechnung über Fotomek. Gemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen.",
      "founder.label": "WER PRÜFT",
      // ausgeblendet 16.11.2026: "founder.quote": "„Ich prüfe jedes Ergebnis persönlich. Ehrlich, auch wenn es unbequem ist. Erst dann geht es an dich.“",
      // ausgeblendet 16.11.2026: "founder.draft": "Entwurf",
      "founder.org": "T1T Core ist eine Initiative von Thomas Malyska. Eine Foundation ist in Planung.",
      "voices.label": "STIMMEN",
      // ausgeblendet 16.11.2026: "voices.ph1": "[PLATZHALTER: Kundenstimme 1, Text folgt]",
      // ausgeblendet 16.11.2026: "voices.ph2": "[PLATZHALTER: Kundenstimme 2, Text folgt]",
      "score.ph": "Die Werte oben dienen nur zur Darstellung. Echte T1T SCORE Werte folgen.",
      "cases.label": "BEISPIELE AUS PROJEKTEN",
      "cases.score": "T1T SCORE",
      // ausgeblendet 16.11.2026: "cases.ph": "[PLATZHALTER]",
      "case.mc.text": "Berliner Familienunternehmen für Reinigung und Objektservice. Geprüft: Leistungen, Einsatzgebiet und häufige Fragen, abgestimmt mit dem Unternehmen, für einen klaren One-Pager.",
      "case.qg.text": "Gemeinnütziger Verein. Geprüft: Texte, Kennzeichnung der Bilder und Lesbarkeit der neuen Website, abgestimmt mit dem Verein.",
      "case.gw.text": "Treffpunkt für Erwachsene, die eine Auszeit suchen. Geprüft: eine Website in drei Sprachen und eine Auswahl an Häusern, jedes auf seiner offiziellen Seite nachgesehen.",
      "ask.label": "ANFRAGE",
      "ask.lead": "Schreib direkt auf X.",
      "ask.body": "Der Button öffnet eine Nachricht an @T1TCORE mit vorbereitetem Text. Du ergänzt nur deine Marke.",
      "ask.dm": "Analyse anfragen",
      "ask.dmaria": "Analyse anfragen · öffnet eine Nachricht an @T1TCORE auf X",
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
      "legal.back": "Zurück zur Seite",
      "page.imp.title": "Impressum · T1T CORE",
      "page.imp.desc": "Impressum von T1T Core. Initiative von Thomas Malyska, Fotomek, Deggendorf.",
      "page.dat.title": "Datenschutz · T1T CORE",
      "page.dat.desc": "Datenschutz von T1T Core. Keine Cookies, kein Tracking. Hosting über GitHub Pages.",
      "xpost.summary": "In English",
      "hero.hint": "Wischen oder scrollen",
      "score.hint": "Tippen für ein Beispiel",
      "score.hint1": "VERTRAUEN, Tippen für ein Beispiel",
      "score.hint2": "RELEVANZ, Tippen für ein Beispiel",
      "score.hint3": "ECHT, Tippen für ein Beispiel",
      "score.aria1": "VERTRAUEN, Beispiel 80",
      "score.aria2": "RELEVANZ, Beispiel 70",
      "score.aria3": "ECHT, Beispiel 90",
      "xpost.label": "AKTUELL AUF X",
      "xpost.read": "Auf X lesen",
      "xpost.note": "Ohne X-Skript. Der Text liegt auf dieser Seite. Der Link führt zu X.",
      "sound.start": "Tippen zum Start",
      "sound.mute": "Stumm",
      "sound.on": "Ton an",
      "sound.soon": "Ton folgt bald."
    },
    en: {
      "meta.title": "T1T CORE · Signal over Noise",
      "meta.desc": "T1T Core is the core check instance. SIGNAL OVER NOISE. Great T1T RESET. Started in Deggendorf. Meant for the world.",
      "meta.ogalt": "T1T CORE logo, white on black, with one clear white signal line.",
      "brand.logo.alt": "T1T CORE logo · to the homepage",
      "nav.lang": "Language",
      "hero.kicker": "Great T1T RESET",
      "offer.label": "TRUST",
      "offer.line": "TRUST · the honest analysis of your brand based on the MIKI principle.",
      "offer.benefit": "You see clearly where your brand builds trust and where it loses it. Reviewed by human and machine.",
      "offer.button": "Request analysis",
      "dm.text": "Hi T1T CORE, I would like to request a TRUST analysis for my brand. Brand: … Website or profile: …",
      "flow.label": "HOW IT WORKS",
      "flow.lead": "Three steps. Honestly planned.",
      "flow.s1.name": "Request",
      "flow.s1.line": "You send a short message on X. Your brand and a link are enough.",
      "flow.s2.name": "Analysis",
      "flow.s2.line": "T1T Core checks your brand for trust, relevance and what is real. Signal over noise.",
      "flow.s3.name": "Result",
      "flow.s3.line": "Thomas Malyska personally reviews every result and goes through it with you. That is the MIKI principle: human and machine, the human has the final say.",
      "flow.time": "An honest timeline · time to result: 3 days. No promise we cannot keep.",
      "entry.label": "GETTING STARTED",
      "entry.lead": "Start small. See clearly.",
      "entry.body": "The TRUST analysis at an entry price of €190.",
      "entry.time": "Time to result: 3 days.",
      "entry.tax": "Invoiced by Fotomek. No VAT is shown under the small business rule of § 19 UStG.",
      "founder.label": "WHO REVIEWS",
      // ausgeblendet 16.11.2026: "founder.quote": "“I personally review every result. Honestly, even when it is uncomfortable. Only then does it go to you.”",
      // ausgeblendet 16.11.2026: "founder.draft": "Draft",
      "founder.org": "T1T Core is an initiative by Thomas Malyska. A foundation is in planning.",
      "voices.label": "CLIENT VOICES",
      // ausgeblendet 16.11.2026: "voices.ph1": "[PLACEHOLDER: client testimonial 1, text to follow]",
      // ausgeblendet 16.11.2026: "voices.ph2": "[PLACEHOLDER: client testimonial 2, text to follow]",
      "score.ph": "The values above are for illustration only. Real T1T SCORE values will follow.",
      "cases.label": "EXAMPLES FROM PROJECTS",
      "cases.score": "T1T SCORE",
      // ausgeblendet 16.11.2026: "cases.ph": "[PLACEHOLDER]",
      "case.mc.text": "Berlin family business for cleaning and facility services. Checked: services, service area and frequent questions, agreed with the company, for one clear one pager.",
      "case.qg.text": "Charitable association. Checked: texts, labelling of the images and readability of the new website, agreed with the association.",
      "case.gw.text": "A meeting place for adults looking for time out. Checked: a website in three languages and a selection of houses, each one looked up on its official site.",
      "ask.label": "REQUEST",
      "ask.lead": "Write directly on X.",
      "ask.body": "The button opens a message to @T1TCORE with prepared text. You only add your brand.",
      "ask.dm": "Request analysis",
      "ask.dmaria": "Request analysis · opens a message to @T1TCORE on X",
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
      "footer.imp": "Legal notice",
      "footer.dat": "Privacy",
      "footer.proto": "Not yet published",
      "legal.imp.title": "Legal notice",
      "legal.imp.body": "This page is a placeholder. Legal details will follow.",
      "legal.dat.title": "Privacy",
      "legal.dat.body": "This page is a placeholder. Privacy details will follow.",
      "legal.back": "Back to the page",
      "page.imp.title": "Legal notice · T1T CORE",
      "page.imp.desc": "Legal notice of T1T Core. An initiative by Thomas Malyska, Fotomek, Deggendorf.",
      "page.dat.title": "Privacy · T1T CORE",
      "page.dat.desc": "Privacy notice of T1T Core. No cookies, no tracking. Hosted on GitHub Pages.",
      "xpost.summary": "In English",
      "hero.hint": "Swipe or scroll",
      "score.hint": "Tap for an example",
      "score.hint1": "TRUST, tap for an example",
      "score.hint2": "RELEVANCE, tap for an example",
      "score.hint3": "REAL, tap for an example",
      "score.aria1": "TRUST, example 80",
      "score.aria2": "RELEVANCE, example 70",
      "score.aria3": "REAL, example 90",
      "xpost.label": "LATEST ON X",
      "xpost.read": "Read on X",
      "xpost.note": "No X script. The text lives on this page. The link leads to X.",
      "sound.start": "Tap to start",
      "sound.mute": "Mute",
      "sound.on": "Sound on",
      "sound.soon": "Sound coming soon."
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

  /* Interne Links tragen die Sprache mit. */
  function syncLangLinks(lang) {
    var links = document.querySelectorAll("a[href]");
    for (var i = 0; i < links.length; i++) {
      var raw = links[i].getAttribute("href");
      var m = /^(?:\.\/)?(index\.html|impressum\.html|datenschutz\.html)?(\?[^#]*)?(#.*)?$/.exec(raw);
      if (!m || (!m[1] && !m[3] && !m[2])) continue;
      if (/^[a-z]+:/i.test(raw)) continue;
      var file = m[1] || "index.html";
      links[i].setAttribute("href", file + (lang === "en" ? "?lang=en" : "") + (m[3] || ""));
    }
  }

  /* X-Karte: Datum, Alt-Text und englische Zusammenfassung je Sprache. */
  function applyXCardLang(lang) {
    var card = document.getElementById("x-card");
    if (!card) return;
    var time = card.querySelector("time[data-date-de]");
    if (time) time.textContent = time.getAttribute(lang === "en" ? "data-date-en" : "data-date-de") || time.textContent;
    var img = card.querySelector(".x-card-media img[data-alt-de]");
    if (img) img.setAttribute("alt", img.getAttribute(lang === "en" ? "data-alt-en" : "data-alt-de") || img.alt);
    var sum = card.querySelector(".x-card-summary");
    if (sum) {
      if (lang === "en") sum.removeAttribute("hidden");
      else sum.setAttribute("hidden", "");
    }
  }

  function applyLang(lang) {
    var dict = COPY[lang] || COPY.de;
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);
    var leaf = currentLeaf();
    var pageKey = leaf === "impressum.html" ? "page.imp" : leaf === "datenschutz.html" ? "page.dat" : null;
    var title = pageKey ? dict[pageKey + ".title"] : dict["meta.title"];
    var descText = pageKey ? dict[pageKey + ".desc"] : dict["meta.desc"];
    document.title = title;

    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", descText);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", descText);
    setMeta('meta[property="og:locale:alternate"]', "content", lang === "en" ? "de_DE" : "en_US");
    setMeta('meta[property="og:image:alt"]', "content", dict["meta.ogalt"]);
    setMeta('meta[property="og:locale"]', "content", lang === "en" ? "en_US" : "de_DE");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", descText);
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

    var alts = document.querySelectorAll("[data-i18n-alt]");
    for (var al = 0; al < alts.length; al++) {
      var alk = alts[al].getAttribute("data-i18n-alt");
      if (dict[alk] != null) alts[al].setAttribute("alt", dict[alk]);
    }

    var buttons = document.querySelectorAll(".lang button");
    for (var b = 0; b < buttons.length; b++) {
      var isActive = buttons[b].getAttribute("data-set-lang") === lang;
      buttons[b].classList.toggle("is-active", isActive);
      buttons[b].setAttribute("aria-pressed", isActive ? "true" : "false");
    }

    var dms = document.querySelectorAll("[data-dm]");
    for (var d = 0; d < dms.length; d++) {
      if (dict["dm.text"] != null) dms[d].setAttribute("href", DM_BASE + encodeURIComponent(dict["dm.text"]));
    }
    syncLangLinks(lang);
    applyXCardLang(lang);
    refreshScoreAria(lang);
    refreshSoundLabel(lang);
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
    var visual = document.getElementById("hero-visual") || document.querySelector(".hero-visual");
    var hint = document.querySelector(".hero-hint");
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
    var progress = 0;
    var held = 0;
    var useHeld = false;
    var touching = false;
    var startX = 0;
    var startY = 0;
    var startP = 0;
    var scheduled = false;

    function resize() {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      cssW = canvas.clientWidth || (canvas.parentElement && canvas.parentElement.clientWidth) || 1;
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

    function scrollProgress() {
      var hero = document.querySelector(".hero");
      var h = (hero && hero.offsetHeight) || window.innerHeight || 1;
      return Math.max(0, Math.min(1, window.scrollY / (h * 0.58)));
    }

    function currentP() {
      if (reducedMotion()) return 1;
      if (touching || useHeld) {
        return Math.max(0, Math.min(1, held));
      }
      return scrollProgress();
    }

    function paint() {
      scheduled = false;
      progress = currentP();
      draw(progress);
      document.documentElement.classList.toggle("is-hero-done", progress >= 0.995);
      if (hint) hint.classList.toggle("is-gone", progress > 0.12);
    }

    function requestPaint() {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(paint);
    }

    function onScroll() {
      if (touching) return;
      if (useHeld) {
        var s = scrollProgress();
        /* Scroll übernimmt, sobald sich die Seite bewegt. */
        if (Math.abs(s - held) > 0.02) useHeld = false;
      }
      requestPaint();
    }

    function pointerPos(ev) {
      if (ev.touches && ev.touches[0]) {
        return { x: ev.touches[0].clientX, y: ev.touches[0].clientY };
      }
      return { x: ev.clientX, y: ev.clientY };
    }

    function onDown(ev) {
      if (reducedMotion()) return;
      var pt = pointerPos(ev);
      touching = true;
      useHeld = true;
      startX = pt.x;
      startY = pt.y;
      startP = currentP();
      held = startP;
    }

    function onMove(ev) {
      if (!touching) return;
      var pt = pointerPos(ev);
      var dx = pt.x - startX;
      var dy = startY - pt.y; /* Finger nach oben: Fortschritt */
      var w = cssW || window.innerWidth || 1;
      var h = cssH || 160;
      var fromX = dx / (w * 0.5);
      var fromY = dy / (h * 0.85);
      var delta;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
        delta = fromX;
        if (ev.cancelable) ev.preventDefault();
      } else {
        delta = fromY;
      }
      held = Math.max(0, Math.min(1, startP + delta));
      requestPaint();
    }

    function onUp() {
      if (!touching) return;
      touching = false;
      useHeld = true;
      held = Math.max(0, Math.min(1, held));
      requestPaint();
    }

    resize();
    window.addEventListener("resize", function () {
      resize();
      requestPaint();
    });
    window.addEventListener("scroll", onScroll, { passive: true });

    if (reducedMotion()) {
      document.documentElement.classList.add("is-reduced");
      progress = 1;
      draw(1);
      document.documentElement.classList.add("is-hero-done");
      if (hint) hint.classList.add("is-gone");
      return;
    }

    if (visual) {
      visual.addEventListener("pointerdown", function (ev) {
        if (ev.pointerType === "mouse" && ev.button !== 0) return;
        try { visual.setPointerCapture(ev.pointerId); } catch (e) {}
        onDown(ev);
      });
      visual.addEventListener("pointermove", onMove, { passive: false });
      visual.addEventListener("pointerup", onUp);
      visual.addEventListener("pointercancel", onUp);
    }

    draw(0);
    requestPaint();
  }

  /* --- SCORE Teaser: Tippen zeigt Beispielwert --- */

  var scoreRevealed = [false, false, false];
  var scoreAnims = [];

  function refreshScoreAria(lang) {
    var dict = COPY[lang] || COPY.de;
    var rows = document.querySelectorAll(".example-row");
    for (var i = 0; i < rows.length; i++) {
      var key = scoreRevealed[i] ? "score.aria" + (i + 1) : "score.hint" + (i + 1);
      if (dict[key]) rows[i].setAttribute("aria-label", dict[key]);
    }
  }

  function animateScore(el, target, immediate) {
    var num = el.querySelector("[data-score-num]");
    if (!num) return;
    if (immediate || reducedMotion()) {
      num.textContent = String(target);
      return;
    }
    var start = 0;
    var t0 = null;
    var dur = 820;
    function step(now) {
      if (t0 == null) t0 = now;
      var t = Math.min(1, (now - t0) / dur);
      var eased = 1 - Math.pow(1 - t, 3);
      num.textContent = String(Math.round(start + (target - start) * eased));
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initScore() {
    var rows = document.querySelectorAll(".example-row[data-score-val]");
    for (var i = 0; i < rows.length; i++) {
      (function (row, idx) {
        row.addEventListener("click", function () {
          var val = parseInt(row.getAttribute("data-score-val"), 10);
          if (!val) return;
          scoreRevealed[idx] = true;
          row.classList.add("is-revealed");
          animateScore(row, val, false);
          refreshScoreAria(document.documentElement.getAttribute("data-lang") || "de");
        });
      })(rows[i], i);
    }
    refreshScoreAria(document.documentElement.getAttribute("data-lang") || "de");
  }

  /* --- Brand Sound A: nur nach Tipp, OGG als Fallback --- */

  var sound = {
    audio: null,
    state: "idle" /* idle | playing | muted | soon */
  };

  function refreshSoundLabel(lang) {
    var btn = document.getElementById("sound-btn");
    if (!btn) return;
    var dict = COPY[lang || document.documentElement.getAttribute("data-lang") || "de"] || COPY.de;
    var key = "sound.start";
    if (sound.state === "soon") key = "sound.soon";
    else if (sound.state === "playing") key = "sound.mute";
    else if (sound.state === "muted") key = "sound.on";
    btn.textContent = dict[key] || dict["sound.start"];
    btn.classList.toggle("is-soon", sound.state === "soon");
    btn.setAttribute("aria-pressed", sound.state === "playing" ? "true" : "false");
  }

  function initSound() {
    var btn = document.getElementById("sound-btn");
    var audio = document.getElementById("brand-audio");
    if (!btn || !audio) return;
    sound.audio = audio;

    /* Kurzer Start-Ton (ca. 2,8 s), kein Loop. Auch bei reduced-motion kein Autoplay. */
    audio.loop = false;
    audio.preload = "none";

    audio.addEventListener("ended", function () {
      sound.state = "idle";
      try { audio.currentTime = 0; } catch (e) {}
      refreshSoundLabel();
    });

    btn.addEventListener("click", function () {
      if (sound.state === "playing") {
        audio.pause();
        sound.state = "muted";
        refreshSoundLabel();
        return;
      }
      if (sound.state === "muted") {
        audio.play().then(function () {
          sound.state = "playing";
          refreshSoundLabel();
        }).catch(function () {
          sound.state = "soon";
          refreshSoundLabel();
        });
        return;
      }
      /* idle oder soon: nur nach diesem Tipp starten, von vorn. */
      try { audio.currentTime = 0; } catch (e) {}
      audio.play().then(function () {
        sound.state = "playing";
        refreshSoundLabel();
      }).catch(function () {
        sound.state = "soon";
        refreshSoundLabel();
      });
    });

    refreshSoundLabel();
  }

  /* --- Neuester X-Post: lokale Karte, fetch posts.json wenn möglich --- */

  function fillXCard(data) {
    if (!data || !data.post) return;
    var card = document.getElementById("x-card");
    if (!card) return;
    var post = data.post;
    var acc = data.account || {};
    var who = card.querySelector(".x-card-who");
    var time = card.querySelector("time");
    var text = card.querySelector(".x-card-text");
    var link = card.querySelector(".x-card-link");
    if (who && acc.url) {
      who.href = acc.url;
      who.textContent = acc.username ? "@" + acc.username : who.textContent;
    }
    if (time) {
      if (post.created_at) time.setAttribute("datetime", post.created_at);
      if (post.date_de || post.created_at_berlin) time.setAttribute("data-date-de", post.date_de || post.created_at_berlin);
      if (post.date_en) time.setAttribute("data-date-en", post.date_en);
    }
    var sumEl = card.querySelector(".x-card-summary");
    if (sumEl && post.summary_en) {
      sumEl.innerHTML = "";
      var lab = document.createElement("span");
      lab.className = "x-card-summary-label";
      lab.textContent = "In English";
      sumEl.appendChild(lab);
      sumEl.appendChild(document.createTextNode(" " + post.summary_en));
    }
    if (text && post.text) text.textContent = post.text;
    if (link && post.url) link.href = post.url;
    var img = card.querySelector(".x-card-media img");
    var srcEl = card.querySelector(".x-card-media source");
    if (img && post.image) {
      if (post.image.jpg) img.setAttribute("src", post.image.jpg);
      if (post.image.alt_de || post.image.alt) img.setAttribute("data-alt-de", post.image.alt_de || post.image.alt);
      if (post.image.alt_en) img.setAttribute("data-alt-en", post.image.alt_en);
      if (srcEl && post.image.webp) {
        var set = post.image.webp + " 1080w";
        if (post.image.webp_small) set = post.image.webp_small + " 720w, " + set;
        srcEl.setAttribute("srcset", set);
      }
    }
    applyXCardLang(document.documentElement.getAttribute("data-lang") || "de");
  }

  function initXCard() {
    var inline = document.getElementById("t1t-posts");
    if (inline && inline.textContent) {
      try {
        fillXCard(JSON.parse(inline.textContent));
      } catch (e) {}
    }
    try {
      fetch("assets/posts.json", { cache: "no-store" })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (data) { if (data) fillXCard(data); })
        .catch(function () {});
    } catch (e) {}
  }

  document.documentElement.classList.remove("no-js");
  initLang();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fitClaim);
  }

  function boot() {
    startHero();
    initScore();
    initSound();
    initXCard();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

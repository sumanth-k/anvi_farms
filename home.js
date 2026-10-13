/* Full homepage engine. Each design page calls AF.home({variant, hero image}) and gets the same sections in its own look. */
AF.home = function (cfg) {
  var T = {
    en: {
      announce: "Fresh small batches from the farm · Order on WhatsApp",
      nav: ["Shop", "Our promise", "How to order", "Contact"],
      h: "From farmers to your family.",
      s: "Bilona ghee, honey and pasupu, made with honesty and care and delivered to your door.",
      cta1: "Shop now", cta2: "How to order",
      chips: ["Bilona method", "Small batches", "Order on WhatsApp"],
      stats: [["56K+", "follow the farm on Instagram"], ["4", "everyday farm products"], ["Bilona", "method, printed on our ghee label"], ["1 tap", "from product to WhatsApp order"]],
      shopT: "Our products", shopS: "Pick a size and add it to your cart. Your order goes to us on WhatsApp.",
      add: "Add to cart",
      whyT: "Why families choose Anvi Farms",
      why: [["Bilona method", "Ghee made the traditional way, as shown on our labels."], ["Small batches", "Limited stock means fresher jars, not old shelf stock."], ["From farmers to your family", "Made with honesty and care, and packed by our own team."], ["Easy ordering", "No app and no sign-up. Add to cart and send on WhatsApp."]],
      reelsT: "See it being made", reelsS: "Real reels from the farm, so you know who you are buying from.",
      reels: ["Unboxing fresh pasupu", "Our full range", "Limited cow ghee"], watch: "Watch on Instagram",
      storyT: "Made with honesty and care",
      storyP: "Every jar and pouch is packed by the Anvi Farms team. Our promise is simple: food you can trust, from farmers to your family.",
      storyB: "Follow our journey",
      howT: "How ordering works",
      how: [["Choose", "Pick your products and sizes."], ["Send on WhatsApp", "Your cart arrives as one ready message."], ["We confirm and dispatch", "We reply to confirm payment and delivery."]],
      ctaT: "Limited batches. Order while they last.", ctaB: "Order on WhatsApp",
      contact: "Contact", foot: "Design sample for Anvi Farms. Photos are from your Instagram and prices are examples.",
      cartLbl: "Cart"
    },
    te: {
      announce: "ఫామ్ నుండి తాజా చిన్న బ్యాచ్‌లు · వాట్సాప్‌లో ఆర్డర్",
      nav: ["షాప్", "మా వాగ్దానం", "ఆర్డర్ ఎలా", "సంప్రదించండి"],
      h: "రైతుల నుండి మీ కుటుంబానికి.",
      s: "బిలోనా నెయ్యి, తేనె, పసుపు. నిజాయితీ, శ్రద్ధతో తయారీ, మీ ఇంటికే డెలివరీ.",
      cta1: "ఇప్పుడే కొనండి", cta2: "ఆర్డర్ ఎలా",
      chips: ["బిలోనా పద్ధతి", "చిన్న బ్యాచ్‌లు", "వాట్సాప్‌లో ఆర్డర్"],
      stats: [["56K+", "ఇన్‌స్టాగ్రామ్‌లో ఫామ్‌ను అనుసరిస్తున్నారు"], ["4", "రోజువారీ ఫామ్ ఉత్పత్తులు"], ["బిలోనా", "మా నెయ్యి లేబుల్‌పై పద్ధతి"], ["1 ట్యాప్", "ఉత్పత్తి నుండి వాట్సాప్ ఆర్డర్‌కు"]],
      shopT: "మా ఉత్పత్తులు", shopS: "సైజు ఎంచుకుని కార్ట్‌లో జోడించండి. మీ ఆర్డర్ వాట్సాప్‌లో మాకు వస్తుంది.",
      add: "కార్ట్‌లో జోడించు",
      whyT: "కుటుంబాలు అన్వి ఫామ్స్‌ను ఎందుకు ఎంచుకుంటాయి",
      why: [["బిలోనా పద్ధతి", "మా లేబుల్స్‌పై చూపినట్లు సంప్రదాయ పద్ధతిలో నెయ్యి."], ["చిన్న బ్యాచ్‌లు", "పరిమిత స్టాక్ అంటే తాజా జార్లు."], ["రైతుల నుండి మీ కుటుంబానికి", "నిజాయితీ, శ్రద్ధతో తయారీ, మా బృందమే ప్యాక్ చేస్తుంది."], ["సులభమైన ఆర్డర్", "యాప్, సైన్-అప్ అవసరం లేదు. కార్ట్‌లో జోడించి వాట్సాప్‌లో పంపండి."]],
      reelsT: "తయారీని చూడండి", reelsS: "ఫామ్ నుండి నిజమైన రీల్స్, మీరు ఎవరి దగ్గర కొంటున్నారో తెలియడానికి.",
      reels: ["తాజా పసుపు అన్‌బాక్సింగ్", "మా పూర్తి శ్రేణి", "పరిమిత ఆవు నెయ్యి"], watch: "ఇన్‌స్టాగ్రామ్‌లో చూడండి",
      storyT: "నిజాయితీ, శ్రద్ధతో తయారీ",
      storyP: "ప్రతి జార్, పౌచ్ అన్వి ఫామ్స్ బృందం ప్యాక్ చేస్తుంది. మా వాగ్దానం: రైతుల నుండి మీ కుటుంబానికి నమ్మకమైన ఆహారం.",
      storyB: "మా ప్రయాణాన్ని అనుసరించండి",
      howT: "ఆర్డర్ ఎలా చేయాలి",
      how: [["ఎంచుకోండి", "ఉత్పత్తులు, సైజులు ఎంచుకోండి."], ["వాట్సాప్‌లో పంపండి", "మీ కార్ట్ ఒక సందేశంగా వస్తుంది."], ["నిర్ధారించి పంపుతాము", "చెల్లింపు, డెలివరీ నిర్ధారణకు మేము సమాధానం ఇస్తాము."]],
      ctaT: "పరిమిత బ్యాచ్‌లు. స్టాక్ ఉన్నంత వరకు ఆర్డర్ చేయండి.", ctaB: "వాట్సాప్‌లో ఆర్డర్",
      contact: "సంప్రదించండి", foot: "అన్వి ఫామ్స్ కోసం డిజైన్ నమూనా. ఫోటోలు మీ ఇన్‌స్టాగ్రామ్ నుండి, ధరలు ఉదాహరణలు.",
      cartLbl: "కార్ట్"
    }
  };
  var IG = "https://www.instagram.com/anvi_farms/", sel = {}, lastLang = null;
  var app = document.getElementById("app");
  function cartCount() { var n = document.getElementById("navCount"); if (n) n.textContent = AF.count(); }
  function draw() {
    var l = AF.lang(), t = T[l];
    lastLang = l; document.documentElement.lang = l; document.body.classList.toggle("te", l === "te");
    var ids = ["shop", "story", "how", "contact"];
    var cards = AF.products.map(function (p) {
      var lim = AF.limited(p), i = sel[p.id] || 0;
      return '<article class="card"><div class="ph">' + AF.art(p) + (lim ? '<span class="lim">' + lim + '</span>' : '') + '</div><div class="cb"><h3>' + AF.name(p) + '</h3><p>' + AF.desc(p) + '</p><div class="sizes">' + p.v.map(function (v, j) {
        return '<button class="sz' + (j === i ? ' on' : '') + '" data-id="' + p.id + '" data-j="' + j + '">' + v.l + '</button>';
      }).join("") + '</div><div class="buy"><b class="pr">' + AF.inr(p.v[i].p) + '</b><button class="add" data-id="' + p.id + '">' + t.add + '</button></div></div></article>';
    }).join("");
    var heroMedia = cfg.variant === "trio"
      ? '<div class="trio"><img src="img/cow-ghee.jpg" alt=""><img src="img/honey.jpg" alt=""><img src="img/pasupu.jpg" alt=""></div>'
      : '<div class="heroimg"><img src="' + cfg.img + '" alt="Anvi Farms products"></div>';
    var heroText = '<div class="herotxt"><span class="eyebrow">' + t.chips[0] + '</span><h1>' + t.h + '</h1><p>' + t.s + '</p><div class="ctas"><a class="btn1" href="#shop">' + t.cta1 + '</a><a class="btn2" href="#how">' + t.cta2 + '</a></div><div class="chips">' + t.chips.map(function (c) { return '<span>✓ ' + c + '</span>'; }).join("") + '</div></div>';
    app.className = "v-" + cfg.variant;
    app.innerHTML =
      '<div class="announce">' + t.announce + '</div>' +
      '<header class="nav"><a class="brand" href="#top"><img src="img/logo.png" alt="Anvi Farms logo"><span>Anvi Farms</span></a><nav>' + t.nav.map(function (n, k) { return '<a href="#' + ids[k] + '">' + n + '</a>'; }).join("") + '</nav><div class="navr"><span class="lang"><button id="l-en" class="' + (l === "en" ? "on" : "") + '">EN</button><button id="l-te" class="' + (l === "te" ? "on" : "") + '">తెలుగు</button></span><button class="navcart" id="navCart">' + t.cartLbl + ' (<span id="navCount">' + AF.count() + '</span>)</button></div></header>' +
      '<section class="hero" id="top">' + (cfg.variant === "flip" ? heroMedia + heroText : heroText + heroMedia) + '</section>' +
      '<section class="stats">' + t.stats.map(function (s) { return '<div><b>' + s[0] + '</b><span>' + s[1] + '</span></div>'; }).join("") + '</section>' +
      '<section class="sec" id="shop"><div class="head"><h2>' + t.shopT + '</h2><p>' + t.shopS + '</p></div><div class="grid">' + cards + '</div></section>' +
      '<section class="sec alt"><div class="head"><h2>' + t.whyT + '</h2></div><div class="why">' + t.why.map(function (w) { return '<div><h3>' + w[0] + '</h3><p>' + w[1] + '</p></div>'; }).join("") + '</div></section>' +
      '<section class="sec alt story" id="story"><img src="img/range.jpg" alt="Anvi Farms ghee and honey"><div><h2>' + t.storyT + '</h2><p>' + t.storyP + '</p><a class="btn1" href="' + IG + '" target="_blank" rel="noopener">' + t.storyB + '</a></div></section>' +
      '<section class="sec" id="how"><div class="head"><h2>' + t.howT + '</h2></div><ol class="how">' + t.how.map(function (h) { return '<li><h3>' + h[0] + '</h3><p>' + h[1] + '</p></li>'; }).join("") + '</ol></section>' +
      '<section class="band"><h2>' + t.ctaT + '</h2><a class="btn1" href="#shop">' + t.cta1 + '</a></section>' +
      '<footer id="contact"><div class="fbrand"><img src="img/logo.png" alt=""><b>Anvi Farms</b></div><div><b>' + t.contact + '</b><p>85238 84333</p><p><a href="' + IG + '" target="_blank" rel="noopener">@anvi_farms</a></p></div><p class="fine">' + t.foot + '</p></footer>';
    document.getElementById("l-en").onclick = function () { AF.setLang("en"); };
    document.getElementById("l-te").onclick = function () { AF.setLang("te"); };
    document.getElementById("navCart").onclick = function () { var b = document.getElementById("afcToggle"); if (b) b.click(); };
    app.querySelectorAll(".sz").forEach(function (b) { b.onclick = function () { sel[b.dataset.id] = +b.dataset.j; var y = window.scrollY; draw(); window.scrollTo(0, y); }; });
    app.querySelectorAll(".add").forEach(function (b) { b.onclick = function () { AF.add(b.dataset.id, sel[b.dataset.id] || 0, 1); }; });
  }
  AF.onChange(function () { if (AF.lang() !== lastLang) draw(); else cartCount(); });
  draw();
  AF.mountCart(document.getElementById("cart"));
};

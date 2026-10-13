/* Full homepage engine. Each design page calls AF.home({variant, hero image}) and gets the same sections in its own look. */
AF.home = function (cfg) {
  var T = {
    en: {
      announce: "Free delivery in AP & Telangana · Buy any 2 get ₹50 off, any 3 get ₹100 off",
      nav: ["Shop", "Our promise", "How to order", "Contact"],
      h: "From farmers to your family.",
      s: "Cow and buffalo ghee, raw honey, pasupu, moringa and chilli powder, made with honesty and care and delivered to your door.",
      cta1: "Shop now", cta2: "How to order",
      chips: ["Bilona method", "Free delivery in AP & Telangana", "Order on WhatsApp"],
      stats: [["56K+", "follow the farm on Instagram"], ["6", "farm products in the range"], ["Free", "delivery in AP & Telangana"], ["1 tap", "from product to WhatsApp order"]],
      shopT: "Our products", shopS: "All prices include GST. Pick a size and add it to your cart. Your order goes to us on WhatsApp.",
      add: "Add to cart",
      whyT: "Why families choose Anvi Farms",
      why: [["Bilona method", "Ghee made the traditional way, as shown on our labels."], ["Organic range", "Pasupu and chilli powder are organic certified, and moringa is organic."], ["From farmers to your family", "Made with honesty and care, and packed by our own team."], ["Easy ordering", "No app and no sign-up. Add to cart and send on WhatsApp."]],
      reelsT: "See it being made", reelsS: "Real reels from the farm, so you know who you are buying from.",
      reels: ["Unboxing fresh pasupu", "Our full range", "Limited cow ghee"], watch: "Watch on Instagram",
      storyT: "Made with honesty and care",
      storyP: "Every jar and pouch is packed by the Anvi Farms team. Our promise is simple: food you can trust, from farmers to your family.",
      storyB: "Follow our journey",
      howT: "How ordering works",
      how: [["Choose", "Pick your products and sizes."], ["Send on WhatsApp", "Your cart arrives as one ready message."], ["We confirm and dispatch", "We reply to confirm payment and delivery."]],
      ctaT: "Buy any 3 and save ₹100. Free delivery in AP & Telangana.", ctaB: "Order on WhatsApp",
      contact: "Contact", foot: "Design sample for Anvi Farms. Products, prices and offers are taken from your own product menu.",
      offT: "A little extra for you", off2: "Buy any 2", off2b: "get ₹50 off", off3: "Buy any 3", off3b: "get ₹100 off", shipA: "AP & Telangana", shipA2: "Free delivery", shipO: "Other states", shipO2: "₹99 extra",
      cartLbl: "Cart"
    },
    te: {
      announce: "AP & తెలంగాణలో ఉచిత డెలివరీ · ఏవైనా 2 కొంటే ₹50, 3 కొంటే ₹100 తగ్గింపు",
      nav: ["షాప్", "మా వాగ్దానం", "ఆర్డర్ ఎలా", "సంప్రదించండి"],
      h: "రైతుల నుండి మీ కుటుంబానికి.",
      s: "ఆవు, గేదె నెయ్యి, ముడి తేనె, పసుపు, మునగ పొడి, కారం పొడి. నిజాయితీ, శ్రద్ధతో తయారీ, మీ ఇంటికే డెలివరీ.",
      cta1: "ఇప్పుడే కొనండి", cta2: "ఆర్డర్ ఎలా",
      chips: ["బిలోనా పద్ధతి", "AP & తెలంగాణలో ఉచిత డెలివరీ", "వాట్సాప్‌లో ఆర్డర్"],
      stats: [["56K+", "ఇన్‌స్టాగ్రామ్‌లో ఫామ్‌ను అనుసరిస్తున్నారు"], ["6", "ఫామ్ ఉత్పత్తుల శ్రేణి"], ["ఉచిత", "AP & తెలంగాణలో డెలివరీ"], ["1 ట్యాప్", "ఉత్పత్తి నుండి వాట్సాప్ ఆర్డర్‌కు"]],
      shopT: "మా ఉత్పత్తులు", shopS: "అన్ని ధరల్లో GST కలిపి ఉంది. సైజు ఎంచుకుని కార్ట్‌లో జోడించండి. మీ ఆర్డర్ వాట్సాప్‌లో మాకు వస్తుంది.",
      add: "కార్ట్‌లో జోడించు",
      whyT: "కుటుంబాలు అన్వి ఫామ్స్‌ను ఎందుకు ఎంచుకుంటాయి",
      why: [["బిలోనా పద్ధతి", "మా లేబుల్స్‌పై చూపినట్లు సంప్రదాయ పద్ధతిలో నెయ్యి."], ["ఆర్గానిక్ శ్రేణి", "పసుపు, కారం పొడి ఆర్గానిక్ సర్టిఫైడ్, మునగ పొడి ఆర్గానిక్."], ["రైతుల నుండి మీ కుటుంబానికి", "నిజాయితీ, శ్రద్ధతో తయారీ, మా బృందమే ప్యాక్ చేస్తుంది."], ["సులభమైన ఆర్డర్", "యాప్, సైన్-అప్ అవసరం లేదు. కార్ట్‌లో జోడించి వాట్సాప్‌లో పంపండి."]],
      reelsT: "తయారీని చూడండి", reelsS: "ఫామ్ నుండి నిజమైన రీల్స్, మీరు ఎవరి దగ్గర కొంటున్నారో తెలియడానికి.",
      reels: ["తాజా పసుపు అన్‌బాక్సింగ్", "మా పూర్తి శ్రేణి", "పరిమిత ఆవు నెయ్యి"], watch: "ఇన్‌స్టాగ్రామ్‌లో చూడండి",
      storyT: "నిజాయితీ, శ్రద్ధతో తయారీ",
      storyP: "ప్రతి జార్, పౌచ్ అన్వి ఫామ్స్ బృందం ప్యాక్ చేస్తుంది. మా వాగ్దానం: రైతుల నుండి మీ కుటుంబానికి నమ్మకమైన ఆహారం.",
      storyB: "మా ప్రయాణాన్ని అనుసరించండి",
      howT: "ఆర్డర్ ఎలా చేయాలి",
      how: [["ఎంచుకోండి", "ఉత్పత్తులు, సైజులు ఎంచుకోండి."], ["వాట్సాప్‌లో పంపండి", "మీ కార్ట్ ఒక సందేశంగా వస్తుంది."], ["నిర్ధారించి పంపుతాము", "చెల్లింపు, డెలివరీ నిర్ధారణకు మేము సమాధానం ఇస్తాము."]],
      ctaT: "ఏవైనా 3 కొంటే ₹100 ఆదా. AP & తెలంగాణలో ఉచిత డెలివరీ.", ctaB: "వాట్సాప్‌లో ఆర్డర్",
      contact: "సంప్రదించండి", foot: "అన్వి ఫామ్స్ కోసం డిజైన్ నమూనా. ఉత్పత్తులు, ధరలు, ఆఫర్లు మీ ప్రొడక్ట్ మెనూ నుండి.",
      offT: "మీ కోసం కొంచెం ఎక్కువ", off2: "ఏవైనా 2 కొంటే", off2b: "₹50 తగ్గింపు", off3: "ఏవైనా 3 కొంటే", off3b: "₹100 తగ్గింపు", shipA: "AP & తెలంగాణ", shipA2: "ఉచిత డెలివరీ", shipO: "ఇతర రాష్ట్రాలు", shipO2: "₹99 అదనం",
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
      ? '<div class="trio"><img src="img/menu-cow.jpg" alt=""><img src="img/menu-honey.jpg" alt=""><img src="img/menu-pasupu.jpg" alt=""></div>'
      : '<div class="heroimg"><img src="' + cfg.img + '" alt="Anvi Farms products"></div>';
    var heroText = '<div class="herotxt"><span class="eyebrow">' + t.chips[0] + '</span><h1>' + t.h + '</h1><p>' + t.s + '</p><div class="ctas"><a class="btn1" href="#shop">' + t.cta1 + '</a><a class="btn2" href="#how">' + t.cta2 + '</a></div><div class="chips">' + t.chips.map(function (c) { return '<span>✓ ' + c + '</span>'; }).join("") + '</div></div>';
    app.className = "v-" + cfg.variant;
    app.innerHTML =
      '<div class="announce">' + t.announce + '</div>' +
      '<header class="nav"><a class="brand" href="#top"><img src="img/logo.png" alt="Anvi Farms logo"><span>Anvi Farms</span></a><nav>' + t.nav.map(function (n, k) { return '<a href="#' + ids[k] + '">' + n + '</a>'; }).join("") + '</nav><div class="navr"><span class="lang"><button id="l-en" class="' + (l === "en" ? "on" : "") + '">EN</button><button id="l-te" class="' + (l === "te" ? "on" : "") + '">తెలుగు</button></span><button class="navcart" id="navCart">' + t.cartLbl + ' (<span id="navCount">' + AF.count() + '</span>)</button></div></header>' +
      '<section class="hero" id="top">' + (cfg.variant === "flip" ? heroMedia + heroText : heroText + heroMedia) + '</section>' +
      '<section class="stats">' + t.stats.map(function (s) { return '<div><b>' + s[0] + '</b><span>' + s[1] + '</span></div>'; }).join("") + '</section>' +
      '<section class="sec" id="shop"><div class="head"><h2>' + t.shopT + '</h2><p>' + t.shopS + '</p></div><div class="grid">' + cards + '</div></section>' +
      '<section class="sec offers"><div class="head"><h2>' + t.offT + '</h2></div><div class="offgrid"><div class="o o2"><span>' + t.off2 + '</span><b>' + t.off2b + '</b></div><div class="o o3"><span>' + t.off3 + '</span><b>' + t.off3b + '</b></div><div class="o ship"><span>' + t.shipA + '</span><b>' + t.shipA2 + '</b></div><div class="o ship2"><span>' + t.shipO + '</span><b>' + t.shipO2 + '</b></div></div></section>' +
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

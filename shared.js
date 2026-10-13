/* Shared demo logic: products, cart, language, WhatsApp checkout. Sample prices only. */
window.AF = (function () {
  var WA = "918523884333"; // number from the public Instagram bio
  var products = [
    { id: "honey", te: "తేనె", en: "Forest Honey", cat: "pantry", tint: "#E0A100",
      d_en: "Raw, unheated honey from the farm.", d_te: "వేడి చేయని స్వచ్ఛమైన తేనె.",
      v: [{ l: "250 g", p: 220 }, { l: "500 g", p: 420 }, { l: "1 kg", p: 800 }] },
    { id: "bghee", te: "గేదె నెయ్యి", en: "Buffalo Ghee", cat: "ghee", tint: "#F2C94C",
      d_en: "Rich, creamy ghee from buffalo milk.", d_te: "గేదె పాలతో చేసిన గాఢమైన నెయ్యి.",
      v: [{ l: "250 ml", p: 260 }, { l: "500 ml", p: 500 }, { l: "1 L", p: 980 }] },
    { id: "cghee", te: "ఆవు నెయ్యి", en: "Cow Ghee", cat: "ghee", tint: "#E8B923",
      d_en: "Light golden ghee from cow milk.", d_te: "ఆవు పాలతో చేసిన తేలికైన నెయ్యి.",
      v: [{ l: "250 ml", p: 300 }, { l: "500 ml", p: 580 }, { l: "1 L", p: 1120 }] },
    { id: "pasupu", te: "పసుపు", en: "Pasupu (Turmeric)", cat: "pantry", tint: "#D98E04",
      d_en: "Stone-ground turmeric powder, deep colour.", d_te: "రాతిపై దంచిన, ముదురు రంగు పసుపు.",
      v: [{ l: "100 g", p: 70 }, { l: "250 g", p: 160 }, { l: "500 g", p: 300 }] }
  ];
  var lang = "en", cart = {}, subs = [];
  try { lang = localStorage.getItem("af_lang") || "en"; } catch (e) {}
  function key(id, i) { return id + ":" + i; }
  function emit() { subs.forEach(function (f) { f(); }); }
  function get(id) { return products.filter(function (p) { return p.id === id; })[0]; }
  function lines() {
    return Object.keys(cart).filter(function (k) { return cart[k] > 0; }).map(function (k) {
      var a = k.split(":"), p = get(a[0]), v = p.v[+a[1]];
      return { key: k, p: p, v: v, q: cart[k], sum: v.p * cart[k] };
    });
  }
  return {
    products: products,
    inr: function (n) { return "₹" + n.toLocaleString("en-IN"); },
    name: function (p) { return lang === "te" ? p.te : p.en; },
    desc: function (p) { return lang === "te" ? p.d_te : p.d_en; },
    lang: function () { return lang; },
    setLang: function (l) { lang = l; try { localStorage.setItem("af_lang", l); } catch (e) {} emit(); },
    qty: function (id, i) { return cart[key(id, i)] || 0; },
    add: function (id, i, d) { var k = key(id, i); cart[k] = Math.max(0, (cart[k] || 0) + (d || 1)); emit(); },
    lines: lines,
    count: function () { return lines().reduce(function (a, l) { return a + l.q; }, 0); },
    total: function () { return lines().reduce(function (a, l) { return a + l.sum; }, 0); },
    onChange: function (f) { subs.push(f); },
    waURL: function (note) {
      var t = "Hello Anvi Farms, I would like to order:\n" + lines().map(function (l) {
        return "- " + l.p.en + " " + l.v.l + " x " + l.q + " = " + l.sum;
      }).join("\n") + "\nTotal: " + this.total() + (note ? "\n" + note : "");
      return "https://wa.me/" + WA + "?text=" + encodeURIComponent(t);
    }
  };
})();

/* Jar / pack illustration and a cart panel every template can style via .afc classes. */
AF.jar = function (tint, kind) {
  if (kind === "fresh") return '<svg viewBox="0 0 120 120" aria-hidden="true"><ellipse cx="60" cy="92" rx="44" ry="14" fill="rgba(0,0,0,.18)"/><path d="M18 70c0-24 18-40 42-40s42 16 42 40c0 14-18 24-42 24S18 84 18 70z" fill="' + tint + '"/><path d="M34 62c8-10 20-14 36-12" stroke="rgba(255,255,255,.45)" stroke-width="5" fill="none" stroke-linecap="round"/></svg>';
  if (kind === "pasupu") return '<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M30 40h60l-6 62H36z" fill="' + tint + '"/><path d="M30 40h60l-2 14H32z" fill="rgba(0,0,0,.18)"/><rect x="40" y="62" width="40" height="22" rx="3" fill="rgba(255,255,255,.55)"/></svg>';
  return '<svg viewBox="0 0 120 120" aria-hidden="true"><rect x="38" y="14" width="44" height="14" rx="3" fill="rgba(0,0,0,.35)"/><path d="M34 28h52c8 6 10 14 10 24v44c0 6-4 10-10 10H34c-6 0-10-4-10-10V52c0-10 2-18 10-24z" fill="' + tint + '"/><rect x="36" y="58" width="48" height="30" rx="3" fill="rgba(255,255,255,.6)"/><path d="M32 40c0 0 0 20 0 40" stroke="rgba(255,255,255,.45)" stroke-width="4" stroke-linecap="round"/></svg>';
};
AF.art = function (p) { return AF.jar(p.tint, p.cat === "fresh" ? "fresh" : p.id === "pasupu" ? "pasupu" : "jar"); };
AF.mountCart = function (el) {
  var open = false;
  function draw() {
    var L = AF.lines(), te = AF.lang() === "te";
    el.className = "afc" + (L.length ? " has" : "");
    el.innerHTML = '<button class="afc-toggle" id="afcToggle" aria-expanded="' + open + '">' + (te ? "కార్ట్" : "Cart") + ' · ' + AF.count() + ' · ' + AF.inr(AF.total()) + '</button>' +
      '<div class="afc-body"' + (open ? "" : " hidden") + '><ul>' + (L.length ? L.map(function (l) {
        return '<li><span>' + AF.name(l.p) + ' ' + l.v.l + '</span><span class="afc-q"><button data-k="' + l.key + '" data-d="-1" aria-label="Remove one">−</button>' + l.q + '<button data-k="' + l.key + '" data-d="1" aria-label="Add one">+</button></span><b>' + AF.inr(l.sum) + '</b></li>';
      }).join("") : '<li class="afc-empty">' + (te ? "కార్ట్ ఖాళీగా ఉంది" : "Your cart is empty") + '</li>') + '</ul>' +
      '<p class="afc-note">Sample shop. This sends your order to WhatsApp.</p></div>' +
      '<a class="afc-go" href="' + (L.length ? AF.waURL() : "#") + '" target="_blank" rel="noopener"' + (L.length ? "" : ' aria-disabled="true"') + '>' + (te ? "వాట్సాప్‌లో ఆర్డర్ చేయండి" : "Order on WhatsApp") + '</a>';
    el.querySelector("#afcToggle").onclick = function () { open = !open; draw(); };
    el.querySelectorAll("[data-k]").forEach(function (b) {
      b.onclick = function () { var a = b.dataset.k.split(":"); AF.add(a[0], +a[1], +b.dataset.d); };
    });
  }
  AF.onChange(draw); draw();
};
AF.fixedCartCSS = ".afc{position:fixed;left:0;right:0;bottom:0;z-index:50;display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:space-between;padding:10px 16px calc(10px + env(safe-area-inset-bottom,0px));background:var(--cart-bg);color:var(--cart-fg);border-top:1px solid var(--cart-line)}.afc-toggle{flex:1;text-align:left;background:none;border:0;color:inherit;font:inherit;font-weight:600;padding:10px 0;cursor:pointer}.afc-go{background:var(--cart-btn);color:var(--cart-btn-fg);padding:12px 18px;font-weight:700;text-decoration:none;white-space:nowrap}.afc-go[aria-disabled=true]{opacity:.45;pointer-events:none}.afc-body{flex-basis:100%;order:-1;max-height:50vh;overflow:auto}.afc-body ul{list-style:none;margin:0;padding:0}.afc-body li{display:grid;grid-template-columns:1fr auto auto;gap:12px;align-items:center;padding:8px 0;border-bottom:1px solid var(--cart-line)}.afc-q{display:inline-flex;gap:10px;align-items:center}.afc-q button{width:28px;height:28px;border:1px solid var(--cart-line);background:none;color:inherit;cursor:pointer;font-size:1rem}.afc-note{font-size:.8rem;opacity:.7;margin:8px 0 0}.afc-empty{display:block!important}";
document.head.insertAdjacentHTML("beforeend", "<style>" + AF.fixedCartCSS + "</style>");

/* Real product photos cropped from Anvi Farms' own Instagram. Replace with final photography. */
AF.IMG = { honey: "img/honey.jpg", bghee: "img/buffalo-ghee.jpg", cghee: "img/cow-ghee.jpg", pasupu: "img/pasupu.jpg" };
AF.art = function (p) { return '<img src="' + AF.IMG[p.id] + '" alt="' + p.en + '" loading="lazy">'; };
AF.limited = function (p) { return p.id === "cghee" ? (AF.lang() === "te" ? "పరిమిత స్టాక్" : "Limited stock") : ""; };

/* Design switcher, bottom left on every page, so one link shows all versions. */
(function () {
  var V = [["index.html", "1 · Classic"], ["story.html", "2 · Story"], ["gold.html", "3 · Gold"], ["harvest.html", "4 · Harvest"], ["bio.html", "5 · Link in Bio"]];
  var cur = (location.pathname.split("/").pop() || "index.html");
  if (cur === "") cur = "index.html";
  var st = document.createElement("style");
  st.textContent = ".afv{position:fixed;left:16px;bottom:calc(14px + env(safe-area-inset-bottom,0px));z-index:60;display:flex;align-items:center;gap:8px;background:#fff;color:#24182F;border:1px solid #cfc6d8;border-radius:99px;padding:6px 8px 6px 14px;box-shadow:0 6px 18px rgba(0,0,0,.2);font:600 13px/1 system-ui,sans-serif}.afv select{font:inherit;border:0;background:#F3EEF8;color:#24182F;padding:7px 10px;border-radius:99px;cursor:pointer}.afc{padding-left:210px}@media(max-width:700px){.afv{bottom:calc(84px + env(safe-area-inset-bottom,0px))}.afc{padding-left:16px}}";
  document.head.appendChild(st);
  var d = document.createElement("label");
  d.className = "afv";
  d.innerHTML = '<span>Design</span><select id="afvSel" aria-label="Switch design">' + V.map(function (v) {
    return '<option value="' + v[0] + '"' + (v[0] === cur ? " selected" : "") + ">" + v[1] + "</option>";
  }).join("") + "</select>";
  document.addEventListener("DOMContentLoaded", function () {
    document.body.appendChild(d);
    d.querySelector("select").onchange = function (e) { location.href = e.target.value; };
  });
})();

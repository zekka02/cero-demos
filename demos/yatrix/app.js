// Yatrix Nepal app logic (vanilla JS, hash router, localStorage)

/* ---------- session (in-memory only, resets on refresh, MVP) ---------- */
let SESSION = null;
const MAX = {
  name: "Max Verstappen",
  email: "Max@simplyLovely.com",
  phone: "+31 33 1 1997",          // 33 = his number, 1 = champion, 1997 = born
  location: "Monaco, Hasselt",
  member: "Member since June 12",
  img: "max.jpg",
};

/* ---------- storage helpers ---------- */
const TRIP_KEY = "yatrix_trip";
const getTrip = () => JSON.parse(localStorage.getItem(TRIP_KEY) || "[]");
const setTrip = (t) => localStorage.setItem(TRIP_KEY, JSON.stringify(t));
const inTrip = (id) => getTrip().some((x) => x.id === id);

function saveItem(item) {
  const trip = getTrip();
  if (trip.some((x) => x.id === item.id)) { toast("Already in your trip"); return; }
  trip.push(item);
  setTrip(trip);
  toast("Added to your trip ✓");
  renderTabbar();
}
function removeItem(id) {
  setTrip(getTrip().filter((x) => x.id !== id));
  toast("Removed");
}

/* ---------- utils ---------- */
const $ = (sel) => document.querySelector(sel);
const npr = (n) => (n === 0 ? "Free" : "रू " + n.toLocaleString("en-IN"));
const stars = (r) => "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));
const findItem = (id) => {
  for (const cat of Object.keys(DATA)) {
    const f = DATA[cat].find((x) => x.id === id);
    if (f) return { ...f, cat };
  }
  return null;
};
const catLabel = (id) => (CATEGORIES.find((c) => c.id === id) || { label: id }).label;

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.remove("opacity-0", "translate-y-4");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.add("opacity-0", "translate-y-4"), 1600);
}

/* ---------- card components ---------- */
function listCard(item, cat) {
  return `
    <a href="#/item/${item.id}" class="flex gap-3 rounded-2xl bg-white p-3 shadow-sm active:scale-[.99] transition">
      <img src="${item.img}" alt="" loading="lazy" class="h-20 w-20 flex-none rounded-xl object-cover bg-slate-200" />
      <div class="min-w-0 flex-1">
        <p class="truncate font-semibold leading-tight">${item.name}</p>
        <p class="mt-0.5 text-xs text-slate-500">📍 ${item.location}</p>
        <p class="mt-0.5 text-xs text-amber-500">${stars(item.rating)} <span class="text-slate-400">${item.rating}</span></p>
        <p class="mt-1 font-bold text-brand">${npr(item.price)}</p>
      </div>
    </a>`;
}

/* ---------- screens ---------- */
function screenExplore(query = "") {
  const q = query.trim().toLowerCase();
  let results = "";
  if (q) {
    const hits = [];
    for (const cat of Object.keys(DATA))
      DATA[cat].filter((x) => (x.name + x.location).toLowerCase().includes(q)).forEach((x) => hits.push([x, cat]));
    results = `
      <h2 class="mb-2 px-1 text-sm font-semibold text-slate-500">${hits.length} result${hits.length !== 1 ? "s" : ""} for “${query}”</h2>
      <div class="space-y-3">${hits.map(([x, c]) => listCard(x, c)).join("") || `<p class="px-1 text-slate-400">Nothing found. Try “Pokhara” or “trek”.</p>`}</div>`;
  }

  setHeader(`
    <p class="text-xs text-teal-100">नमस्ते 🙏 Welcome to</p>
    <h1 class="text-2xl font-extrabold">Yatrix Nepal</h1>
    <div class="mt-3">
      <input id="search" value="${escapeAttr(query)}" placeholder="Search hotels, treks, places…"
        class="w-full rounded-xl border-0 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-white/70" />
    </div>`);

  $("#screen").innerHTML = `
    <div class="space-y-6 p-4">
      ${q ? results : `
      <section>
        <h2 class="mb-3 text-base font-bold">What are you planning?</h2>
        <div class="grid grid-cols-3 gap-3">
          ${CATEGORIES.map((c) => `
            <a href="#/cat/${c.id}" class="flex flex-col items-center gap-1 rounded-2xl bg-white p-3 text-center shadow-sm active:scale-95 transition">
              <span class="text-2xl">${c.icon}</span>
              <span class="text-xs font-semibold">${c.label}</span>
            </a>`).join("")}
        </div>
      </section>

      <section>
        <h2 class="mb-3 text-base font-bold">Popular destinations</h2>
        <div class="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 no-scrollbar">
          ${DESTINATIONS.map((d) => `
            <a href="#/explore?q=${encodeURIComponent(d.name)}" class="relative h-28 w-40 flex-none overflow-hidden rounded-2xl shadow-sm">
              <img src="${d.img}" alt="" loading="lazy" class="h-full w-full object-cover bg-slate-200" />
              <span class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></span>
              <span class="absolute bottom-2 left-3 font-bold text-white">${d.name}</span>
            </a>`).join("")}
        </div>
      </section>

      <section>
        <h2 class="mb-3 text-base font-bold">Featured stays</h2>
        <div class="space-y-3">${DATA.hotels.slice(0, 3).map((x) => listCard(x, "hotels")).join("")}</div>
      </section>`}
    </div>`;

  const s = $("#search");
  if (s) {
    s.oninput = (e) => { const v = e.target.value; history.replaceState(null, "", `#/explore?q=${encodeURIComponent(v)}`); rerenderExplore(v); };
    if (q) { s.focus(); s.setSelectionRange(s.value.length, s.value.length); }
  }
}
function rerenderExplore(v) {
  // re-render only the body without stealing focus from the input
  const body = $("#screen");
  const scrollY = body.scrollTop;
  screenExplore(v);
  body.scrollTop = scrollY;
}

function screenCategory(catId) {
  const cat = CATEGORIES.find((c) => c.id === catId);
  const items = DATA[catId] || [];
  setHeader(`
    <div class="flex items-center gap-3">
      <a href="#/explore" class="text-xl">←</a>
      <div><h1 class="text-xl font-bold">${cat ? cat.icon + " " + cat.label : "Browse"}</h1>
      <p class="text-xs text-teal-100">${items.length} options${cat ? ", " + cat.blurb : ""}</p></div>
    </div>`);
  $("#screen").innerHTML = `<div class="space-y-3 p-4">${items.map((x) => listCard(x, catId)).join("")}</div>`;
}

function screenItem(id) {
  const item = findItem(id);
  if (!item) { $("#screen").innerHTML = `<p class="p-6 text-center text-slate-400">Item not found.</p>`; return; }
  const saved = inTrip(id);
  setHeader(`
    <div class="flex items-center gap-3">
      <a href="#/cat/${item.cat}" class="text-xl">←</a>
      <h1 class="truncate text-lg font-bold">${catLabel(item.cat)}</h1>
    </div>`);
  $("#screen").innerHTML = `
    <img src="${item.img}" alt="" class="h-56 w-full object-cover bg-slate-200" />
    <div class="space-y-4 p-4">
      <div>
        <div class="flex items-start justify-between gap-3">
          <h2 class="text-xl font-extrabold leading-tight">${item.name}</h2>
          <span class="flex-none rounded-full bg-amber-100 px-2 py-1 text-xs font-bold text-amber-700">★ ${item.rating}</span>
        </div>
        <p class="mt-1 text-sm text-slate-500">📍 ${item.location}</p>
      </div>
      <p class="text-2xl font-extrabold text-brand">${npr(item.price)}</p>
      <p class="leading-relaxed text-slate-600">${item.desc}</p>
      <div class="rounded-2xl bg-teal-50 p-3 text-sm text-teal-800">
        ✅ Verified provider. Free cancellation up to 48h before (demo)
      </div>
    </div>
    <div class="fixed bottom-16 left-1/2 z-10 w-full max-w-md -translate-x-1/2 border-t border-slate-200 bg-white p-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]">
      <button id="saveBtn" class="w-full rounded-xl ${saved ? "bg-slate-200 text-slate-600" : "bg-brand text-white"} py-3 font-bold shadow active:scale-[.99] transition">
        ${saved ? "✓ Saved to Trip, view My Trip" : "Add to My Trip"}
      </button>
    </div>`;
  $("#saveBtn").onclick = () => {
    if (inTrip(id)) { location.hash = "#/trip"; return; }
    saveItem({ id: item.id, name: item.name, price: item.price, img: item.img, location: item.location, cat: item.cat });
    screenItem(id); // refresh button state
  };
}

function screenTrip() {
  const trip = getTrip();
  setHeader(`<h1 class="text-2xl font-extrabold">My Trip</h1>
    <p class="text-xs text-teal-100">${trip.length} item${trip.length !== 1 ? "s" : ""} saved on this device</p>`);

  if (!trip.length) {
    $("#screen").innerHTML = `
      <div class="flex flex-col items-center justify-center gap-3 p-10 text-center text-slate-400">
        <span class="text-5xl">🧳</span>
        <p>Your trip is empty.</p>
        <a href="#/explore" class="rounded-xl bg-brand px-4 py-2 font-semibold text-white">Start exploring</a>
      </div>`;
    return;
  }

  const total = trip.reduce((s, x) => s + x.price, 0);
  // group by category
  const groups = {};
  trip.forEach((x) => { (groups[x.cat] = groups[x.cat] || []).push(x); });

  $("#screen").innerHTML = `
    <div class="space-y-5 p-4">
      ${Object.entries(groups).map(([cat, items]) => `
        <section>
          <h2 class="mb-2 text-sm font-bold text-slate-500">${catLabel(cat)}</h2>
          <div class="space-y-3">
            ${items.map((x) => `
              <div class="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
                <img src="${x.img}" class="h-14 w-14 flex-none rounded-xl object-cover bg-slate-200" />
                <a href="#/item/${x.id}" class="min-w-0 flex-1">
                  <p class="truncate font-semibold">${x.name}</p>
                  <p class="text-xs text-slate-500">📍 ${x.location}</p>
                  <p class="font-bold text-brand">${npr(x.price)}</p>
                </a>
                <button data-rm="${x.id}" class="flex-none rounded-full bg-slate-100 px-3 py-1 text-sm text-rose-500">Remove</button>
              </div>`).join("")}
          </div>
        </section>`).join("")}

      <div class="rounded-2xl bg-white p-4 shadow-sm">
        <div class="flex items-center justify-between">
          <span class="font-semibold text-slate-600">Estimated total</span>
          <span class="text-xl font-extrabold text-brand">${npr(total)}</span>
        </div>
        <p class="mt-1 text-xs text-slate-400">Treks are free to view; permits & guide costs shown separately.</p>
        <button onclick="toast('This is an MVP demo, payments coming soon!')" class="mt-3 w-full rounded-xl bg-accent py-3 font-bold text-white active:scale-[.99] transition">Proceed to checkout (demo)</button>
      </div>
    </div>`;

  $("#screen").querySelectorAll("[data-rm]").forEach((b) => {
    b.onclick = () => { removeItem(b.dataset.rm); screenTrip(); renderTabbar(); };
  });
}

function screenProfile() {
  setHeader(`<h1 class="text-2xl font-extrabold">Profile</h1>`);
  if (!SESSION) return renderSignIn();

  const u = SESSION;
  const trips = getTrip().length;
  $("#screen").innerHTML = `
    <div class="space-y-4 p-4">
      <!-- profile card -->
      <div class="flex flex-col items-center rounded-2xl bg-white p-5 text-center shadow-sm">
        <img src="${u.img}" alt="Max" class="h-24 w-24 rounded-full object-cover ring-4 ring-brand/20 bg-slate-200" />
        <h2 class="mt-3 text-xl font-extrabold">${u.name}</h2>
        <p class="text-sm text-slate-500">${u.member}</p>
        <span class="mt-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">🏎️ Maximum traveller</span>
      </div>

      <!-- basic info -->
      <div class="overflow-hidden rounded-2xl bg-white shadow-sm">
        ${infoRow("✉️", "Email", u.email)}
        ${infoRow("📞", "Phone", u.phone)}
        ${infoRow("📍", "Location", u.location)}
        ${infoRow("🧳", "Saved trip items", String(trips))}
      </div>

      <!-- about yatrix -->
      <div class="rounded-2xl bg-brand p-5 text-white">
        <p class="font-bold">Your journey, unified. 🇳🇵</p>
        <p class="mt-1 text-sm text-teal-50">Hotels, vehicles, guides, treks and packages, all in one place. Your trip is saved privately on your device.</p>
      </div>

      <button id="signOut" class="w-full rounded-xl border border-rose-200 bg-white py-3 font-bold text-rose-500 active:scale-[.99] transition">Sign out</button>
      <p class="text-center text-xs text-slate-400">MVP demo. Sign-in resets when you refresh.</p>
    </div>`;

  $("#signOut").onclick = () => { SESSION = null; toast("Signed out"); screenProfile(); renderTabbar(); };
}

function infoRow(icon, label, value) {
  return `
    <div class="flex items-center gap-3 border-b border-slate-100 p-4 last:border-0">
      <span class="text-lg">${icon}</span>
      <div class="min-w-0">
        <p class="text-xs text-slate-400">${label}</p>
        <p class="truncate font-semibold">${value}</p>
      </div>
    </div>`;
}

function renderSignIn() {
  $("#screen").innerHTML = `
    <div class="flex flex-col gap-5 p-6">
      <div class="mt-6 text-center">
        <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-3xl text-white shadow">🧭</div>
        <h2 class="mt-3 text-2xl font-extrabold">Welcome back</h2>
        <p class="text-sm text-slate-500">Sign in to your Yatrix account</p>
      </div>

      <form id="signInForm" class="space-y-3">
        <div>
          <label class="mb-1 block text-xs font-semibold text-slate-500">Email</label>
          <input id="emailInput" type="email" value="${MAX.email}" required
            class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand focus:ring-2 focus:ring-brand/30" />
        </div>
        <div>
          <label class="mb-1 block text-xs font-semibold text-slate-500">Password</label>
          <input id="pwInput" type="password" value="maxmax" required
            class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand focus:ring-2 focus:ring-brand/30" />
        </div>
        <button type="submit" class="w-full rounded-xl bg-brand py-3 font-bold text-white shadow active:scale-[.99] transition">Sign in</button>
      </form>
      <p class="text-center text-xs text-slate-400">Demo account is pre-filled. Session resets on refresh (MVP).</p>
    </div>`;

  $("#signInForm").onsubmit = (e) => {
    e.preventDefault();
    const email = $("#emailInput").value.trim() || MAX.email;
    SESSION = { ...MAX, email };
    toast("Welcome, Max ✓");
    screenProfile();
    renderTabbar();
  };
}

/* ---------- header / tabbar ---------- */
function setHeader(html) { $("#topbar").innerHTML = html; }

const TABS = [
  { route: "explore", icon: "🧭", label: "Explore" },
  { route: "trip",    icon: "🧳", label: "My Trip", badge: true },
  { route: "profile", icon: "👤", label: "Profile" },
];
function renderTabbar() {
  const cur = (location.hash.split("?")[0].split("/")[1]) || "explore";
  const active = ["explore", "cat", "item"].includes(cur) ? "explore" : cur;
  const count = getTrip().length;
  $("#tabbar").innerHTML = TABS.map((t) => `
    <a href="#/${t.route}" class="relative flex flex-1 flex-col items-center gap-0.5 py-2 ${active === t.route ? "text-brand" : "text-slate-400"}">
      <span class="text-xl">${t.icon}</span>
      <span class="font-medium">${t.label}</span>
      ${t.badge && count ? `<span class="absolute right-1/2 top-1 translate-x-4 rounded-full bg-accent px-1.5 text-[10px] font-bold text-white">${count}</span>` : ""}
    </a>`).join("");
}

/* ---------- helpers ---------- */
function escapeAttr(s) { return String(s).replace(/"/g, "&quot;"); }
function parseQuery(hash) {
  const i = hash.indexOf("?");
  if (i === -1) return {};
  return Object.fromEntries(new URLSearchParams(hash.slice(i + 1)));
}

/* ---------- router ---------- */
function router() {
  const hash = location.hash || "#/explore";
  const path = hash.slice(2).split("?")[0]; // strip "#/"
  const [seg, arg] = path.split("/");
  const q = parseQuery(hash);

  $("#screen").scrollTop = 0;
  switch (seg) {
    case "cat":   screenCategory(arg); break;
    case "item":  screenItem(arg); break;
    case "trip":  screenTrip(); break;
    case "profile": screenProfile(); break;
    case "explore":
    default:      screenExplore(q.q || ""); break;
  }
  renderTabbar();
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
router();

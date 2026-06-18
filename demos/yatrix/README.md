# Yatrix Nepal — MVP

A mobile-first travel app prototype for Nepal that unifies **hotels, vehicle rental, local
guides, treks, and travel packages** into one place, plus a personal **trip planner**.

This is a front-end-only MVP: **no backend, no cloud, no accounts.** Your saved trip is
stored locally on your device (`localStorage`).

## Tech
- Plain HTML + CSS + vanilla JavaScript
- [Tailwind CSS](https://tailwindcss.com) via CDN (no build step)
- Hash-based routing, `localStorage` for the saved trip

## How to run
**Easiest:** just double-click `index.html` to open it in your browser.

**Or run a tiny local server** (better — avoids any browser file restrictions):
```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

To preview on a phone-sized screen on desktop: open your browser DevTools (F12) and toggle
the device toolbar (Ctrl/Cmd+Shift+M), set width ~390px.

## Files
| File | Purpose |
|------|---------|
| `index.html` | App shell: header, screen container, bottom tab bar |
| `app.js` | Router, screen rendering, trip storage, search, toast |
| `data.js` | Seed catalog (hotels, vehicles, guides, treks, packages) |
| `styles.css` | Small overrides on top of Tailwind |

## Features
- **Explore** — search + service categories + popular destinations + featured stays
- **Browse** any category, open a **detail** page
- **Add to My Trip** (saved on device) with a confirmation toast
- **My Trip** — items grouped by category, estimated total, remove items
- **About** — what Yatrix is

## What's intentionally NOT here (future work)
Real payments, login/accounts, live maps & GPS, real partner inventory, admin panel, a
backend/cloud. The on-device design keeps the MVP simple and private; a backend (e.g.
Firebase/Supabase) can be added later if the group wants multi-device sync.

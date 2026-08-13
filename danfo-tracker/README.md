# Waka — Transport Fare Tracker

Crowdsourced fare tracker for danfo, keke, BRT and other transport across
Nigerian cities. Know what to pay before you board.

Built for Lagos first, structured so any city can be added.

## Features

- Log a fare: route, amount, vehicle type, time of day, optional note
- Browse fares by city (Lagos, Abuja, Port Harcourt, Ibadan, Benin City, Kano)
- Search by stop name
- No login required — data is stored in the browser (`localStorage`)
- Seeded with a few sample fares on first load so it's never empty

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- lucide-react for icons
- No backend yet — `localStorage` only (see "Next steps" below)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

```
app/
  page.tsx         Main page — city selector, form, fare list
  layout.tsx        Root layout, fonts, metadata
  globals.css        Tailwind + design tokens
components/
  Header.tsx           Route-placard styled header
  CitySelector.tsx       City tab switcher
  LogFareForm.tsx          Fare submission form
  FareCard.tsx               Individual fare display
  SearchBar.tsx                Route search
  EmptyState.tsx                 Empty/no-results state
lib/
  types.ts     Fare, city, vehicle type, and time-of-day definitions
  storage.ts    localStorage read/write + first-run seed data
```

## Adding a new city

Add the city name to `CITIES` in `lib/types.ts`, and optionally add common
stop names to `COMMON_STOPS` for autocomplete suggestions. That's it — the
selector, form, and list all pick it up automatically.

## Next steps (not yet built)

- Swap `localStorage` for a real backend (Postgres + Prisma, or Supabase)
  so fares are shared across users instead of per-device
- Average/median fare per route, instead of just a raw list
- Flag fares as "surge" (rain, rush hour, fuel scarcity)
- Upvote/downvote on fare accuracy
- PWA support for offline logging

## License

MIT

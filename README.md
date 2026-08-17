# Empire Stage Group LLC

Official event website for Empire Stage Group LLC.

**Website created and maintained by Fahim Mangal.**

## Current featured event

**107th Independence Day of Afghanistan**

- Date: Saturday, September 12, 2026
- Event time: 7:00 PM–11:00 PM
- Doors open: 6:45 PM
- Venue: National Conference Center
- Guest address: 18980 Upper Belmont Place, Leesburg, VA 20176
- Featured performers: Naghma Jan and Hasib Sepand

Guest-facing time and location should stay aligned with the live Eventbrite listing.

## Upcoming event

**Haidar Salim Live Concert Atlanta Georgia USA**

- Date: Saturday, October 24, 2026
- Event time: 7:00 PM–11:45 PM
- Venue: Vansh Event Center
- Address: 2960 Northeast Expy, Chamblee, GA 30341
- Performer: Haidar Salim
- Tickets: Ticket Tailor event 2364052
- Calendar file: `public/haidar-salim-atlanta-2026.ics`

## Local development

```bash
npm install
npm run dev
```

Do not expose the Vite development server to the public internet. Keep secrets in local environment files that are excluded by `.gitignore`.

## Production build

```bash
npm run build
```

Vite writes the production site to `dist/`.

## Security audit

```bash
npm run audit
```

The production website is static. It does not currently use a database, login system, API, or server-side form handler. Cloudflare security headers are defined in `public/_headers`.

The Cloudflare Worker adds the sponsor showcase, adds the Atlanta concert section, normalizes the Virginia event links and metadata, and publishes structured event data for both concerts before HTML is returned.

## Cloudflare deployment

```bash
npm run deploy
```

Cloudflare settings:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Production branch: `main`
- Root directory: leave blank
- Unknown routes return a real 404 rather than the event homepage

## Event assets

The official Afghanistan Independence Day event poster is stored at:

```text
public/images/afghanistan-independence-day-2026-official-poster.jpeg
```

The poster must remain unchanged unless replacement artwork is explicitly approved.

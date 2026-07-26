# Empire Stage Group LLC

Official event website for Empire Stage Group LLC.

**Website created and maintained by Fahim Mangal.**

## Current featured event

**107th Independence Day of Afghanistan**

- Date: Saturday, September 12, 2026
- Doors open: 7:00 PM
- Venue: National Conference Center
- Address: 18665 NCC Ring Drive, Leesburg, VA 20176
- Featured performers: Naghma Jan and Hasib Sepand

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

## Cloudflare deployment

```bash
npm run deploy
```

Cloudflare settings:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Production branch: `main`
- Root directory: leave blank

## Event assets

The official event poster is stored at:

```text
public/images/afghanistan-independence-day-2026-official-poster.jpeg
```

The poster must remain unchanged unless replacement artwork is explicitly approved.

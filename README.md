# Verve Home Automation

A single-page, mobile-first marketing site for a home automation business (Z-Wave, Zigbee, and motorized curtains), built with Next.js, Tailwind CSS v4, and Framer Motion.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** for styling (dark, glassmorphism-style theme)
- **Framer Motion** for scroll/entrance animations
- **lucide-react** for icons
- **Nodemailer** for the contact form (no database/backend required)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

Brand name, tagline, contact info, and nav links live in one place:
[src/lib/site-config.ts](src/lib/site-config.ts). Update the placeholder
phone/email/address there before going live.

Each section of the page is its own component in
[src/components/](src/components/) (`Hero`, `Products`, `Features`,
`HowItWorks`, `Showcase`, `Testimonials`, `FAQ`, `Contact`, `Footer`),
assembled in [src/app/page.tsx](src/app/page.tsx).

### Images & caching

[next.config.ts](next.config.ts) sets `images.minimumCacheTTL` to 1 year —
optimized images are cached as aggressively as possible by browsers and any
CDN in front of the site, which keeps bandwidth/optimization costs down on
repeat traffic. Freshness after an update is handled separately, per image,
via a `?v=N` query tag on each image path (in `site-config.ts` and
`gallery.ts`) — **not** by waiting for the cache to expire. This means only
the image you actually changed gets re-fetched/re-optimized after a deploy,
not the whole site.

When you update an image, there are two cases:

- **New file, new filename** — just point the relevant entry at the new
  path. Nothing else to do; a new URL is never cached, so it's fetched fresh
  automatically.
- **Replacing a file at the same filename** — bump that one entry's `?v=N`
  to `?v=N+1` (e.g. `/product-gallery/zwave-scene-dial-outlet-panel.webp?v=1`
  → `...?v=2`) before redeploying. That changes the URL for just that
  image, so it's fetched fresh; every other image keeps its long cache
  untouched.

## Contact form (SMTP, no backend/database)

The form posts to a Next.js API route ([src/app/api/contact/route.ts](src/app/api/contact/route.ts))
which sends the message straight to your inbox via plain SMTP + Nodemailer,
using credentials kept only in server-side environment variables — never
sent to the browser. Works with any SMTP provider (GoDaddy/Microsoft 365,
Gmail, etc.) by pointing `SMTP_HOST`/`SMTP_PORT` at it.

### Setup (GoDaddy / Microsoft 365)

1. Enable **Multi-Factor Authentication** on the mailbox, then generate an
   app password at https://mysignins.microsoft.com/security-info → **Add
   sign-in method** → **App password**. Copy it immediately — it's only shown once.
2. Copy the example env file and fill it in:

   ```bash
   cp .env.local.example .env.local
   ```

   ```env
   SMTP_HOST=smtp.office365.com
   SMTP_PORT=587
   SMTP_USER=youraddress@yourdomain.com
   SMTP_PASSWORD=xxxxxxxxxxxxxxxx
   CONTACT_TO_EMAIL=youraddress@yourdomain.com
   ```

3. Restart the dev server. `.env.local` is already git-ignored, so the
   password never gets committed.

**Using Gmail instead:** set `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`,
and use an app password from https://myaccount.google.com/apppasswords
(requires 2-Step Verification) as `SMTP_PASSWORD`.

The form includes basic server-side validation, a hidden honeypot field to
deter simple spam bots, and clear success/error states in the UI.

## Deploying

On Vercel (or any host), add `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`,
`SMTP_PASSWORD`, and `CONTACT_TO_EMAIL` as **server-side environment
variables** in the project settings — do not prefix them with `NEXT_PUBLIC_`,
or they would be exposed to the browser. Also set `NEXT_PUBLIC_SITE_URL` if
this deployment's domain differs from the default in `site-config.ts`.

## Scripts

- `npm run dev` – start the dev server
- `npm run build` – production build
- `npm run start` – run the production build
- `npm run lint` – lint the codebase

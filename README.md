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

## Contact form (Gmail, no backend/database)

The form posts to a Next.js API route ([src/app/api/contact/route.ts](src/app/api/contact/route.ts))
which sends the message straight to your inbox via Gmail + Nodemailer, using
a **Gmail App Password** kept only in a server-side environment variable —
it is never sent to the browser.

### Setup

1. Enable **2-Step Verification** on the Gmail account you want to send from:
   https://myaccount.google.com/security
2. Create an **App Password**: https://myaccount.google.com/apppasswords
   (choose "Mail" as the app). Google gives you a 16-character password.
3. Copy the example env file and fill it in:

   ```bash
   cp .env.local.example .env.local
   ```

   ```env
   GMAIL_USER=youraddress@gmail.com
   GMAIL_APP_PASSWORD=xxxxxxxxxxxxxxxx
   CONTACT_TO_EMAIL=youraddress@gmail.com
   ```

4. Restart the dev server. `.env.local` is already git-ignored, so the
   password never gets committed.

The form includes basic server-side validation, a hidden honeypot field to
deter simple spam bots, and clear success/error states in the UI.

## Deploying

On Vercel (or any host), add `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and
`CONTACT_TO_EMAIL` as **server-side environment variables** in the project
settings — do not prefix them with `NEXT_PUBLIC_`, or they would be exposed
to the browser.

## Scripts

- `npm run dev` – start the dev server
- `npm run build` – production build
- `npm run start` – run the production build
- `npm run lint` – lint the codebase

# Huromata Official Website

Official website for Huromata, a product engineering studio building SaaS products, business websites, automation systems, and robotics solutions.

The site is built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Features

- Homepage with boot intro screen, hero section, services, process, technology stack, and call to action
- Services, Work, About, Contact, and Careers routes
- Reusable component structure for navigation, footer, buttons, containers, service cards, scroll animation, and counters
- Shared site content in `lib/data.ts`
- Remote image support for Unsplash assets through `next.config.ts`
- Custom Next runtime preparation scripts for Windows/OneDrive-friendly `.next` output handling

## Tech Stack

- Next.js `15.5.14`
- React `19.0.0`
- TypeScript `5.8.2`
- Tailwind CSS `3.4.17`
- ESLint with Next config

## Project Structure

```text
app/
  page.tsx              Home page
  about/page.tsx        About page
  careers/page.tsx      Empty Careers page ready for content
  contact/page.tsx      Contact page
  services/page.tsx     Services page
  work/page.tsx         Work page
components/
  BootScreen.tsx        Intro overlay shown on first visit
  Navbar.tsx            Main navigation
  Footer.tsx            Site footer
  ContactForm.tsx       Contact form UI
  *.tsx                 Shared UI components
images/
  company_logo.png      Header logo
  huromata-mark.png     Boot-screen logo mark
  logo.png              Additional logo asset
lib/
  data.ts               Navigation, services, stats, work, and company content
  sounds.ts             UI sound helpers
scripts/
  prepare-next-runtime.cjs
  run-next.cjs
styles/
  globals.css           Global styles and Tailwind layers
```

## Getting Started

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

The Careers page is available at:

```text
http://localhost:3000/careers
```

## Available Scripts

```bash
npm run dev
```

Runs the local Next.js development server.

```bash
npm run build
```

Builds the production app.

```bash
npm run start
```

Starts the production server after a successful build.

```bash
npm run lint
```

Runs Next linting.

```bash
npm run clean
```

Cleans the external Next runtime cache at:

```text
C:\Users\<user>\AppData\Local\HuromataNext
```

## Notes For Local Development

This project uses `scripts/prepare-next-runtime.cjs` to point `.next` to an external runtime folder under `AppData\Local\HuromataNext`. This helps avoid some Windows/OneDrive file locking issues.

If the local site starts returning `500` errors after a failed build or interrupted server run:

```bash
npm run clean
npm run dev
```

The boot screen appears only once per browser session because it stores this flag in `sessionStorage`:

```text
huro_boot
```

To see the boot screen again, open an incognito window or clear session storage for `localhost`.

## Git And GitHub Desktop

Use this folder as the working repository:

```text
C:\Users\akacc\OneDrive\Documents\GitHub\huromata-official-website
```

Do not commit generated or local-only files:

- `node_modules/`
- `.next/`
- `.codex-devserver.log`
- `.codex-devserver.err.log`
- `tsconfig.tsbuildinfo`
- `.claude/`

These are already covered by `.gitignore`.

To push with GitHub Desktop:

1. Open GitHub Desktop.
2. Select `huromata-official-website`.
3. Review the changed files.
4. Commit with a clear message.
5. Click `Push origin`.

## Deployment

This app can be deployed to any platform that supports Next.js, such as Vercel, Netlify, Render, or a Node.js server.

Recommended production command flow:

```bash
npm ci
npm run build
npm run start
```

No environment variables are currently required for the static website UI.

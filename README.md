# 🎧 Headphone Site

A modern, animated headphones/audio brand landing page built with **React 19** and **Vite**, styled with **Tailwind CSS**, and animated using **Framer Motion**, **GSAP**, and a custom cursor via **react-mouse-follower**. State is managed with **Zustand**, and icons are powered by **react-icons**.

## Sections

- **Navbar** : responsive navigation with a custom mouse-follower cursor effect
- **Hero** : animated landing/intro section
- **Services** : highlights of product/brand features
- **Banner** : promotional section
- **Features** : product feature highlights
- **Footer** : site links, social icons, and newsletter-style layout

> ⚠️ **Note:** This is a front-end demo/UI project. Product categories, feature copy, and footer/social links (`href="#"`) are **placeholder content** there's no real store, product catalog, or checkout behind them. Replace this data with real content before treating it as a production site.

> 🕒 **Older project:** This was built a while back as a React + Vite practice project focused on animation and micro-interactions. Since then I've learned Next.js and leveled up my skills further, so the code here reflects an earlier stage of my journey rather than my current approach.

## Tech Stack

React · Vite · Tailwind CSS · Framer Motion · GSAP · Zustand · react-mouse-follower · react-icons

## Getting Started

### Prerequisites

 Node.js and npm installed
 Git installed

### Installation

```bash
git clone https://github.com/abdullahyaseen0010/headphone-site.git
cd headphone-site
npm install
```

Then start the dev server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

### Scripts

```bash
npm run dev      # start development server
npm run build    # build for production
npm run preview  # preview the production build locally
npm run lint      # run ESLint
```

## Known Issues / Troubleshooting

### Peer dependency conflict: `react-mouse-follower`

This project uses React 19, but the `react-mouse-follower` package (v2.0.3) has a hardcoded peer dependency on React 18 (`^18.2.0`). The package hasn't been updated in about a year, so no newer version resolves this.

**Symptom:**

```
npm error ERESOLVE could not resolve
npm error peer react@"^18.2.0" from react-mouse-follower@2.0.3
```

**Fix:** Add a `.npmrc` file to the project root so npm always installs with relaxed peer dependency checks:

```bash
echo legacy-peer-deps=true > .npmrc
```

After this, `npm install` (or `npm i`) will work normally without needing the `--legacy-peer-deps` flag every time.

**Note:** Since `react-mouse-follower` was built for React 18 internals, watch for visual glitches in the cursor-follower effect specifically. If issues appear, it may need to be replaced with a React 19–compatible alternative.

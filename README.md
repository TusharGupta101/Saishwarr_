# AutoWorks Pro – Automotive Workshop Website

A **multi-page, responsive automotive workshop website** with red & white theme, **dark mode**, and full feature set for SEO, hosting, and user experience.

## Features

### Pages
- **Home** (`index.html`) – Hero, services overview, Why Choose Us, Video section, Testimonials, FAQ, CTA
- **About** (`about.html`) – Workshop intro, experience, mission/vision, team highlights
- **Services** (`services.html`) – Engine, Oil, Brake, Diagnostics, Tire, AC (cards with hover)
- **Products** (`products.html`) – Spare parts grid with “Request Quote”
- **Machinery** (`machinery.html`) – Workshop equipment (lift, alignment, scanner, etc.)
- **Team** (`team.html`) – Team members with roles and short bios
- **Checklist** (`checklist.html`) – Seasonal car care checklist (printable)
- **Contact** (`contact.html`) – Contact details, form, **Areas we serve**, **Google Maps** embed
- **404** (`404.html`) – Custom “Page not found” with link home

### Theme & UX
- **Red & white** theme with **dark mode** toggle (persisted via `localStorage`)
- **Favicon** (SVG gear icon)
- **WhatsApp** floating button (bottom-right) – replace `1234567890` in `href="https://wa.me/1234567890"` with your number
- **Cookie consent** banner (Accept/Decline, stored in `localStorage`)
- **Language switcher** (EN / ES) in navbar – nav links and footer translate; add more keys in `js/i18n.js` for full pages

### Content
- **FAQ** section on Home (accordion) with **FAQPage** schema
- **Testimonials** carousel on Home
- **Video** section on Home (YouTube embed – replace video ID with your workshop tour)
- **Service areas** on Contact page (edit list of cities/areas)
- **Google Maps** embed on Contact – replace iframe `src` with your map embed from Google Maps → Share → Embed

### Technical & SEO
- **Bootstrap 5** and **Bootstrap Icons** (CDN only)
- **Breadcrumbs** on all inner pages (Home > Page name)
- **Structured data:** AutoRepair + FAQPage on Home, Service list on Services page
- **Meta tags**, canonical URLs, Open Graph on every page
- **sitemap.xml** and **robots.txt** (includes team.html, checklist.html)
- **Analytics placeholder** – comment in `<head>` on each page; add your Google Analytics script there
- **PWA** – `manifest.json` and `sw.js` (service worker caches pages for offline; register runs on index.html; works when deployed with HTTPS)
- **Lazy loading** – YouTube iframe uses `loading="lazy"`; add `loading="lazy"` to any `<img>` you add (e.g. team photos, product images)
- **Print-friendly** – Checklist page hides navbar, footer, and buttons when printing

### Forms & Scripts
- Contact form with **client-side validation** and success message (no backend)
- **Skip-to-content** link for accessibility
- **Smooth scroll** for in-page anchors

## Project Structure

```
saishwar/
├── index.html          # Home (FAQ, Testimonials, Video, CTA)
├── about.html
├── services.html
├── products.html
├── machinery.html
├── team.html           # Team page
├── checklist.html      # Maintenance checklist (printable)
├── contact.html        # Contact + Maps + Service areas
├── 404.html            # Custom not found
├── favicon.svg         # Browser tab icon
├── manifest.json       # PWA manifest
├── sw.js               # Service worker (offline cache)
├── sitemap.xml
├── robots.txt
├── css/
│   └── style.css       # Theme, dark mode, cookie banner, WhatsApp, breadcrumbs, print
├── js/
│   ├── main.js         # Theme, navbar, smooth scroll, form validation, cookie consent
│   └── i18n.js         # Language switcher (EN/ES)
└── README.md
```

## Hosting & SEO

1. **Static hosting:** Upload the whole folder to Netlify, Vercel, GitHub Pages, or any web server.
2. **Domain:** Replace `https://yoursite.com` in all HTML (canonical, og:url), `sitemap.xml`, and `robots.txt`.
3. **WhatsApp:** Replace `1234567890` in every `wa.me/1234567890` link with your number (include country code, no +).
4. **Google Maps:** On Contact page, get your embed code from Google Maps → Share → Embed a map, and replace the iframe `src`.
5. **Video:** On Home, replace the YouTube video ID in the iframe `src` with your workshop tour video ID.
6. **Analytics:** Add your Google Analytics (or other) script in the placeholder comment in each page’s `<head>`.
7. **HTTPS:** Use HTTPS in production so PWA and service worker work correctly.

## Running Locally

Open `index.html` in a browser, or run a local server (required for PWA/service worker):

```bash
# Python 3
python -m http.server 8000

# Node
npx serve
```

Visit `http://localhost:8000` (or the port shown). Service worker and some absolute paths work best when the site is served from a host with a single origin.

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge). Dark mode uses `prefers-color-scheme` on first visit. Language preference is stored in `localStorage`.

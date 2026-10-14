# SVMR Exports - B2B Corporate Trade Portal (Next.js Static Site)

A production-ready corporate portal for **SVMR Exports**, India's premier export merchant bridging domestic agricultural harvests and textile mills with international ports across 42+ countries.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**, configured for pure static site generation (`output: 'export'`).

---

## 🚀 Key Features & Pages

- **Home (`/`)**: Hero section with DGFT / APEDA credentials, trade metrics, asymmetrical editorial layout, multi-category highlights, 4-step logistics flow, and quick manifest inquiry form.
- **About Us (`/about-us`)**: Company history & timeline (2008–2024), leadership philosophy, global trade lane statistics, and statutory accreditations (IEC, Spices Board, FIEO, ISO 9001).
- **Products Catalog (`/products`)**: Dynamic commodity filtering across Spices, Grains & Pulses, Textiles, and Processed Agro. Includes real-time search, grade specification filters, export specification downloads, and pre-filled RFP quotation triggers.
- **Services & Logistics (`/services`)**: In-depth trade operations breakdown with alternating editorial process cards, cold chain handling, custom port clearance, Incoterms 2020 compliance, and vessel booking.
- **Facility & Port Gallery (`/gallery`)**: Multi-category media gallery (Processing Facilities, Cold Storage, Port Loading, Quality Testing) with filter tabs and an interactive high-resolution Lightbox modal.
- **Trade Insights & Blog (`/blog`)**: Regulatory updates, shipping advisory bulletins, tariff news, and lead analysis dossier.
- **Editorial Dossier (`/blog/export-documentation-guide`)**: Complete guide to essential export documentation for Indian agro-commodities with compliance checklists and pull quotes.
- **Contact Us & Port Desk (`/contact`)**: Interactive B2B trade inquiry form with Incoterms 2020 selector (FOB / CIF / CFR), port coordinates, cartographic visualization, and registered liaison contacts.
- **Global Quote Modal (`QuoteModal`)**: Global modal accessible from the header and every product card for instantaneous CIF/FOB pricing inquiries.

---

## 🛠️ Technology Stack & Design System

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 with custom Heritage Mercantile design tokens
- **Typography**: Playfair Display (editorial serif) & DM Sans (technical sans)
- **Icons**: Google Material Symbols Outlined
- **Static Export**: Configured with `output: 'export'`, `trailingSlash: true`, and unoptimized static asset handling.

---

## 💻 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Building the Static Website

To generate the standalone static website files:

```bash
npm run build
```

The output will be generated in the **`out/`** directory:
```
out/
├── index.html                           # Home Page
├── about-us/index.html                  # About Us Page
├── products/index.html                  # Products Page
├── services/index.html                  # Services Page
├── gallery/index.html                   # Gallery Page
├── blog/index.html                      # Blog Index Page
├── blog/export-documentation-guide/     # Blog Article Page
├── contact/index.html                   # Contact Page
├── 404.html                             # Not Found Page
└── _next/                               # Compiled Static JS & CSS Assets
```

---

## 🌐 Deploying the Static Site

The files in the `out/` folder can be served by any static web server or CDN:

- **Vercel / Netlify / Cloudflare Pages**: Connect your Git repository and set build command to `npm run build` with output directory `out`.
- **GitHub Pages**: Deploy the contents of the `out` folder to the `gh-pages` branch.
- **Nginx / Apache / S3 Bucket**: Upload the files directly from `out/` to your web root or bucket.

# Half Raw Motion - Photography Portfolio Website

A modern photography portfolio website built for Half Raw Motion with React and Vite. The site focuses on boxing photography and cinematic portraits, with a strong visual style, smooth motion, and a direct contact workflow.

[![React](https://img.shields.io/badge/React-19.x-61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-black)](https://www.framer.com/motion/)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Contact Form Integrations](#contact-form-integrations)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Author](#author)

## Overview

This project is a multi-page photography website with a premium dark visual language and motion-first interactions.

Main pages:
- `Home`: Fullscreen hero section with brand messaging and call-to-action buttons.
- `Portfolio`: Category-based gallery (`Boxing` and `Portraits`) with pagination and lightbox.
- `About`: Brand story and philosophy section.
- `Contact`: Social links and booking form.

## Features

- Cinematic hero section with layered gradients and animated entry.
- Responsive navigation with animated mobile menu.
- Portfolio gallery split into two categories:
  - `Boxing`
  - `Portraits`
- Masonry-style image layout with animated reveal on scroll.
- Pagination (`12` images per page).
- Fullscreen lightbox with:
  - keyboard navigation (`Esc`, left/right arrows)
  - next/previous controls
  - image index indicator
- Contact form with:
  - EmailJS email delivery
  - Google Sheets sync through Google Apps Script
  - generated booking number shown after successful submit
- Fully responsive layout for mobile, tablet, and desktop.

## Tech Stack

### Frontend
- React 19
- React Router DOM 7
- Vite 7
- Tailwind CSS 3
- Framer Motion
- Lucide React icons

### Utilities
- EmailJS (`@emailjs/browser`)
- `clsx` + `tailwind-merge` (utility-class composition)

## Project Structure

```text
photography-website/
|- public/
|- src/
|  |- assets/
|  |- components/
|  |  |- contact/
|  |  |  |- ContactForm.jsx
|  |  |- home/
|  |  |  |- Hero.jsx
|  |  |- portfolio/
|  |  |  |- PortfolioGrid.jsx
|  |  |  |- Lightbox.jsx
|  |  |- ui/
|  |  |- Layout.jsx
|  |- pages/
|  |  |- Home.jsx
|  |  |- Portfolio.jsx
|  |  |- About.jsx
|  |  |- Contact.jsx
|  |- utils/
|  |  |- index.js
|  |- App.jsx
|  |- main.jsx
|  |- index.css
|- index.html
|- package.json
|- tailwind.config.js
|- vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+ (or equivalent package manager)

### Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd photography-website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser:

- `http://localhost:5173`

## Contact Form Integrations

The contact form logic is in:
- `src/components/contact/ContactForm.jsx`

Current integration points:
- EmailJS:
  - `EMAILJS_SERVICE_ID`
  - `EMAILJS_TEMPLATE_ID`
  - `EMAILJS_PUBLIC_KEY`
- Google Sheets (Apps Script):
  - `GOOGLE_SCRIPT_URL`

Important notes:
- These values are currently set directly in frontend code.
- For production, move them to environment variables and rotate any exposed keys.
- The booking number is generated client-side from the visitor name plus random digits.

## Available Scripts

- `npm run dev`: Start local dev server.
- `npm run build`: Build production assets.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint checks.

## Deployment

Build the project:

```bash
npm run build
```

The deployable output is generated in the `dist/` directory.

You can deploy to platforms like Vercel, Netlify, or any static hosting provider.

## Roadmap

Potential next improvements:
- Move contact credentials to `.env` variables.
- Add form validation and anti-spam protection (reCAPTCHA/hCaptcha).
- Add CMS-backed gallery management.
- Optimize media delivery (WebP/AVIF + lazy loading strategy).
- Add automated tests (unit + integration).
- Add analytics and conversion tracking.

## Contributing

1. Fork the repository.
2. Create a feature branch:

```bash
git checkout -b feature/your-feature
```

3. Commit your changes:

```bash
git commit -m "Add your feature"
```

4. Push your branch and open a pull request.

## Author

Half Raw Motion

- Instagram: https://www.instagram.com/half_raw_motion/
- Facebook: https://www.facebook.com/photohrm/
- Contact: contact@halfrawmotion.com

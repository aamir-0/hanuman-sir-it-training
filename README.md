# Hanuman Sir IT Training

Production-grade React static website for Hanuman, an independent IT trainer specializing in Networking, VMware, and Azure AD/Entra ID.

## Tech Stack

- React with Vite
- React Router
- Tailwind CSS via PostCSS and a custom theme
- Framer Motion
- Radix UI primitives configured in the shadcn/ui style
- JSON data imported directly as ES modules

## Project Structure

```text
/
├── index.html                 # Vite entry document
├── src/
│   ├── components/            # Layout, sections, cards, and UI primitives
│   ├── data/                  # Editable JSON content contracts
│   ├── pages/                 # React Router page components
│   ├── App.jsx                # Route tree
│   ├── main.jsx               # React entry
│   └── index.css              # Tailwind and visual tokens
├── assets/                    # Logos, images, and PDFs served as static assets
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Run Locally

Run the Vite development server:

```powershell
npm install
npm run dev
```

Build the deployable static output with:

```powershell
npm run build
```

Then preview the production build with `npm run preview`.

To add or edit a course, lab, testimonial, stat, company, or credential, update the corresponding JSON file in `src/data/`. No page changes are required for list or detail content.

## Deployment

Planned deployment: GitHub Pages. Netlify and Vercel are also compatible because the project is a static site with no build step.

## Branch Strategy

This is a solo static project, so work happens directly on `main` for now. A `dev` branch can be added when previewing changes before merging to production becomes necessary.

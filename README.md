# Hanuman Sir IT Training

Production-grade React static website for Hanuman, an independent IT trainer specializing in Networking, VMware, and Azure AD/Entra ID.

## Tech Stack

- React with Vite
- Tailwind CSS via PostCSS and a custom theme
- JSON data imported directly as ES modules

## Project Structure

```text
/
├── index.html                 # Vite entry document
├── backend/                   # Django email API
├── src/
│   ├── components/            # Landing page sections, cards, and UI primitives
│   ├── data/                  # Editable JSON content contracts
│   ├── pages/Home.jsx         # Landing page
│   ├── App.jsx                # Application entry
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

## Django enquiry API

The landing page sends training enquiries to a small Django API. The API validates
the request and sends it by SMTP without storing it in a database.

```powershell
cd backend
py -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
Copy-Item .env.example .env
python manage.py runserver
```

Set the SMTP values and `ENQUIRY_RECIPIENT_EMAIL` in `backend/.env`, then create
a frontend `.env.local` file containing:

```text
VITE_API_URL=http://127.0.0.1:8000
```

For production, set `VITE_API_URL` to the public URL of the Django service before
running `npm run build`. GitHub Pages hosts the React frontend only; deploy the
Django backend separately on a Python host.

To add or edit a course, lab, testimonial, stat, company, or credential, update the corresponding JSON file in `src/data/`. No page changes are required for list or detail content.

## Deployment

GitHub Pages deployment is configured through `.github/workflows/deploy.yml`. The workflow builds the Vite app and publishes `dist` whenever `main` is pushed. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

The deployed project URL will be:

`https://aamir-0.github.io/hanuman-sir-it-training/`

Netlify and Vercel remain compatible with `npm run build` and `dist` as the output directory.

## Branch Strategy

This is a solo static project, so work happens directly on `main` for now. A `dev` branch can be added when previewing changes before merging to production becomes necessary.

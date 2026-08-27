# හොඳ බාස් (Hoda Baas) - Home Services App Landing Page

> Expert on-demand home services & repairs, on demand - right at your doorstep in Sri Lanka.

Official marketing / landing page for **Hoda Baas**, a mobile app that connects customers with verified local technicians — electricians, plumbers, AC technicians, solar specialists, carpenters, painters, masons, and cleaners — in under 60 seconds. This repository contains the responsive React web app used to promote the mobile app and drive installs (Play Store + direct APK).

🔗 **Live Site:** _add your deployed URL here_

---

## ✨ Features

- **Bilingual UI** — Full Sinhala (සිංහල) and English content support
- **Service Showcase** — Highlights all available service categories (Solar, Electrical, Plumbing, AC, Carpentry, Painting, Cleaning, Masonry)
- **How It Works** — Step-by-step guide explaining the booking flow
- **App Highlights** — Verified technicians, in-app chat with photo sharing, transparent pricing, ratings & reviews, real-time status tracking, and 24/7 support
- **Customer Testimonials** — Social proof section
- **FAQ Section** — Answers to common customer questions
- **Direct Download Options** — Google Play Store link and direct APK download
- **Smooth Animations & Interactions** — Scroll reveal effects, cursor/splash effects, and floating widgets for an engaging UX
- **Fully Responsive** — Optimized for mobile, tablet, and desktop

## 🛠️ Tech Stack

<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Lucide_React-Icons-F56565?style=for-the-badge&logo=lucide&logoColor=white" alt="Lucide React" />
  <img src="https://img.shields.io/badge/ESLint-Linting-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
</p>

## 📂 Project Structure

```
Hoda-Bass-Portfolio/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── honda_baas_v1.0.apk     # Direct APK download
├── src/
│   ├── assets/                 # Images & static assets
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── AppShowcase.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQSection.jsx
│   │   ├── InstallationGuide.jsx
│   │   ├── FloatingWidget.jsx
│   │   ├── Footer.jsx
│   │   └── ...                 # Shared UI effects (SplashCursor, Magnet, ShinyText, etc.)
│   ├── data/
│   │   └── content.js          # Centralized bilingual (Sinhala/English) content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/umindudinal/Hoda-Bass-Portfolio.git
   cd Hoda-Bass-Portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the local development server with hot reload |
| `npm run build` | Builds the app for production into the `dist/` folder |
| `npm run preview` | Serves the production build locally for preview |
| `npm run lint` | Runs ESLint to check code quality |

## 📦 Building for Production

```bash
npm run build
```

The optimized, production-ready static files will be generated in the `dist/` directory, ready to be deployed to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.).

## 🌐 Localization

All user-facing text is centralized in [`src/data/content.js`](./src/data/content.js), supporting both **Sinhala (si)** and **English** content. To update or add copy, edit the corresponding keys in this file rather than hardcoding text inside components.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is currently unlicensed. Add a `LICENSE` file to define usage terms, or specify one here.

## 📬 Contact

For business inquiries or support, please reach out via the contact section on the live site.

---

<p align="center">Built with ❤️ for Sri Lankan homes</p>

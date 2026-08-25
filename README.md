# Yash Kshatriya — Developer Portfolio

An interactive, high-performance developer portfolio showcasing full-stack web engineering, AI/ML projects, and creative WebGL shader experiences.

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.170.0-000000?style=flat-square&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15.0-88CE02?style=flat-square&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

---

## 📑 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Architecture & How It Works](#architecture--how-it-works)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Running Locally](#running-locally)
- [Build & Production Preview](#build--production-preview)
- [Project Showcase](#project-showcase)
- [API & External Integrations](#api--external-integrations)
- [Deployment](#deployment)
- [Testing & Quality Verification](#testing--quality-verification)
- [Troubleshooting & Known Limitations](#troubleshooting--known-limitations)
- [Connect & Socials](#connect--socials)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This repository contains the source code for **Yash Kshatriya's** personal developer portfolio. It is designed to demonstrate full-stack software development competencies, machine learning projects, and modern frontend visual design using WebGL shaders, particle simulations, and fluid micro-interactions.

---

## Key Features

- **Multi-Layered WebGL & Shader Hero Section**:
  - **Molten Metal Fluid Shader**: Custom GLSL fragment shader rendering interactive metallic flows with color gradients and mouse distortion.
  - **Generative Ribbons**: Flowing ribbon physics simulation rendered using OGL / WebGL.
  - **Image Particle Atomizer**: Interactive 3D particle cloud that reconstructs portrait imagery and responds to cursor repulsion in real time.
- **Dynamic Hero Typography**:
  - Live status indicator badge (`SYSTEM ACTIVE // OPEN TO WORK`).
  - Animated role rotation with character reveal styling.
  - Direct call-to-action buttons for work exploration, contact, and resume access.
- **Interactive Word-by-Word Scroll Reveal**:
  - GSAP `ScrollTrigger`-powered typography in the **About** section that gradually illuminates words as the user scrolls.
  - Scoped inverted cursor effect highlighting underlying text.
- **Interactive Career & Education Timeline**:
  - Step-by-step visual timeline tracking academic milestones (Class 12, B.Tech CSE at LJ University) and software development progression (Full-Stack, AI/ML, real-world applications, and internship search).
- **Comprehensive Project Showcase (HUD Style)**:
  - Interactive grid displaying featured engineering and AI projects.
  - Expandable modal drawers with project overviews, feature breakdowns, architecture notes, and personal contribution highlights.
  - Direct links to GitHub repositories and live web deployments where available.
- **Categorized Tech Stack Matrix**:
  - Interactive tabbed browsing across **Languages**, **Frameworks**, **Libraries**, **Databases & Data**, and **Developer Tools**.
  - Devicon SVG integration with hover animations and outbound documentation links.
- **Fluid Cursor & Click Dynamics**:
  - Context-aware custom SVG pointer morphing between button, hover, link, and copy states (automatically disabled on mobile/touch screens).
  - Canvas click spark burst animation (`ClickSpark`) on user clicks.
  - Celebratory confetti particle explosion (`canvas-confetti`) when copying the contact email address.
- **Accessible & Responsive**:
  - Fully responsive layout optimized for mobile, tablet, laptop, and ultra-wide screens.
  - Top scroll progress indicator and scroll-spy navigation with smooth section jumping.

---

## Tech Stack

### Core & Framework
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **React** | `^18.3.1` | Declarative UI component architecture |
| **TypeScript** | `^5.7.3` | Static type safety and developer ergonomics |
| **Vite** | `^6.1.0` | Next-generation frontend tooling and fast HMR |

### Graphics, 3D & Shaders
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Three.js** | `^0.170.0` | WebGL 3D scene rendering and particle point clouds |
| **OGL** | `^1.0.11` | Minimal WebGL library for shader effects and ribbons |
| **HTML5 Canvas** | Native | High-performance 2D/3D particle rendering |

### Animations & Micro-Interactions
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Framer Motion** | `^11.18.2` | Component transitions, layout animations, and entry effects |
| **GSAP (GreenSock)** | `^3.15.0` | ScrollTrigger scroll-scrubbed text reveal animations |
| **Canvas Confetti** | `^1.9.4` | Interactive particle explosions on user actions |
| **@tsparticles** | `^4.3.2` | Lightweight particle engine and slim presets |

### Styling & UI
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Tailwind CSS** | `^3.4.17` | Utility-first styling with dark mode obsidian color tokens |
| **Lucide React** | `^0.475.0` | Modern, clean iconography |
| **React Icons** | `^5.7.0` | Brand and developer tool icons |
| **clsx / tailwind-merge**| `^2.1.1` / `^2.6.0` | Utility class composition |

---

## Architecture & How It Works

```
┌──────────────────────────────────────────────────────────────┐
│                           App.tsx                            │
├──────────────────────────────┬───────────────────────────────┤
│ Context & UI Overlays        │ Main Section Flow             │
│ ├─ CursorProvider            │ ├─ ScrollProgress (Top Bar)   │
│ ├─ NewCursorProvider         │ ├─ CombinedHeroNew            │
│ ├─ ClickSpark Layer          │ │  ├─ MoltenMetal (GLSL)      │
│ └─ Custom / Inverted Cursors │ │  ├─ Ribbons (OGL)           │
│                              │ │  ├─ Image Particles (Canvas)│
│                              │ │  └─ ReferenceHeroText       │
│                              │ ├─ About (GSAP ScrollTrigger) │
│                              │ ├─ CareerTimeline             │
│                              │ ├─ MyWork (Project Modals)    │
│                              │ ├─ TechStack (Tabs & Links)   │
│                              │ ├─ Contact (Confetti & Copy)  │
│                              │ └─ Footer                     │
└──────────────────────────────┴───────────────────────────────┘
```

1. **State & Context Management**:
   - `CursorContext` controls cursor variants across hover targets (e.g. `button`, `link`, `copy`, `hover`).
   - `useScrollSpy` dynamically monitors the active viewport section (`#hero`, `#about`, `#timeline`, `#work`, `#stack`, `#contact`) to highlight navbar items.
2. **Configuration & Data Isolation**:
   - `src/config/site.ts` serves as the single source of truth for personal metadata, social links, and default environment fallbacks.
   - `src/portfolio2/data.ts` contains project definitions and detailed modal content.
   - `src/career-timeline/careerData.ts` defines timeline steps and milestones.
   - `src/tech-stack/data/technologies.ts` stores categorised technologies, icons, and official documentation links.

---

## Project Structure

```text
yash-portfolio/
├── public/                      # Static web assets
│   ├── images/                  # Project screenshots, portraits, and icons
│   ├── video/                   # Project preview recordings
│   ├── favicon.svg              # Site favicon
│   └── YASH_KSHATRIYA_RESUME.pdf# Static resume document
├── src/
│   ├── career-timeline/         # Interactive career & education timeline
│   │   ├── careerData.ts        # Timeline data entries
│   │   ├── CareerTimeline.css   # Timeline custom styling
│   │   └── CareerTimeline.tsx   # Timeline component logic
│   ├── components/
│   │   ├── about/               # About section with GSAP word-reveal
│   │   ├── contact/             # Contact card with clipboard copy & confetti
│   │   ├── hero/                # Hero visual stack (shaders, ribbons, particles)
│   │   │   ├── CombinedHeroNew.tsx
│   │   │   ├── ImageAtomizer.ts
│   │   │   ├── MoltenMetal.tsx
│   │   │   ├── ReferenceHeroText.tsx
│   │   │   └── ReferenceImageParticles.tsx
│   │   ├── layout/              # Navbar, Footer, ScrollProgress, CustomCursor
│   │   └── ui/                  # Reusable UI widgets (ClickSpark, Ribbons, InvertedCursor)
│   ├── config/                  # Site-wide constants and config (site.ts)
│   ├── context/                 # React Context providers (CursorContext)
│   ├── hooks/                   # Custom React hooks (useScrollSpy)
│   ├── portfolio2/              # Project showcase and modal drawer
│   │   ├── data.ts              # Projects metadata and modal details
│   │   └── MyWork/              # Work grid & modal inspection components
│   ├── social-buttons/          # Social profile pill links
│   ├── tech-stack/              # Categorized tech stack grid
│   │   ├── data/technologies.ts # Tech items by category
│   │   └── TechStack.tsx
│   ├── types/                   # TypeScript interfaces and type definitions
│   ├── utils/                   # Helper utility functions
│   ├── App.tsx                  # Root application layout
│   ├── index.css                # Global stylesheet and Tailwind directives
│   ├── main.tsx                 # React DOM root entrypoint
│   └── vite-env.d.ts            # Vite client environment type definitions
├── .env.example                 # Environment variables template
├── index.html                   # HTML entry with SEO & Open Graph meta tags
├── package.json                 # Project dependencies and npm scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind theme customization and color tokens
├── tsconfig.json                # TypeScript compiler configuration
└── vite.config.ts               # Vite build configuration and chunk splitting
```

---

## Prerequisites

Before running the project locally, ensure you have the following installed on your machine:

- **Node.js**: `v18.x` or `v20.x+` ([Download Node.js](https://nodejs.org/))
- **npm**: `v9.x` or later (bundled with Node.js), or **pnpm** / **yarn**
- **Modern Web Browser**: Chrome, Firefox, Safari, or Edge with hardware acceleration enabled for WebGL.

---

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Yash19k/yash-portfolio.git
   cd yash-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables** (optional):
   ```bash
   cp .env.example .env
   ```

---

## Environment Variables

All environment variables are optional. The application contains fallback values in `src/config/site.ts` to ensure immediate out-of-the-box functionality.

Create a `.env` file in the project root to override any default values:

| Variable | Required | Default / Fallback | Description |
| :--- | :---: | :--- | :--- |
| `VITE_GITHUB_USERNAME` | No | `Yash19k` | GitHub username displayed in site links |
| `VITE_GITHUB_URL` | No | `https://github.com/Yash19k` | Full URL to your GitHub profile |
| `VITE_LINKEDIN_URL` | No | `https://www.linkedin.com/in/yashkshatriya19/` | Full URL to your LinkedIn profile |
| `VITE_EMAIL` | No | `kshatriyayash19@gmail.com` | Email address for direct mailto and copy actions |
| `VITE_RESUME_URL` | No | `/Yash_Kshatriya_Resume.pdf` | Web-accessible path or URL to resume PDF |

---

## Running Locally

To start the Vite local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Once started, open your browser and navigate to:
```
http://localhost:5173
```

---

## Build & Production Preview

### 1. Type-Check and Build
To compile TypeScript and produce an optimized production bundle in the `dist/` directory:

```bash
npm run build
```

### 2. Preview the Production Build Locally
To test the built production bundle locally before deploying:

```bash
npm run preview
```

The preview server will launch (typically at `http://localhost:4173`).

---

## Project Showcase

The portfolio showcases 4 featured engineering and AI projects:

1. **OBRIX (Location Intelligence Platform)**:
   - **Domain**: AI-Powered Geospatial Location Intelligence & Site Readiness Analysis.
   - **Stack**: React, Django REST Framework, PostgreSQL, PostGIS, Leaflet.
   - **Highlights**: Automated site suitability scoring, dynamic radius catchment analysis, and interactive GIS vector/raster layers.
   - **Live Demo**: [obrix-frontend.onrender.com](https://obrix-frontend.onrender.com/)
   - **Repository**: [Yash19k/Obrix-Location-Intelligence-Platform](https://github.com/Yash19k/Obrix-Location-Intelligence-Platform)

2. **Academix (AI-Powered Learning Platform)**:
   - **Domain**: Structured Education & AI-Assisted Study Workspace.
   - **Stack**: HTML5, CSS3, JavaScript, Bootstrap, AI Chatbot integration.
   - **Highlights**: Video learning modules, structured notes, quiz engine, and AI chatbot assistance.
   - **Repository**: [Yash19k/Academix](https://github.com/Yash19k/Academix)

3. **Logistics Management System (LMS)**:
   - **Domain**: Logistics Management, Fleet Tracking & Distance Calculations.
   - **Stack**: Java, JDBC, MySQL, Google Maps API.
   - **Highlights**: Admin/User role separation, automated distance-based fare calculations, and relational database persistence.
   - **Repository**: [Yash19k/LMS](https://github.com/Yash19k/LMS)

4. **TransitOps (Smart Transport Operations Platform)**:
   - **Domain**: Real-Time Fleet Telemetry & Delay Forecasting.
   - **Stack**: React, TypeScript, Python, FastAPI, WebSockets, PostgreSQL, Tailwind CSS, Scikit-learn.
   - **Highlights**: Low-latency vehicle telemetry simulation, route monitoring, and ML-assisted junction delay predictions.
   - **Repository**: [Yash19k/TransitOps-Smart-Transport-Operations-Platform](https://github.com/Yash19k/TransitOps-Smart-Transport-Operations-Platform)

---

## API & External Integrations

This repository is built as a **Client-Side Single Page Application (SPA)** and does not bundle a custom backend API server directly. It interacts with:

- **Browser Web APIs**: WebGL / Canvas context, Clipboard API (`navigator.clipboard`), and Viewport Match Media queries.
- **External CDN Assets**: Devicon & Simple Icons SVG icons delivered via jsDelivr and unpkg CDNs.
- **External Services**: Direct hyperlinks and live previews connecting to GitHub repositories and cloud-hosted application deployments.

---

## Deployment

The application can be deployed to any modern static hosting platform (e.g., **Vercel**, **Netlify**, **Cloudflare Pages**, or **GitHub Pages**).

### Deploying to Vercel (Recommended)

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import the `yash-portfolio` repository.
4. Vercel automatically detects the Vite framework preset:
   - **Build Command**: `npm run build` (or `tsc && vite build`)
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. (Optional) Add your environment variables in the Vercel Project Settings.
6. Click **Deploy**.

---

## Testing & Quality Verification

- **Static Type Checking & Compilation**:
  ```bash
  npm run build
  ```
  Runs `tsc` (TypeScript Compiler) across all project files to enforce strict type checking, followed by `vite build` to verify asset bundling and chunk splitting.

---

## Troubleshooting & Known Limitations

- **WebGL Performance / Hardware Acceleration**:
  - The hero section uses custom WebGL shaders and particle simulation. If you experience lower frame rates, ensure **Hardware Acceleration** is enabled in your browser settings (`chrome://settings/system` or equivalent).
- **Custom Cursor on Mobile Devices**:
  - The custom SVG cursor is automatically hidden on touch-enabled devices (`isTouchDevice`) and coarse pointer screens to ensure native, frictionless mobile touch behavior.
- **Resume Download / Casing**:
  - The resume PDF is served statically from the `public/` directory. If customizing the filename, update `VITE_RESUME_URL` in your `.env` or `src/config/site.ts`.

---

## Connect & Socials

- **Portfolio**: [yashkshatriya.vercel.app](https://yashkshatriya.vercel.app/)
- **GitHub**: [@Yash19k](https://github.com/Yash19k)
- **LinkedIn**: [yashkshatriya19](https://www.linkedin.com/in/yashkshatriya19/)
- **LeetCode**: [Yash19k](https://leetcode.com/u/Yash19k/)
- **Email**: [kshatriyayash19@gmail.com](mailto:kshatriyayash19@gmail.com)

---

## Contributing

Contributions, feedback, and suggestions are welcome!

1. Fork the repository.
2. Create a descriptive feature branch: `git checkout -b feature/amazing-feature`.
3. Commit your changes: `git commit -m "Add amazing feature"`.
4. Push to the branch: `git push origin feature/amazing-feature`.
5. Open a Pull Request.

---

## License

This project is open source and available under the [MIT License](LICENSE).

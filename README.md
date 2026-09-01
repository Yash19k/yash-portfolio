# Yash Kshatriya — Developer Portfolio

<div align="center">

# ⚡ Yash Kshatriya
### AI / ML & Full-Stack Developer • Computer Science Engineering

An interactive, high-performance developer portfolio featuring custom WebGL shaders, fluid physics simulations, interactive GSAP typography, and deep-dive engineering showcase.

[![Live Demo](https://img.shields.io/badge/Live_Site-yashkshatriya.me-8B5CF6?style=for-the-badge&logo=googlechrome&logoColor=white)](https://yashkshatriya.me/)
[![GitHub](https://img.shields.io/badge/GitHub-Yash19k-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Yash19k)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-yashkshatriya19-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yashkshatriya19/)
[![LeetCode](https://img.shields.io/badge/LeetCode-Yash19k-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/Yash19k/)

---

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.170.0-000000?style=flat-square&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15.0-88CE02?style=flat-square&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

</div>

---

## 📑 Table of Contents

- [Overview](#overview)
- [Key Features & Highlights](#key-features--highlights)
- [Architecture & Data Flow](#architecture--data-flow)
- [Project Directory Structure](#project-directory-structure)
- [Tech Stack](#tech-stack)
- [Featured Engineering Projects](#featured-engineering-projects)
- [Engineering & Design Principles](#engineering--design-principles)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Development & Production Scripts](#development--production-scripts)
- [Deployment](#deployment)
- [Connect & Socials](#connect--socials)
- [License](#license)

---

## Overview

Welcome to the source repository for **Yash Kshatriya's Personal Portfolio**. 

Built from the ground up with **React 18**, **TypeScript**, and **Vite**, this application serves as both a portfolio and an interactive showcase of creative frontend engineering, WebGL shader computations, responsive UI architecture, and full-stack software development.

> [!NOTE]
> **Live Website**: Experience the live interactive build at [yashkshatriya.me](https://yashkshatriya.me/).

---

## Key Features & Highlights

### 🎨 Visual & Interactive Experiences
- **Multi-Layered WebGL & Shader Hero**:
  - **Molten Metal Fluid Shader**: Custom GLSL fragment shader rendering interactive metallic flows with color gradients and real-time mouse distortion.
  - **Generative Ribbons**: Flowing ribbon physics simulation rendered using OGL and WebGL.
  - **Image Particle Atomizer**: 3D particle cloud that reconstructs portrait imagery and dynamically responds to cursor repulsion.
- **GSAP Scroll-Triggered Kinetic Typography**:
  - Word-by-word illuminating text reveal in the **About** section synchronized with scroll depth via GSAP `ScrollTrigger`.
  - Scoped inverted cursor effect providing backdrop contrast and magnification.
- **Context-Aware Dynamic Cursor**:
  - Adaptive SVG pointer morphing smoothly between states (`button`, `link`, `copy`, `hover`).
  - Interactive canvas click spark bursts (`ClickSpark`) and particle confetti explosions (`canvas-confetti`) on email copy.
  - Automatic fallback to native touch gestures on mobile/coarse pointer devices.

### 💼 Career & Technical Showcase
- **Interactive Career & Academic Timeline**:
  - Structured timeline tracking milestones: High School, B.Tech Computer Science Engineering at LJ University, full-stack development, and AI/ML specialization.
- **HUD-Style Project Command Center**:
  - Interactive project cards with instant preview modals, architectural breakdowns, tech specifications, and direct GitHub/live deployment links.
- **Categorized Tech Stack Matrix**:
  - Tabbed matrix across **Languages**, **AI / ML**, **Web & 3D**, **Data & GIS**, and **Tools & DevOps** with Devicon SVG integration and official documentation links.

---

## Architecture & Data Flow

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                 App.tsx                                  │
├────────────────────────────────────┬─────────────────────────────────────┤
│ Context & Global Overlays          │ Main Section Flow                   │
│ ├─ CursorProvider                  │ ├─ ScrollProgress (Top Navbar)      │
│ ├─ NewCursorProvider               │ ├─ CombinedHeroNew                  │
│ ├─ ClickSpark Overlay              │ │  ├─ MoltenMetal (GLSL Shader)     │
│ └─ Custom / Inverted Cursors       │ │  ├─ Ribbons (OGL Physics)         │
│                                    │ │  ├─ Image Particles (Canvas)      │
│                                    │ │  └─ ReferenceHeroText (CTA / Badges│
│                                    │ ├─ About (GSAP ScrollTrigger)       │
│                                    │ ├─ CareerTimeline (Milestone Cards) │
│                                    │ ├─ MyWork (Project Modal Drawers)   │
│                                    │ ├─ TechStack (Tabbed Filter Matrix) │
│                                    │ ├─ Contact (Confetti & Copy Action) │
│                                    │ └─ Footer                           │
└────────────────────────────────────┴─────────────────────────────────────┘
```

### Core Architecture Highlights

1. **Single Source of Truth (`src/config/site.ts`)**:
   - All profile details, coordinates, copy text, social URLs, and fallback data reside in a centralized configuration module.
2. **Dynamic Viewport Scroll Spy**:
   - `useScrollSpy` hook monitors active intersecting sections to dynamically highlight header navigation items in real time.
3. **Decoupled Project Metadata (`src/portfolio2/data.ts`)**:
   - Clear separation between visual grid presentations and detailed modal inspection drawers.

---

## Project Directory Structure

```text
yash-portfolio/
├── public/                       # Static public assets
│   ├── images/                   # Project previews, portraits, and thumbnails
│   ├── video/                    # Project demonstration videos
│   ├── favicon.svg               # Site branding favicon
│   └── Yash_Kshatriya_Resume.pdf # Downloadable resume document
├── src/
│   ├── career-timeline/          # Education & career milestone timeline
│   │   ├── careerData.ts         # Milestone data entries
│   │   ├── CareerTimeline.css    # Timeline component styles
│   │   └── CareerTimeline.tsx    # Timeline rendering logic
│   ├── components/
│   │   ├── about/                # About section with GSAP word-reveal
│   │   ├── contact/              # Contact card with clipboard copy & confetti
│   │   ├── hero/                 # Hero visual stack (shaders, ribbons, particles)
│   │   │   ├── CombinedHeroNew.tsx
│   │   │   ├── ImageAtomizer.ts
│   │   │   ├── MoltenMetal.tsx
│   │   │   ├── ReferenceHeroText.tsx
│   │   │   └── ReferenceImageParticles.tsx
│   │   ├── layout/               # Navbar, Footer, ScrollProgress, CustomCursor
│   │   └── ui/                   # Reusable UI widgets (ClickSpark, Ribbons, Buttons)
│   ├── config/                   # Site-wide constants and config (site.ts)
│   ├── context/                  # React Context providers (CursorContext)
│   ├── hooks/                    # Custom hooks (useScrollSpy)
│   ├── portfolio2/               # Project showcase and modal drawer
│   │   ├── data.ts               # Project metadata and detailed drawer info
│   │   └── MyWork/               # Project cards & modal inspection components
│   ├── social-buttons/           # Social profile pill links
│   ├── tech-stack/               # Categorized tech stack grid
│   │   ├── data/technologies.ts  # Tech items by category with icons and URLs
│   │   └── TechStack.tsx         # Tabbed filter matrix component
│   ├── types/                    # TypeScript interfaces and type definitions
│   ├── utils/                    # Utility helper functions
│   ├── App.tsx                   # Root application container & section layout
│   ├── index.css                 # Global CSS and Tailwind CSS directives
│   ├── main.tsx                  # React DOM root mounting
│   └── vite-env.d.ts             # Vite client environment definitions
├── .env.example                  # Environment variables template
├── index.html                    # HTML5 template with SEO & Open Graph meta tags
├── package.json                  # Dependencies and build scripts
├── postcss.config.js             # PostCSS plugins
├── tailwind.config.js            # Tailwind custom tokens, animations & colors
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite bundler configuration & chunk splitting
```

---

## Tech Stack

### Core & Framework
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **React** | `^18.3.1` | Declarative component UI library |
| **TypeScript** | `^5.7.3` | Type safety and enhanced developer ergonomics |
| **Vite** | `^6.1.0` | High-speed frontend build tool and HMR dev server |

### Graphics, 3D & Shaders
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Three.js** | `^0.170.0` | WebGL 3D scene rendering and particle point clouds |
| **OGL** | `^1.0.11` | Minimal WebGL library for shader effects and ribbons |
| **GLSL (Custom)** | Native | Fragment shader computing molten fluid distortion |
| **HTML5 Canvas** | Native | 2D/3D particle atomizer rendering |

### Animations & Micro-Interactions
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Framer Motion** | `^11.18.2` | Fluid transitions, modal spring physics, and layout animations |
| **GSAP (GreenSock)** | `^3.15.0` | ScrollTrigger scroll-scrubbed text reveal animations |
| **Canvas Confetti** | `^1.9.4` | Particle confetti explosion effects |
| **@tsparticles** | `^4.3.2` | Particle engine presets |

### Styling & UI
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Tailwind CSS** | `^3.4.17` | Utility-first styling with dark obsidian color palette |
| **Lucide React** | `^0.475.0` | Clean, modern vector iconography |
| **React Icons** | `^5.7.0` | Tech stack and brand icons |
| **clsx / tailwind-merge**| `^2.1.1` / `^2.6.0` | Dynamic class composition |

---

## Featured Engineering Projects

<div align="center">

### 1. OBRIX — Geospatial Location Intelligence Platform
**AI-Powered Location Intelligence & Site Readiness Analysis**

</div>

- **Overview**: An intelligent site-readiness platform that analyzes geographic, accessibility, infrastructure, and surrounding-area data to evaluate candidate development locations.
- **Tech Stack**: `React` • `Django REST Framework` • `PostgreSQL` • `PostGIS` • `Leaflet` • `OpenStreetMap` • `Python`
- **Key Features**:
  - Automated site suitability scoring with multi-criteria spatial weights.
  - Dynamic radius catchment analysis & amenity proximity calculations.
  - Interactive GIS vector and raster layer rendering.
- **Links**: [Live Demo](https://obrix-frontend.onrender.com/) • [GitHub Repository](https://github.com/Yash19k/Obrix-Location-Intelligence-Platform)

---

<div align="center">

### 2. TransitOps — Smart Transport Operations Platform
**Real-Time Fleet Telemetry & Delay Forecasting**

</div>

- **Overview**: A smart transportation operations platform engineered for real-time fleet tracking, delay prediction models, congestion telemetry, and dynamic route optimization.
- **Tech Stack**: `React` • `TypeScript` • `Python` • `FastAPI` • `WebSockets` • `PostgreSQL` • `Tailwind CSS` • `Scikit-learn`
- **Key Features**:
  - Sub-second vehicle telemetry simulation and broadcast over WebSockets.
  - Predictive machine learning models to forecast junction delays.
  - Real-time route monitoring and operational telemetry metrics.
- **Links**: [GitHub Repository](https://github.com/Yash19k/TransitOps-Smart-Transport-Operations-Platform)

---

<div align="center">

### 3. Academix — AI-Powered Learning Platform
**Structured Education & AI-Assisted Study Workspace**

</div>

- **Overview**: An educational web application designed to provide students with structured learning modules, interactive quizzes, and AI chatbot assistance.
- **Tech Stack**: `HTML5` • `CSS3` • `JavaScript` • `Bootstrap` • `AI Chatbot Integration`
- **Key Features**:
  - Interactive video learning modules and categorized study notes.
  - Integrated quiz evaluation engine with instant feedback.
  - Embedded AI assistant for answering student queries.
- **Links**: [GitHub Repository](https://github.com/Yash19k/Academix)

---

<div align="center">

### 4. LMS — Logistics Management System
**Fleet Management, Role-Based Access & Distance Calculations**

</div>

- **Overview**: A Java-based enterprise logistics management application for managing fleets, users, logistics operations, and automated distance-based fare calculations.
- **Tech Stack**: `Java` • `JDBC` • `MySQL` • `Google Maps API`
- **Key Features**:
  - Role-based access control (Admin vs. User permissions).
  - Automated distance calculations and fare estimation using Google Maps API.
  - Secure relational database integration with MySQL.
- **Links**: [GitHub Repository](https://github.com/Yash19k/LMS)

---

## Engineering & Design Principles

> [!TIP]
> **Performance First**: WebGL and canvas animations are hardware-accelerated and paused or reduced when offscreen or on touch devices.

1. **Hardware-Accelerated WebGL**:
   - Shaders and canvas particle loops are optimized with frame throttling and efficient memory management to prevent memory leaks.
2. **Mobile & Touch Compatibility**:
   - Custom SVG cursor automatically disables on touchscreens (`isTouchDevice`) and coarse pointers to ensure seamless, native touch interaction.
3. **SEO & Accessibility**:
   - Semantic HTML5 structure with Open Graph metadata and responsive viewport configurations.
4. **Type-Safe Development**:
   - Strict TypeScript configurations ensuring type safety across props, data structures, and state hooks.

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:
- **Node.js**: `v18.x` or `v20.x+` ([Download Node.js](https://nodejs.org/))
- **npm**: `v9.x` or later (or `pnpm` / `yarn`)
- **Modern Web Browser**: Chrome, Firefox, Safari, or Edge with WebGL hardware acceleration enabled.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Yash19k/yash-portfolio.git
   cd yash-portfolio
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables (Optional)**:
   ```bash
   cp .env.example .env
   ```

### Environment Variables

All environment variables are optional. If not provided, fallback values in `src/config/site.ts` are automatically used:

| Variable | Required | Default / Fallback | Description |
| :--- | :---: | :--- | :--- |
| `VITE_GITHUB_USERNAME` | No | `Yash19k` | GitHub username displayed on site |
| `VITE_GITHUB_URL` | No | `https://github.com/Yash19k` | Direct URL to GitHub profile |
| `VITE_LINKEDIN_URL` | No | `https://www.linkedin.com/in/yashkshatriya19/` | Direct URL to LinkedIn profile |
| `VITE_EMAIL` | No | `kshatriyayash19@gmail.com` | Primary contact email address |
| `VITE_RESUME_URL` | No | `/Yash_Kshatriya_Resume.pdf` | Path/URL to the resume PDF |

### Development & Production Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server with Hot Module Replacement (`http://localhost:5173`) |
| `npm run build` | Runs TypeScript type checking (`tsc`) and compiles optimized production assets to `dist/` |
| `npm run preview` | Spins up a local server to preview the production build (`http://localhost:4173`) |

---

## Deployment

The application compiles to static HTML/CSS/JS assets and can be deployed to any modern edge hosting platform.

### Deploying to Vercel (Recommended)

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import the `yash-portfolio` repository.
4. Vercel automatically detects the Vite build configuration:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

---

## Connect & Socials

- 🌐 **Portfolio**: [yashkshatriya.me](https://yashkshatriya.me/)
- 🐙 **GitHub**: [@Yash19k](https://github.com/Yash19k)
- 💼 **LinkedIn**: [yashkshatriya19](https://www.linkedin.com/in/yashkshatriya19/)
- 💻 **LeetCode**: [Yash19k](https://leetcode.com/u/Yash19k/)
- 📧 **Email**: [kshatriyayash19@gmail.com](mailto:kshatriyayash19@gmail.com)

---

## License

This project is licensed under the [MIT License](LICENSE).

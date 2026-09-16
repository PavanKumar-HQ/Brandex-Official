<div align="center">
  <img src="public/logo_nobg.png" alt="Brandex Logo" width="90" height="90" />
  <h1>Brandex — Digital Systems & Infrastructure</h1>
  <p><strong>Bespoke Web Platforms, High-Throughput Cloud Applications, and Smart Digital Education Systems. Built for Business.</strong></p>

  <p>
    <a href="https://brandex.dev"><img src="https://img.shields.io/badge/Website-brandex.dev-4f47e6?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Website" /></a>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Three.js-WebGL-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
    <img src="https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  </p>
</div>

---

## 🌟 Overview

**Brandex** is an engineering-first software studio and digital infrastructure ecosystem based in Bangalore, India. We design and build high-performance web applications, automated business pipelines, smart classroom educational software, and open-source tools for a 500+ builder guild.

Unlike traditional agencies relying on bloated CMS templates with 40+ plugins, Brandex writes clean, deterministic React & TypeScript architecture delivering **sub-second edge latency**, **100% client code ownership**, and **zero recurring platform tax**.

---

## ⚡ Core Pillars & Key Features

```
                                    ┌────────────────────────┐
                                    │    BRANDEX PLATFORM    │
                                    └───────────┬────────────┘
               ┌────────────────────────────────┼────────────────────────────────┐
               │                                │                                │
      ┌────────┴────────┐              ┌────────┴────────┐              ┌────────┴────────┐
      │  Bespoke Web &  │              │    Community    │              │ Brandex Digital │
      │  Cloud Software │              │   Builders Hub  │              │ Education (EDU) │
      └────────┬────────┘              └────────┬────────┘              └────────┬────────┘
               │                                │                                │
       • Sub-18ms TTFB                  • 500+ Guild Members             • KSEEB Classes 6-10
       • 3D Interactive WebGL           • Open Source Repositories       • Smartboard Player
       • Automated Pipelines            • Live Bangalore Summits         • Formative Quizzes
       • Liquid Glass Design            • Verified PR Badges             • Zero-Ad Classroom
```

### 1. 🚀 Bespoke Digital Engineering
- **Sub-Second Performance**: Optimized Core Web Vitals (99+ Lighthouse) with edge CDN distribution.
- **Interactive 3D WebGL Earth**: Procedural GIS-accurate Earth globe with real-time global telemetry nodes.
- **Liquid Glass Design System**: Apple-grade translucent glassmorphism with Framer Motion spring physics.
- **Event-Driven Automation**: Custom webhook orchestration, CRM sync, and automated billing engines.

### 2. 👥 Community Builders & Founders Guild (`/community`)
- **500+ Active Builders**: Bangalore's fastest-growing developer guild for software engineers, product designers, and founders.
- **Technology Domain Circles**: Specialized guilds in AI & ML, Cybersecurity, Cloud & DevOps, and Design Systems.
- **Open-Source Registry & Leaderboard**: Public repositories, Good First Issues, and cryptographic PR verification credentials.
- **Live Summits & Wargames**: Hands-on buildathons, cybersecurity CTF wargames, and design teardowns.

### 3. 🎓 Brandex Digital Education (`/education`)
- **Karnataka State Board (KSEEB) Aligned**: Full curriculum video modules for Classes 6 through 10 (Science, Mathematics, Social Science, English).
- **Classroom Smartboard Theater**: Distraction-free, zero-watermark video player built for smartboards and interactive panels.
- **Predefined Formative Quizzes**: Instant post-lecture comprehension assessments with immediate feedback.
- **Curriculum Explorer**: Step-by-step class, subject, chapter, and topic navigation.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 18/19](https://react.dev/), [Vite 5](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **Routing & Navigation** | [React Router DOM v6](https://reactrouter.com/) |
| **Interactive 3D Graphics** | [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei) |
| **Animations & Gestures** | [Framer Motion](https://www.framer.com/motion/) |
| **Styling & Design System** | [Tailwind CSS](https://tailwindcss.com/), `shadcn/ui`, Custom Liquid Glass tokens |
| **Icons & Media** | [Lucide React](https://lucide.dev/), Custom SVG graphics |
| **SEO & Telemetry** | Dynamic Open Graph, Twitter Cards, Schema.org Multi-Entity Graph JSON-LD |

---

## 📁 Directory Structure

```
Brandex-Official/
├── public/                     # Static assets, logos, GIS geojson data, og-images
├── src/
│   ├── assets/                 # Brand assets and imagery
│   ├── community/              # Community guild context, repositories, and models
│   │   ├── components/         # Contributor leaderboards, modals, and filters
│   │   ├── models/             # Type definitions for events, projects, and guilds
│   │   └── repositories/       # Data providers and API services
│   ├── components/             # Reusable global components
│   │   ├── home/               # Hero, 3D Globe, Feature Showcase, Logo Ticker, Pricing
│   │   ├── ui/                 # Magnetic wrappers, buttons, rolling counters, skeletons
│   │   ├── Navbar.tsx          # Global navbar with Mega-Dropdown flyouts & mobile drawer
│   │   ├── Footer.tsx          # 5-column footer with modern brand social icon badges
│   │   └── PageLoader.tsx      # High-contrast light-theme cinematic bootloader
│   ├── data/                   # Projects, blog posts, and curriculum datasets
│   ├── education/              # Brandex Digital Education platform
│   │   ├── learning/           # Smartboard distraction-free video player
│   │   ├── lib/                # KSEEB curriculum data structures & chapter mappings
│   │   ├── quiz/               # Interactive formative assessment runner modal
│   │   └── tour/               # Spotlight onboarding tour for educators
│   ├── pages/                  # Top-level route views
│   │   ├── community/          # CommunityHome, Projects, Events, Careers, Stories
│   │   ├── education/          # EducationHome, CurriculumExplorer, ClassDetail, LessonPage
│   │   ├── FounderProfile.tsx  # Executive leadership profile (Pavan Kumar / Sathvik)
│   │   └── Index.tsx           # Main homepage
│   ├── index.css               # Core design tokens, Liquid Glass utilities, and keyframes
│   └── main.tsx                # Application bootstrap
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/PavanKumar-HQ/Brandex-Official.git
   cd Brandex-Official
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production bundle**:
   ```bash
   npm run preview
   ```

---

## 🔒 Performance & Quality Standards

- ⚡ **First Contentful Paint (FCP)**: `< 0.8s`
- 🎯 **Time to Interactive (TTI)**: `< 1.2s`
- 📱 **Mobile Responsiveness**: 100% responsive down to 320px screens with zero horizontal overflow.
- 🎨 **Design Aesthetics**: Tailored typography (Outfit, Plus Jakarta Sans, JetBrains Mono), HSL color tokens, and smooth micro-interactions.

---

## 👥 Leadership & Maintainers

- **Pavan Kumar** — Co-Founder & Chief Systems Architect ([@PavanKumar-HQ](https://github.com/PavanKumar-HQ))
- **Sathvik Nagesh** — Co-Founder & Head of Product Design

---

## 📄 License

Brandex Digital Systems & Infrastructure &copy; 2026. All Rights Reserved. Built for Business.

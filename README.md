<div align="center">

# 🌐 Aditya Shelke— Portfolio

### Full Stack Developer | Mumbai, India

[![Next.js](https://img.shields.io/badge/Next.js-16.x-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

> A modern, animated, fully responsive portfolio website with dark/light mode, particle background, custom cursor, and interactive UI.

</div>

---

## ✨ Features

- 🌑 **Dark / Light Mode** — Seamlessly toggled with `next-themes`
- 🎇 **Particle Background** — Interactive animated canvas with mouse tracking
- ⏳ **Loading Screen** — Cinematic boot-sequence loading animation with progress bar
- 🖱️ **Custom Cursor** — Cyan dot + trailing ring with hover glow & click effects
- 📜 **Animated Timeline** — Scroll-reveal experience & education cards
- 🧭 **Scroll Spy** — Active navigation link highlights as you scroll
- 🔼 **Scroll To Top** — Global floating button appears after scrolling past Hero
- 🃏 **Action Cards** — Clickable contact & social links (Mail Now, Call Now, etc.)
- 🎨 **Custom Scrollbar** — Cyan gradient scrollbar matching brand theme
- 📥 **CV Download** — One-click resume download from Hero section
- 📱 **Fully Responsive** — Mobile, tablet, and desktop optimized
- 🚀 **Performance** — Static generation, optimized images (`sizes` prop), fast load
- 🔍 **SEO Ready** — Full OpenGraph, Twitter card, keywords & metadata
- 🗃️ **Centralized Data** — Single `src/lib/data.ts` file as source of truth for all content

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16, React 19 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4, Custom CSS Animations |
| **Animation** | Framer Motion 12 |
| **Icons** | Lucide React |
| **Theming** | next-themes |
| **Typewriter** | react-simple-typewriter |
| **Package Manager** | pnpm |

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind v4 + custom animations + cyan scrollbar
│   ├── layout.tsx           # Root layout + full SEO metadata + theme
│   └── page.tsx             # Main page with LoadingScreen + CustomCursor
│
├── lib/
│   └── data.ts              # ⭐ Single source of truth — all portfolio content
│
├── components/
│   ├── Header.tsx           # Navbar with scroll spy + active link highlight
│   ├── Hero.tsx             # Hero section with floating image + badges
│   ├── About.tsx            # Personal info + action cards + skill categories
│   ├── ExperienceEducation.tsx  # Animated Timeline component
│   ├── Portfolio.tsx        # Project cards with image hover overlays
│   ├── Contact.tsx          # Contact form + color-coded info cards
│   ├── Footer.tsx           # 3-column centered footer with social links
│   ├── ParticleBackground.tsx   # Canvas particle animation
│   ├── LoadingScreen.tsx    # Boot sequence loader with progress bar
│   ├── ScrollToTop.tsx      # Floating global scroll-to-top button
│   └── CustomCursor.tsx     # Custom cursor — dot + trailing ring with lerp
│
public/
├── hero.png                 # Profile photo
├── favicon.svg              # Custom brand favicon (S with cyan glow)
├── Shubham_resume.pdf       # Downloadable CV
└── images/projects/         # Project screenshots
```

---

## ⭐ Data Architecture — `src/lib/data.ts`

All content is centralized. To update anything, **edit only `data.ts`**:

| Export | Used In | Description |
|--------|---------|-------------|
| `PERSONAL` | Hero, Footer, About, Contact | Name, email, phone, CV, bio |
| `SOCIALS` | Hero, Footer, About | GitHub, LinkedIn, Instagram URLs |
| `HERO_TITLES` | Hero | Typewriter animation words |
| `HERO_BADGES` | Hero | Floating stat badges |
| `SKILL_CATEGORIES` | About | Frontend, Backend, DB, Tools |
| `EXPERIENCES` | ExperienceEducation | Work history timeline |
| `EDUCATIONS` | ExperienceEducation | Education timeline |
| `PROJECTS` | Portfolio | Project cards |
| `CONTACT_INFO` | Contact | Contact info cards |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/thesundram/shubham-portfolio.git
cd shubham-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

---

## 📸 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Name gradient, typewriter title, floating image with glow rings + stat badges |
| **About** | Personal info rows + action cards (Mail, Call, GitHub, LinkedIn, Instagram) + skill pills |
| **Resume** | Animated scroll-reveal timeline for work experience & education |
| **Portfolio** | Project cards with image hover overlays, tech badges, and GitHub links |
| **Contact** | Contact form with success state + color-coded contact cards + social icons |
| **Footer** | 3-column centered footer with brand, contact info, and social icons |

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| **Primary Color** | `#06b6d4` (Cyan 500) |
| **Dark Background** | `#000000` (Pure Black) |
| **Light Background** | `#ffffff` |
| **Border Radius** | `rounded-2xl` / `rounded-3xl` |
| **Card Style** | Glassmorphism (`bg-white/5`, `backdrop-blur-md`) |
| **Animation** | Framer Motion with `whileInView` scroll reveal |
| **Cursor** | Custom dot + ring with lerp smoothing (12% easing) |
| **Scrollbar** | 8px cyan gradient thumb on dark track |

---

## 👨‍💻 Author

<div align="left">
  <p>
    © <b>2026</b> Designed &amp; Developed by <b>Sundram Pandey</b><br/>
    <b>Sundram InfoTech PVT. LTD</b>
  </p>
</div>

---

## 📄 License

> [!IMPORTANT]
> **Proprietary & Confidential**  
> This software is the sole property of **Sundram InfoTech PVT. LTD**  
> Unauthorized copying, distribution, or modification of this project is strictly prohibited.

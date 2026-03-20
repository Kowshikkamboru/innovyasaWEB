# 🚀 Innovyasa – IT & EdTech Platform (Next.js)

A full-featured, production-ready Next.js webapp built from the Innovyasa Figma designs.

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Orange | `#FF6B2B` |
| Navy Dark | `#0D1B3E` |
| Font Display | Sora (headings) |
| Font Body | DM Sans (body) |

---

## 📁 Project Structure

```
innovyasa/
├── app/
│   ├── page.tsx                  # Home Page
│   ├── about/page.tsx            # About Us
│   ├── courses/page.tsx          # Courses Catalog
│   ├── internships/page.tsx      # Internships
│   ├── devsol/page.tsx           # Digital Solutions
│   ├── community/page.tsx        # Community
│   ├── blogs/page.tsx            # Blogs
│   ├── contact/page.tsx          # Contact
│   ├── auth/
│   │   ├── login/page.tsx        # Login
│   │   └── signup/page.tsx       # Sign Up
│   ├── layout.tsx                # Root Layout
│   └── globals.css               # Global Styles
├── components/
│   ├── Navbar.tsx                # Sticky Animated Navbar
│   ├── Footer.tsx                # Full Footer with Newsletter
│   └── AnimationUtils.tsx        # Reusable Framer Motion helpers
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

---

## 🎬 Animations Included

- **Hero**: Parallax scroll, floating cards, orbiting icons, rotating rings
- **Navbar**: Slide-in from top, scroll-aware background blur
- **Sections**: Scroll-triggered `FadeIn` with direction variants
- **Cards**: `whileHover` lift + shadow glow
- **Companies Marquee**: Infinite bidirectional scroll (CSS + Framer Motion)
- **Counters**: Animated number counting on scroll-into-view
- **Stagger**: `StaggerContainer` / `StaggerItem` for grid reveals
- **Buttons**: Spring scale on hover/tap
- **Page Transitions**: Smooth `fadeInUp` on route change

---

## 📄 Pages Built

| Page | Route | Sections |
|------|-------|----------|
| Home | `/` | Hero, Why Innovyasa, Trending Courses, Companies Marquee, Testimonials, Contact Form |
| About | `/about` | Stats, Foundation of Excellence, Student Count, Team |
| Courses | `/courses` | Hero, Why Choose, Category Filter, Search, Course Grid |
| Internships | `/internships` | Hero, Why Choose, Job Listings, Step Guide, Perks, 90% Stats, Alumni |
| Devsol | `/devsol` | Hero, Services, Projects Portfolio, CTA |
| Community | `/community` | Hero, Events, Webinars, Recent Blogs, Social Follow |
| Blogs | `/blogs` | Featured Post, Other Posts, Recent, Popular, CTA |
| Contact | `/contact` | Hero, Contact Form, Info |
| Login | `/auth/login` | Auth Form |
| Signup | `/auth/signup` | Split-screen Auth |

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
open http://localhost:3000

# 4. Build for production
npm run build
npm start
```

---

## 📦 Dependencies

```json
{
  "next": "14.2.3",
  "react": "^18",
  "framer-motion": "^11",
  "lucide-react": "^0.383",
  "react-intersection-observer": "^9.10",
  "tailwindcss": "^3.4",
  "typescript": "^5"
}
```

---

## 🔧 Customization

### Colors (tailwind.config.ts)
```ts
primary: { DEFAULT: "#FF6B2B" }  // Change brand orange
navy:    { DEFAULT: "#0D1B3E" }  // Change dark navy
```

### Fonts (globals.css)
Replace `Sora` and `DM Sans` with any Google Fonts pair.

### Content
All course data, internship listings, testimonials, and company names are in their respective page files as TypeScript arrays — easy to replace with API data.

---

## 🌐 Deployment

```bash
# Vercel (recommended)
npx vercel

# Or connect GitHub repo to vercel.com for auto-deploys
```

---

Built with ❤️ from Innovyasa Figma Design

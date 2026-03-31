# Tree Service Template

A professional tree service and landscaping website template built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🎬 **Drone Video Hero Section** - Full-screen video background with entrance animations
- ✨ **Maximum Animations** - GSAP + Framer Motion for stunning effects
- 📱 **Responsive Design** - Mobile-first approach
- 🎨 **Customizable Template** - Easy to change business details
- 🚀 **Vercel Ready** - Deploy with one click
- 🎯 **SEO Optimized** - Meta tags and semantic HTML

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS + CSS Modules
- **Animations:** Framer Motion + GSAP
- **Deployment:** Vercel + GitHub
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/tree-service-template.git
cd tree-service-template
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Customization

### 1. Business Details

Edit `config/templateConfig.ts` to change:

```typescript
export const templateConfig = {
  business: {
    name: "Tree Service Pro",
    tagline: "Unbeatable Tree Removal & Landscaping Services",
    phone: "555-123-4567",
    email: "info@example.com",
    address: "New York, NY",
    yearsExperience: 20,
    serviceArea: "New York City and surrounding areas",
  },
  // ... other config
};
```

### 2. Services

Update the services array in `config/templateConfig.ts`:

```typescript
services: [
  {
    id: 1,
    title: "Tree Removal",
    description: "Safe removal of trees...",
    icon: "🌳",
    image: "/images/service-1.jpg",
  },
  // ... add more services
]
```

### 3. Colors

Change the color scheme in `config/templateConfig.ts`:

```typescript
colors: {
  primary: "#2E7D32",    // Forest green
  secondary: "#81C784",  // Light green
  accent: "#FF8F00",     // Amber
  dark: "#1B5E20",       // Dark green
}
```

### 4. Animations

Configure animations in `config/templateConfig.ts`:

```typescript
animation: {
  droneVideoSpeed: 1.5,
  particleCount: 50,
  parallaxIntensity: 0.3,
  enableParticles: true,
  enableGlitchEffect: true,
}
```

### 5. Video Background

Replace the placeholder video URL in `components/sections/HeroSection.tsx`:

```typescript
videoUrl="https://your-video-url.com/video.mp4"
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ServiceArea.tsx
│   │   ├── Testimonials.tsx
│   │   └── Footer.tsx
│   ├── ui/                 # Reusable UI components
│   └── effects/            # Animation components
├── config/
│   └── templateConfig.ts   # Template configuration
├── public/
│   ├── videos/             # Video files
│   └── images/             # Image files
└── tailwind.config.js      # Tailwind configuration
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Manual Deployment

```bash
npm run build
npm run start
```

## Customization Guide

### Changing Business Details
1. Edit `config/templateConfig.ts`
2. Update business information
3. Change colors and animations
4. Update service offerings

### Adding New Sections
1. Create new component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Add navigation link if needed

### Modifying Animations
1. Edit component animations in respective section files
2. Adjust timing in `config/templateConfig.ts`
3. Test on different devices

## Performance Optimization

- **Images:** Use Next.js Image component for optimization
- **Videos:** Use optimized video formats (MP4, WebM)
- **Fonts:** Use Next.js Font optimization
- **Code Splitting:** Dynamic imports for heavy components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This template is licensed for commercial use. You can use it for multiple client projects.

## Support

For support or customization requests, contact:
- Email: your-email@example.com
- Phone: your-phone-number

## Changelog

### Version 1.0.0 (Initial Release)
- Hero section with drone video
- Services section with 6 service cards
- Why Choose Us section with trust badges
- Service Area section
- Testimonials carousel
- Footer with contact information
- Maximum animations with GSAP + Framer Motion
- Responsive design
- Template configuration system
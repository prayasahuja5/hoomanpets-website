# Hooman Pets Website

A beautiful, production-ready marketing website for **Hooman Pets** - an AI-powered pet care platform with the tagline "Smarter Pet Parenting."

## 🐾 Brand Identity

- **Product**: Hooman Pets (by Hooman Inc)
- **Tagline**: "Smarter Pet Parenting."
- **Font**: Urbanist
- **Primary Color**: Orange (#E95744)
- **Background Color**: Beige (#F5EDE2)
- **Accent Color**: Teal (#32BBAA)
- **Tone**: Warm, caring, smart, playful

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom theme tokens
- **Animation**: Framer Motion
- **Font**: Urbanist (Google Fonts)
- **Language**: TypeScript
- **Development**: Hot reload, ESLint

## 📱 Features

### Homepage Sections
1. **HeroBanner** - Logo, tagline, primary CTA
2. **ProblemSection** - Storytelling about pet care overwhelm
3. **AIIntro** - Ezra AI introduction with sample insight UI
4. **FeatureBlocks** - Vet access, health plans, care reminders, community
5. **StickyShowcase** - Mobile app walkthrough
6. **Testimonials** - Pet parents and veterinarian quotes
7. **CTAFooter** - "Join the pack 🐾" with newsletter signup

### Design Features
- Responsive design (mobile-first)
- Smooth scroll animations with Framer Motion
- Custom Tailwind theme with brand colors
- Accessibility-focused semantic HTML
- Modern gradient backgrounds and hover effects
- Interactive UI elements with micro-animations

## 🛠 Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

```
hoomanpets-website/
├── app/
│   ├── components/
│   │   ├── HeroBanner.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── AIIntro.tsx
│   │   ├── FeatureBlocks.tsx
│   │   ├── StickyShowcase.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTAFooter.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── package.json
```

## 🎨 Design System

### Colors
- **hooman-orange**: #E95744 (Primary)
- **hooman-beige**: #F5EDE2 (Background)
- **hooman-teal**: #32BBAA (Accent)
- **hooman-black**: #000000 (Text)
- **hooman-white**: #ffffff (Contrast)

### Typography Classes
- `heading-1`: Large hero headings
- `heading-2`: Section headings
- `heading-3`: Subsection headings
- `body-large`: Large body text
- `body-medium`: Standard body text

### Button Classes
- `btn-primary`: Orange primary button
- `btn-secondary`: Teal secondary button

### Layout Classes
- `section-padding`: Consistent section spacing
- `container-max`: Max-width container
- Custom spacing utilities (18, 88, 128)

## 🎭 Animation Philosophy

Inspired by **Civilla.org** with:
- Soft fade-ins on scroll
- Sticky scroll transitions
- Cinematic pacing
- Subtle micro-interactions
- Floating elements
- Hover state transformations

## 📱 Responsive Design

- **Mobile**: Stack layout, touch-friendly buttons
- **Tablet**: 2-column layouts where appropriate
- **Desktop**: Full multi-column layouts
- **Large screens**: Max-width containers for readability

## 🚀 Deployment

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

### Lint code:
```bash
npm run lint
```

## 🐾 Brand Voice & Content

The website speaks to **pet parents** with a warm, caring, and intelligent tone. Content focuses on:

- Reducing pet parenting anxiety
- Empowering confident decision-making
- Highlighting AI-powered insights
- Building trust through veterinary backing
- Creating community connection

## 🔧 Customization

### Adding New Sections
1. Create component in `app/components/`
2. Import in `app/page.tsx`
3. Add to component sequence
4. Style with existing design system

### Modifying Brand Colors
Update `tailwind.config.js` in the `hooman` color palette:

```javascript
colors: {
  'hooman': {
    'orange': '#E95744',
    'beige': '#F5EDE2',
    'teal': '#32BBAA',
    // Add new colors here
  },
}
```

## 📄 License

© 2024 Hooman Inc. All rights reserved.

---

**Made with ❤️ for pet parents everywhere** 🐾 
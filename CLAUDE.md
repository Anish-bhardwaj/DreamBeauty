# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DreamBeauty - A Next.js 16 e-commerce website for premium beauty and skincare products. Uses React 19, React Bootstrap for UI, and axios for API calls.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Import Alias

Use `@/*` for imports from `src/` directory:
```javascript
import api from '@/services/api'
import { generateMetadata } from '@/lib/seo'
```

## Design System

### Color Palette

**Primary Colors:**
- `#E91E63` - Primary rose (buttons, CTAs, links, hover states)
- `#C2185B` - Darker rose (button hover)
- `#F48FB1` - Light pink (features bar)
- `#E91E63` to `#880E4F` - Rose gradient (custom orders banner)

**Accent Colors:**
- `#B76E79` - Rose gold (active nav links, highlights)
- `#FCE4EC` - Soft pink (award cards background)
- `#FFF5F7` - Blush white (navbar, sections background)
- `#F8BBD9` - Light rose (secondary accents)

**Neutrals:**
- `#333` - Primary text
- `#666`, `#555` - Secondary text
- `#888`, `#999` - Muted text
- `#fff` - White backgrounds

### Typography

CSS Variables defined in root layout:
- `--font-playfair` - Playfair Display (headings, titles) - serif, elegant
- `--font-poppins` - Poppins (body text, buttons) - sans-serif, weights 300-700

### Component Styling Conventions

- Section padding: `60px 0` desktop, `40px 0` tablet/mobile
- Border radius: `4px` buttons, `8px` cards, `12px` feature boxes
- Transitions: `0.3s ease` for hover effects
- Image hover: `transform: scale(1.05)`
- Responsive breakpoints: `991px` (tablet), `767px` (mobile)

## Architecture

### Directory Structure

- `src/app/` - Next.js App Router pages and components
- `src/app/_components/` - Shared homepage components (hero-slider, header, etc.)
- `src/app/_containers/` - Page-level container components with data
- `src/app/[route]/_components/` - Route-specific components
- `src/app/[route]/_containers/` - Route-specific containers
- `src/services/api.js` - Axios instance with auth interceptors
- `src/lib/seo.js` - SEO metadata and JSON-LD generators
- `public/` - Static assets (images, videos, manifest)

### Patterns

**Page Structure**: Each route follows this pattern:
- `page.js` - Entry point, renders container
- `layout.js` - Route layout wrapper
- `_containers/` - Business logic and data
- `_components/` - UI components

**Component Data Flow**: Homepage uses `list-container.js` which contains all mock data and composes child components. Data is passed via props.

**Styling**: Bootstrap 5 + custom CSS in `globals.css`. Two Google fonts: Playfair Display (headings) and Poppins (body).

**Images**: Use Next.js `Image` component. Remote images from Unsplash and Cloudinary are configured in `next.config.mjs`.

### Environment Variables

- `NEXT_PUBLIC_API_URL` - Backend API URL (default: http://localhost:8000/api)
- `NEXT_PUBLIC_SITE_URL` - Site URL for SEO metadata

### API Service

`src/services/api.js` provides an axios instance with:
- JWT token from localStorage attached to requests
- Auto-redirect to `/login` on 401 responses

### Forms

Forms use `react-hook-form` with `yup` for validation. Most components are client-side (`"use client"` directive).

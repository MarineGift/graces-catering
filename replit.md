# Overview

This is a modern full-stack web application for Grace's Catering, a premium catering service business. The application features a professional landing page with service showcases, interactive menu section with filtering, image galleries, contact forms, and admin functionality for managing contact submissions. Built with a React frontend and Express backend, it emphasizes elegant design and smooth user interactions to reflect the luxury catering brand.

## Recent Changes (October 3, 2025)

### Delivery & Setup Image Restoration
- **Original Image Restored**: Brought back the original Delivery & Setup image with colorful logo
  - Shows white catering van with "Delivery & Setup" logo featuring orange/golden/blue/red colors
  - Professional staff in black aprons setting up catering equipment
  - React app: attached_assets/stock_images/delivery-setup-new.jpg
  - Static HTML: docs/assets/images/services/delivery.jpg
  - Updated in Services section card and Hero carousel 6th slide
- **E2E Testing**: Image loading verified in both Services section and carousel
- **Synchronized deployment**: Both React app and static HTML updated, image uploaded to GitHub

### Previous: Email Address Update & Hero Section Simplification
- **Email Address Corrected**: Updated contact email from graceswilm@gmail.com to graceswlim@gmail.com
  - React app: contact-section.tsx, footer.tsx
  - Static HTML: docs/index.html (3 locations)
  - Backend: server/routes.ts (email sending configuration)
- **Hero Section Simplified**: Removed long paragraph text from hero section
  - Removed: "Elevate your events with our premium catering services. From intimate gatherings to corporate celebrations, we create culinary experiences that leave lasting impressions."
  - Kept: Title "Exceptional Catering / Unforgettable Experiences" and action buttons
  - Applied to both React app (hero-section.tsx) and Static HTML (docs/index.html)
- **E2E Testing**: All changes verified with Playwright (email display, hero text removal)
- **Synchronized deployment**: Both React app and static HTML updated, changes uploaded to GitHub

### Previous: MEAT Menu Restoration & About Section Mobile Layout Fix
- **MEAT Menu Category Restored**: Re-added MEAT category with 3 Korean specialty items
  - React app (menu-section.tsx): Added Galbi, Bulgogi, Korean Style Chicken
  - Static HTML (docs/index.html): Same 3 MEAT items with descriptions
  - Menu categories now: All Items, MEAT, SEAFOOD, VEGETABLE, SALAD (5 categories)
  - Total menu items: 24 (3 MEAT + 6 SEAFOOD + 10 VEGETABLE + 5 SALAD)
  - Images: /assets/images/menu/korean-specialties/
- **MEAT Menu Images Updated**: Replaced with high-quality professional food photography
  - Galbi: Grilled beef short ribs with char marks (10.4KB)
  - Bulgogi: Marinated beef in dark bowl with green onions and sesame seeds (965KB)
  - Korean Style Chicken: Glazed fried chicken with sesame seeds and herbs (539KB)
  - React: client/public/assets/images/menu/korean-specialties/
  - Static HTML: docs/assets/images/menu/korean-specialties/
- **About Section Mobile Layout Fixed**: Improved responsive design for smartphone viewing
  - React: Changed to `flex flex-col lg:grid lg:grid-cols-2` for proper mobile stacking
  - Mobile (<1024px): Vertical layout with image on top, text below
  - Desktop (≥1024px): 2-column grid with image left, text right
  - Static HTML: Added `.about-layout` CSS class with media query for responsive behavior
- **E2E Testing**: All changes verified with Playwright tests (menu filtering, mobile/desktop layouts, image loading)
- **Synchronized deployment**: Both React app and static HTML updated, all images uploaded to GitHub

### Previous: Complete Gallery Section Removal & About Image Update
- **Gallery Section Completely Removed**: Eliminated "Our Culinary Artistry" gallery section
  - Removed from React app (client/src/pages/home.tsx)
  - Removed from Static HTML (docs/index.html)
  - Removed all Gallery CSS styles and JavaScript interactions
  - Navigation updated: Gallery link removed from main nav, mobile menu, and footer
  - Hero section button changed from "View Our Work" to "View Our Menu" (links to menu section)
  - Footer Quick Links: Gallery replaced with Menu link
- **About Section Image Update**: Changed to professional kitchen/restaurant image
  - React: Gracescatering6_1759503549279.png (busy kitchen with food preparation)
  - Static HTML: kitchen-service.jpg
  - Shows professional catering kitchen with plating and food service
  - Replaced previous cooking hands image
- **Navigation Structure**: Now shows Home, Services, Menu, About, Reviews, Contact Us (6 items)
- **Synchronized deployment**: Both React app and static HTML updated, all changes uploaded to GitHub

### Previous Updates - Carousel, Images, and Contact Information
- **Hero Carousel Expansion**: Expanded from 3 to 6 slides using Services section images with manual navigation
  - 6 carousel slides: Corporate Events, Wedding Celebrations, Private Events, Specialty Cuisine, Event Planning, Delivery & Setup
  - Added left/right navigation arrow buttons with hover effects
  - 6 carousel dots for manual slide selection
  - Images sourced from Services section for consistency
- **Email Address Update**: Changed contact email from gracesvilmt@gmail.com to graceswilm@gmail.com
  - Updated across all components (Contact section, Footer, server routes)
  - Email notifications now sent to graceswilm@gmail.com

## Previous Updates (October 2, 2025)

### Image Updates - Professional Catering Photography
- **Hero Carousel Overlay Removed**: Eliminated pink filter overlay for brighter, clearer carousel images
- **About Section**: Updated chef image to professional chef photo (image_1759420448803.png) showing chef in professional kitchen setting
- **Services Section Refresh**: Replaced all 6 service images with premium catering photography:
  - Corporate Events: Corporate catering buffet with professionals (Corporate Events_1759466156530.png)
  - Wedding Celebrations: Elegant wedding cake with buffet display (Wedding Celebrations_1759466156530.png)
  - Private Events: Celebration with chef and guests toasting (Private Events_1759466156529.png)
  - Specialty Cuisine: Premium sushi and sashimi platter (Specialty Cuisine_1759466156532.png)
  - Event Planning: Professional event planning consultation (Event Planning_1759466156531.png)
  - Delivery & Setup: Catering van with outdoor setup (Delivery & Setup_1759466156531.png)
- **Image height**: 256px (h-64) maintained for consistent visual impact
- **Synchronized deployment**: Both React app and static HTML updated, images uploaded to GitHub

### Menu Section with Descriptions
- **Comprehensive menu section** with 21 food items organized into 3 categories:
  - SEAFOOD (6 items): Cocktail Shrimp, Shrimp with Garlic Butter, Teriyaki Salmon, Smoked Salmon with Cream Cheese, Buttered Cod, Honey Glazed Cod
  - VEGETABLE (10 items): Stir Fried Mushrooms, Spicy Green Bean, Stir-fry Bok Choy, California Roll, Steamed Rice, Fried Rice, Lo Mein, Buckwheat Cold Noodles with Vegetable, Steamed or Fried Mandu, Vegetable Eggrolls
  - SALAD (5 items): Garden Salad, Chicken Salad, Tuna Salad, Egg Salad, Fruits & Cheese
- **Detailed English descriptions** added to all 25 menu items explaining ingredients and preparation methods
- **Description styling** with 3-line text clamp, gray color (#666), left-aligned for readability
- **Interactive category filtering** with smooth animations and active state indicators
- **Responsive grid layout** using CSS Grid with auto-fit and minmax for mobile optimization
- **Menu navigation link** added to main navigation bar
- **All menu images** uploaded to GitHub at `docs/assets/images/menu/` organized by category folders
- **Synchronized codebases**: Both React (client/src/) and static HTML (docs/) maintain identical menu content
- **Deployed to production** at https://www.gracescatering.com

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React SPA**: Single-page application using React with functional components and hooks
- **Routing**: Client-side routing implemented with Wouter for lightweight navigation
- **UI Framework**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom luxury-themed color palette and typography (Playfair Display for headings, Inter for body text)
- **State Management**: React Query (TanStack Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Build System**: Vite for fast development and optimized production builds

## Backend Architecture
- **Express Server**: RESTful API server with middleware for JSON parsing and request logging
- **Storage Layer**: Abstracted storage interface with in-memory implementation (ready for database integration)
- **API Design**: Clean REST endpoints for contact form submissions and admin data retrieval
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Development Tools**: Hot module replacement and development server integration

## Data Storage Solutions
- **Current**: In-memory storage using Map data structures for development
- **Schema**: Drizzle ORM with PostgreSQL schema definitions for users and contact submissions
- **Migration Ready**: Drizzle configuration set up for easy transition to PostgreSQL database
- **Type Safety**: Full TypeScript types generated from database schema using Drizzle-Zod

## Design System
- **Component Architecture**: Modular, reusable UI components with consistent styling
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Animation System**: CSS transitions and intersection observer for scroll-triggered animations
- **Image Handling**: Carousel components with auto-play and manual navigation
- **Accessibility**: Radix UI primitives ensure WCAG compliance and keyboard navigation

## Email Integration
- **Contact Processing**: Form submissions trigger email notifications to business owners
- **Error Resilience**: Email failures don't prevent form submission storage
- **Nodemailer**: Ready for SMTP configuration (credentials needed for production)

# External Dependencies

## Core Framework Dependencies
- **React 18**: Frontend framework with modern hooks and concurrent features
- **Express**: Node.js web framework for API server
- **TypeScript**: Type safety across frontend and backend
- **Vite**: Modern build tool with fast HMR and optimized bundling

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with custom theme configuration
- **Radix UI**: Headless component primitives for accessibility and customization
- **Shadcn/ui**: Pre-built component library built on Radix UI
- **Lucide React**: Icon library for consistent iconography

## Data and State Management
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form handling with validation
- **Zod**: Runtime type validation and schema definition
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL support

## Database and Storage
- **PostgreSQL**: Production database (configured via Neon serverless)
- **Drizzle Kit**: Database migration and introspection tools
- **Connect PG Simple**: Session store for PostgreSQL (if sessions are implemented)

## Development Tools
- **Replit Integration**: Development environment optimizations and error overlays
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **TSX**: TypeScript execution for development server

## Communication
- **Nodemailer**: Email sending capability for contact form notifications
- **Date-fns**: Date manipulation and formatting utilities

## Production Considerations
- **Environment Variables**: DATABASE_URL required for PostgreSQL connection
- **Static Assets**: Vite builds optimized static files for production deployment
- **Error Boundaries**: Comprehensive error handling for production stability
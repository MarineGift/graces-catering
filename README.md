# Grace's Catering - Premium Catering Website & Mobile App

A modern, luxury catering website with Progressive Web App (PWA) capabilities for Grace's Catering in Warrenton, VA. Built with React, TypeScript, and Express.js.

## 🌟 Features

### 🎨 Premium Design
- Luxury color scheme with gold accents and elegant typography
- Responsive design optimized for all devices
- Smooth animations and premium visual effects
- Professional image galleries showcasing culinary artistry

### 📱 Mobile App Experience
- **Progressive Web App (PWA)** - Install on Android and iOS devices
- Native app-like experience with offline capabilities
- Touch-optimized interface with gesture support
- Safe area support for modern mobile devices

### 🍽️ Core Functionality
- **Services Showcase**: Wedding, corporate, and private event catering
- **Interactive Gallery**: High-quality food photography carousel
- **Contact System**: Form with email notifications to gracesvilmt@gmail.com
- **Customer Testimonials**: Social proof section
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards

## 🚀 Quick Start

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build
```bash
# Build for production
npm run build

# Start production server  
npm start
```

## 📱 Mobile App Installation

### For Users:
1. Visit the website on your mobile device
2. Look for the "Install App" button (appears on supported browsers)
3. Tap "Install" to add Grace's Catering app to your home screen
4. Launch the app like any native mobile app

### PWA Features:
- **Offline Access**: View basic content without internet
- **Home Screen Installation**: Behaves like a native app
- **Fast Loading**: Cached resources for quick startup
- **App-like Navigation**: Fullscreen experience without browser UI

## 🌐 GitHub Deployment

### Automatic Deployment
This repository includes GitHub Actions for automatic deployment to GitHub Pages:

1. **Push to Main Branch**: Automatic deployment triggers
2. **Manual Deployment**: Use "Actions" tab → "Deploy Grace's Catering" → "Run workflow"

### Setup Instructions for GitHub Pages:

1. **Fork/Clone this repository**
2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"
   - Save settings

3. **Environment Variables** (Optional):
   - Add `VITE_EMAIL_SERVICE_ID` for contact form
   - Add other environment variables as needed

4. **Custom Domain** (Optional):
   - Add CNAME file with your domain
   - Configure DNS settings

### Deployment Process:
```bash
# The GitHub Action automatically:
1. Installs dependencies
2. Builds the React application  
3. Copies PWA files (manifest, service worker, icons)
4. Deploys to GitHub Pages
```

## 🛠️ Technical Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Shadcn/ui** component library
- **TanStack Query** for state management
- **React Hook Form + Zod** for forms

### Backend  
- **Express.js** server
- **Nodemailer** for email functionality
- **In-memory storage** (ready for database integration)

### PWA Technologies
- **Service Worker** for offline capabilities
- **Web App Manifest** for installation
- **Responsive Design** for mobile optimization

## 📧 Email Configuration

The contact form sends emails to `gracesvilmt@gmail.com`. To configure email service:

1. Set up SMTP credentials in environment variables
2. Update server configuration for production deployment
3. Test email functionality before going live

## 🎯 SEO & Performance

### SEO Features:
- Semantic HTML structure
- Meta descriptions and titles
- Open Graph social media tags
- JSON-LD structured data
- XML sitemap ready

### Performance Optimizations:
- Image lazy loading
- Code splitting and tree shaking
- Cached static assets
- Optimized font loading

## 📱 Mobile Optimization

### Touch & Gestures:
- 44px minimum touch targets
- Touch action optimization
- Gesture-friendly navigation
- Swipe gestures for galleries

### Device Support:
- iOS Safari and Chrome
- Android Chrome and Samsung Internet
- Safe area insets for notched devices
- Responsive breakpoints for all screen sizes

## 🚀 Deployment Options

### GitHub Pages (Recommended)
- Free static hosting
- Automatic SSL certificates  
- Custom domain support
- Integrated with repository

### Alternative Hosting:
- **Netlify**: Drag & drop deployment
- **Vercel**: Git-integrated deployment
- **Firebase Hosting**: Google's platform
- **Surge.sh**: Simple static hosting

## 📞 Contact Information

**Grace's Catering**
- 📧 Email: gracesvilmt@gmail.com
- 📱 Phone: [Contact through website form]
- 📍 Location: Warrenton, Virginia

## 🤝 Support

For technical support or customization:
1. Check the GitHub Issues section
2. Review the documentation
3. Contact through the website form

---

**Built with ❤️ for Grace's Catering - Exceptional culinary experiences for unforgettable events.**
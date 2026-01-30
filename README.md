# 📸 Half Raw Motion - Photography Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-DD4B39?style=for-the-badge&logo=gmail&logoColor=white)

A modern, minimalist photography portfolio showcasing raw, intense, and unfiltered boxing photography and cinematic portraits.

[Features](#-features) • [Technologies](#-technologies) • [Installation](#-installation) • [Demo](#-demo) • [Contact](#-contact)

</div>

---

## 🎯 About

**Half Raw Motion** is a premium photography portfolio built to capture the essence of raw emotion and intensity in motion. Specializing in boxing photography and cinematic portraits, this portfolio showcases work that lives in the intersection of sports photography and artistic portraiture.

The platform is designed with a focus on:
- 🖤 **Minimalist Aesthetics** - Clean, dark design that puts the photography first
- ⚡ **Performance** - Lightning-fast load times with optimized images
- 📱 **Responsiveness** - Seamless experience across all devices
- 🎨 **User Experience** - Intuitive navigation and smooth animations

---

## ✨ Features

### 🎬 Dynamic Portfolio Gallery
- **Smart Pagination System**
  - 12 images per page for optimal loading
  - Separate pagination for Boxing (59 images) and Portraits (23 images)
  - Smooth page transitions with animated controls
  - Reset to page 1 when switching categories

- **Advanced Lightbox Viewer**
  - Full-screen image viewing experience
  - Keyboard navigation (Arrow keys, Escape)
  - Click navigation with Previous/Next buttons
  - Image counter showing current position
  - Dynamic image captions with titles
  - Smooth animations and transitions

### 🎨 Modern User Interface
- **Responsive Design**
  - Mobile-first approach
  - Breakpoints for mobile, tablet, and desktop
  - Touch-friendly interactions
  - Adaptive typography and spacing

- **Smooth Animations**
  - Page transitions with Framer Motion
  - Scroll-triggered animations
  - Hover effects on images
  - Loading state animations

### 📄 Content Pages
- **Home Page**
  - Full-screen hero section with background image
  - Animated headline and call-to-action
  - Scroll indicator animation
  - Direct links to Portfolio and Contact

- **Portfolio Page**
  - Category tabs (Boxing & Portraits)
  - Masonry grid layout
  - Image hover effects with titles
  - Paginated image display

- **About Page**
  - Professional photography biography
  - Philosophy section
  - Statistics showcase (Years, Sessions, Athletes)
  - Behind-the-scenes image

- **Contact Page**
  - Contact information display
  - Working contact form with validation
  - Social media links
  - Email and location details

### 🔧 Technical Features
- **React Router Integration**
  - Client-side routing for seamless navigation
  - Dynamic page titles
  - Active navigation state
  - URL-based navigation

- **State Management**
  - React Hooks (useState, useEffect)
  - Context-free architecture
  - Optimized re-renders

- **Performance Optimization**
  - Lazy loading ready
  - Image optimization
  - Code splitting capabilities
  - Minimal bundle size

---

## 🛠 Technologies

### Core Technologies
- **[React 18.3.1](https://react.dev/)** - Modern UI library for building component-based interfaces
- **[Vite 5.4.2](https://vitejs.dev/)** - Next-generation frontend tooling for blazing-fast development
- **[React Router DOM 6.26.2](https://reactrouter.com/)** - Client-side routing for single-page applications

### Styling & Animation
- **[Tailwind CSS 3.4.1](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development
- **[Framer Motion 11.5.4](https://www.framer.com/motion/)** - Production-ready animation library for React
- **[PostCSS 8.4.35](https://postcss.org/)** - Tool for transforming CSS with JavaScript plugins
- **[Autoprefixer 10.4.17](https://github.com/postcss/autoprefixer)** - Automatic vendor prefixing for CSS

### UI Components & Icons
- **[Lucide React 0.446.0](https://lucide.dev/)** - Beautiful & consistent icon toolkit
- **Custom Components** - Handcrafted UI elements (Input, Textarea, Button)

### Development Tools
- **[@vitejs/plugin-react 4.3.1](https://github.com/vitejs/vite-plugin-react)** - Official React plugin for Vite
- **[ESLint](https://eslint.org/)** - JavaScript linting for code quality
- **Path Aliases (@/)** - Clean import statements with absolute paths

### Design Patterns & Architecture
- **Component-Based Architecture** - Reusable and maintainable components
- **Custom Hooks** - Encapsulated logic for stateful operations
- **Separation of Concerns** - Clear distinction between UI, logic, and data
- **Mobile-First Design** - Responsive from the smallest to largest screens

### Integration & APIs
- **[EmailJS](https://www.emailjs.com/)** - Serverless email automation service
- **Google Apps Script** - Cloud-based backend for Google Sheets database
- **RESTful API** - HTTP requests for data transmission
- **Environment Variables** - Secure credential management
- **LocalStorage API** - Browser-based data persistence

---

## 📋 Project Structure
```
photography-website/
├── public/                    # Static assets
├── src/
│   ├── components/           # React components
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── button.jsx
│   │   │   ├── input.jsx
│   │   │   └── textarea.jsx
│   │   ├── home/            # Home page components
│   │   │   └── Hero.jsx
│   │   ├── portfolio/       # Portfolio components
│   │   │   ├── PortfolioGrid.jsx
│   │   │   └── Lightbox.jsx
│   │   ├── contact/         # Contact components
│   │   │   └── ContactForm.jsx
│   │   └── Layout.jsx       # Main layout wrapper
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── Portfolio.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── utils/               # Utility functions
│   │   └── index.js
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── .gitignore               # Git ignore rules
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── README.md                # Documentation
```

---

## 💻 System Requirements

- **Node.js**: 16.0 or higher
- **npm**: 8.0 or higher (or yarn/pnpm)
- **Modern Browser**: Chrome, Firefox, Safari, Edge (latest versions)

---

## 🚀 Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/YOUR-USERNAME/photography-website.git
cd photography-website
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install:
- React and React DOM
- Vite and build tools
- Tailwind CSS and plugins
- Framer Motion
- Lucide React icons
- React Router DOM

### Step 3: Configure Environment (Optional)

If you need environment variables, create a `.env` file:
```env
VITE_APP_TITLE=Half Raw Motion
VITE_API_URL=your_api_url_here
```

### Step 4: Start Development Server
```bash
npm run dev
```

The application will open at **http://localhost:5173/**

### Step 5: Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Step 6: Preview Production Build
```bash
npm run preview
```

---

## 📦 Available Scripts
```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code (if configured)
npm run lint
```

---

## 🎨 Color Palette
```css
/* Primary Background */
--color-primary-bg: #050505      /* Deep Black */
--color-secondary-bg: #0a0a0a    /* Slightly Lighter Black */

/* Text Colors */
--color-text-primary: #ffffff    /* White */
--color-text-secondary: rgba(255, 255, 255, 0.6)  /* White 60% */
--color-text-muted: rgba(255, 255, 255, 0.3)      /* White 30% */

/* Accents */
--color-border: rgba(255, 255, 255, 0.1)  /* White 10% */
--color-hover: rgba(255, 255, 255, 0.05)  /* White 5% */
```

---

## 📸 Portfolio Sections

### Boxing Photography (59 Images)
Capturing the raw intensity, power, and emotion of boxing through dynamic action shots and intimate training moments.

**Themes:**
- Fight night action
- Training sessions
- Behind-the-scenes
- Victory moments
- Pre-fight preparation

### Cinematic Portraits (23 Images)
Artful portrait photography that tells stories through lighting, composition, and genuine emotion.

**Themes:**
- Dramatic lighting
- Environmental portraits
- Character studies
- Candid moments
- Architectural backgrounds

---

## 🎯 Key Features Breakdown

### 📧 Professional Contact Form (Added after "Additional Features")
- **Real-Time Email Notifications**
  - Automated emails via EmailJS
  - Professional HTML email templates
  - Direct reply-to capability
  - Mobile-responsive email design

- **Google Sheets Database**
  - Automatic data logging
  - No backend server required
  - Easy to export and analyze
  - Real-time updates

- **Triple-Layer Persistence**
  - EmailJS for notifications
  - Google Sheets for database
  - LocalStorage for backup

- **Advanced Form Features**
  - Real-time validation
  - Loading states
  - Success/error messaging
  - Spam protection ready

### Pagination System
```javascript
// 12 images per page
const imagesPerPage = 12;

// Calculate total pages
const totalPages = Math.ceil(portfolioImages.length / imagesPerPage);

// Boxing: 59 images = 5 pages
// Portraits: 23 images = 2 pages
```

**Features:**
- Previous/Next buttons with disabled states
- Clickable page numbers
- Active page indicator
- Resets to page 1 when switching categories
- Smooth transitions between pages

### Lightbox Navigation
```javascript
// Keyboard shortcuts
- ESC: Close lightbox
- Arrow Left: Previous image
- Arrow Right: Next image

// Mouse/Touch
- Click outside: Close lightbox
- Click arrows: Navigate images
- Swipe: Navigate on mobile (if implemented)
```

---

## 📧 Advanced Contact Form Integration

### Real-World Email & Database Integration

The contact form demonstrates professional API integration skills with a complete backend workflow:

**Technologies & Services:**
- **[EmailJS](https://www.emailjs.com/)** - Email automation service
- **Google Sheets API** - Cloud database storage via Apps Script
- **LocalStorage** - Client-side backup
- **React State Management** - Form handling and validation

### Contact Form Features

#### 🔄 Triple-Layer Data Persistence
```javascript
// 1. Local Storage Backup
localStorage.setItem('booking', JSON.stringify(formData));

// 2. EmailJS Integration
await emailjs.send(
  process.env.VITE_EMAILJS_SERVICE_ID,
  process.env.VITE_EMAILJS_TEMPLATE_ID,
  templateParams,
  process.env.VITE_EMAILJS_PUBLIC_KEY
);

// 3. Google Sheets Database
await fetch(process.env.VITE_GOOGLE_SHEETS_URL, {
  method: 'POST',
  body: JSON.stringify(formData)
});
```

#### ✅ What Happens When You Submit

1. **Form Validation** - Client-side validation ensures data quality
2. **Loading State** - Professional loading indicators during submission
3. **Email Notification** - Automatic email sent to admin inbox
4. **Database Storage** - Data saved to Google Sheets for record-keeping
5. **Local Backup** - Form data cached in browser storage
6. **Success Feedback** - User receives confirmation message
7. **Error Handling** - Graceful fallback if any service fails

#### 📨 Email Integration Architecture

**EmailJS Setup:**
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Professional Email Template:**
- HTML formatted emails with custom styling
- Dynamic data insertion from form fields
- Branded header and footer
- Direct reply-to capability
- Mobile-responsive design

**Email Contains:**
- Customer name and contact details
- Email and WhatsApp preferences
- Arrival and departure dates
- Special requests/comments
- Unique booking ID
- Timestamp of submission

#### 📊 Google Sheets Database

**Apps Script Integration:**
```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  const rowData = [
    data.booking_id,
    data.timestamp,
    data.fullname,
    data.email,
    data.phone,
    data.arrival_date,
    data.departure_date,
    data.description,
    'New'
  ];
  
  sheet.appendRow(rowData);
  return ContentService.createTextOutput(
    JSON.stringify({ result: 'success' })
  );
}
```

**Spreadsheet Structure:**
| Booking ID | Timestamp | Name | Email | Phone | Arrival | Departure | Description | Status |
|------------|-----------|------|-------|-------|---------|-----------|-------------|--------|
| 123456789  | 2026-01-28 | John | john@... | +123... | 2026-02-01 | 2026-02-05 | First timer | New |

#### 🔐 Security & Best Practices

**Environment Variables:**
```javascript
// All API keys stored securely in .env
const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};
```

**Data Validation:**
- Email format verification
- Phone number sanitization
- Required field enforcement
- XSS prevention with input sanitization
- CORS handling for API requests

**Error Handling:**
```javascript
try {
  // Primary: EmailJS
  await sendEmail(formData);
  
  // Secondary: Google Sheets
  await saveToSheets(formData);
  
  // Fallback: LocalStorage
  saveToLocal(formData);
  
} catch (error) {
  // Graceful degradation
  console.error('Error:', error);
  showUserFriendlyMessage();
}
```

#### 📱 Form User Experience

**Real-time Validation:**
- Email format checking as user types
- Phone number formatting
- Date range validation
- Character count for text areas

**Loading States:**
```javascript
{isSubmitting ? (
  <span className="flex items-center gap-3">
    <div className="w-4 h-4 border border-black/30 border-t-black 
                    rounded-full animate-spin" />
    Sending...
  </span>
) : (
  'Send Message'
)}
```

**Success Indicators:**
```javascript
✓ Saved locally
✓ Email sent  
✓ Saved to database

"Thank you! Your message has been sent successfully."
```

#### 🎯 Why This Implementation?

**Professional Grade:**
- Production-ready error handling
- Multiple redundancy layers
- Professional email templates
- Scalable database solution

**No Backend Required:**
- Serverless architecture
- Zero hosting costs
- Instant deployment
- High availability

**Data Reliability:**
- 3-tier data persistence
- No data loss
- Easy to export/backup
- Admin dashboard (Google Sheets)

#### 🔧 Technical Implementation Files
```
src/
├── components/
│   └── contact/
│       └── ContactForm.jsx       # Main form component
├── .env                           # API credentials
└── README.md                      # This documentation
```

**Key Dependencies:**
```json
{
  "@emailjs/browser": "^4.3.3",
  "lucide-react": "^0.446.0",
  "react": "^18.3.1"
}
```

#### 📖 Setup Documentation

Complete setup guides included in project:
- **`EMAILJS_SETUP_GUIDE.md`** - Detailed EmailJS configuration
- **`GOOGLE_SHEETS_VISUAL_GUIDE.md`** - Step-by-step Google Sheets setup
- **`QUICK_SETUP_CHECKLIST.md`** - Quick reference checklist

#### 🎓 Skills Demonstrated

This contact form implementation showcases:

✅ **API Integration** - Third-party service integration (EmailJS)  
✅ **Cloud Services** - Google Apps Script deployment and configuration  
✅ **Data Management** - Multi-layer data persistence strategy  
✅ **Error Handling** - Graceful degradation and user feedback  
✅ **Security** - Environment variables and input sanitization  
✅ **UX Design** - Loading states, validation, and success messaging  
✅ **DevOps** - Configuration management and deployment  
✅ **Documentation** - Comprehensive setup guides for other developers  

#### 🚀 Live Demo Workflow

1. **User fills form** → Data validated in real-time
2. **Submits form** → Loading indicator appears
3. **EmailJS triggered** → Admin receives formatted email
4. **Google Sheets updated** → New row added automatically
5. **LocalStorage backup** → Data cached in browser
6. **Success message** → User receives confirmation
7. **Admin response** → Reply directly from email

### 🌐 API Integration & Backend Skills
- **Third-party API Integration** - EmailJS service configuration
- **Serverless Architecture** - Google Apps Script deployment
- **RESTful APIs** - HTTP POST requests and response handling
- **Data Persistence** - Multi-layer storage strategy
- **Error Handling** - Try-catch blocks and graceful degradation
- **Security** - Environment variable management
- **Asynchronous JavaScript** - Async/await patterns
- **Cross-Origin Resource Sharing (CORS)** - CORS configuration and handling

#### 💡 Future Enhancements

Potential expansions for the contact system:
- [ ] SMS notifications via Twilio
- [ ] Slack webhook integration
- [ ] Auto-response emails to customers
- [ ] Google Calendar integration
- [ ] CRM system integration
- [ ] Analytics dashboard
- [ ] File upload capability
- [ ] Multi-language support

---

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📱 Responsive Breakpoints
```javascript
// Tailwind CSS breakpoints
sm:  640px   // Small devices
md:  768px   // Tablets
lg:  1024px  // Laptops
xl:  1280px  // Desktops
2xl: 1536px  // Large screens
```

---

## 🔧 Customization

### Change Images Per Page

In `src/components/portfolio/PortfolioGrid.jsx`:
```javascript
const imagesPerPage = 12; // Change to 6, 9, 15, etc.
```

### Add New Portfolio Section
```javascript
const portfolioSections = {
  boxing: [...],
  portraits: [...],
  newSection: [  // Add your new section
    { url: 'image-url', title: 'Image Title', aspect: 'tall' }
  ]
};
```

### Modify Colors

In `src/index.css` or Tailwind config:
```css
/* Change background colors */
.bg-\[\#050505\] { background-color: your-color; }
```

---

## 🚢 Deployment

### Deploy to Netlify
```bash
# Build the project
npm run build

# Deploy dist folder to Netlify
# Or connect your GitHub repo for automatic deployments
```

**Netlify Configuration** (`netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

---

## 🐛 Troubleshooting

### Common Issues

**Issue**: Images not loading
```bash
# Check internet connection (images hosted on Supabase)
# Verify image URLs in PortfolioGrid.jsx
```

**Issue**: Styles not applying
```bash
# Make sure Tailwind CSS is properly configured
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Issue**: Routing not working in production
```bash
# Add redirect rules for your hosting platform
# For Netlify: Add _redirects file
# For Vercel: Add vercel.json configuration
```

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/AmazingFeature`
3. **Commit changes**: `git commit -m 'Add AmazingFeature'`
4. **Push to branch**: `git push origin feature/AmazingFeature`
5. **Open a Pull Request**

### Contribution Guidelines

- Follow React best practices
- Maintain consistent code style
- Test on multiple devices
- Update documentation
- Write clear commit messages

---

## 📝 Future Enhancements

- [ ] **Backend Integration** - Connect to CMS for dynamic content
- [ ] **Image Optimization** - Add lazy loading and WebP support
- [ ] **Blog Section** - Share photography insights and stories
- [ ] **Admin Dashboard** - Manage portfolio images
- [ ] **Video Gallery** - Add video content support
- [ ] **Client Testimonials** - Showcase client feedback
- [ ] **Booking System** - Integrate photography session booking
- [ ] **Dark/Light Mode Toggle** - Theme customization
- [ ] **Multi-language Support** - Internationalization
- [ ] **SEO Optimization** - Meta tags and structured data
- [ ] **Analytics Integration** - Track visitor behavior
- [] **Performance Monitoring** - Real-time performance metrics
- [ ] **PWA Features** - Offline support and install prompt
- [ ] **Image Download** - Allow high-res image downloads
- [ ] **Social Sharing** - Share individual photos

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Driz - Half Raw Motion**

- 📧 Email: hello@halfrawmotion.com
- 📸 Instagram: [@half_raw_motion](https://www.instagram.com/half_raw_motion/)
- 📘 Facebook: [@photohrm](https://www.facebook.com/photohrm/)
- 🌍 Based in: Montreal, QC, Canada

---

## 🙏 Acknowledgments

- **React Team** for the amazing library
- **Vite Team** for blazing-fast build tools
- **Tailwind Labs** for the utility-first CSS framework
- **Framer** for the smooth animation library
- **Lucide** for the beautiful icon set
- **Photography Community** for inspiration and support
- **Open Source Contributors** for making these tools possible

---

## 📞 Support

Need help or have questions?

- 📧 **Email**: hello@halfrawmotion.com
- 💬 **Create an Issue**: [GitHub Issues](https://github.com/YOUR-USERNAME/photography-website/issues)
- 📱 **Social Media**: Reach out on Instagram or Facebook

---

## ⭐ Show Your Support

If you like this project, please consider:

- ⭐ **Starring the repository**
- 🔄 **Forking and building your own version**
- 📢 **Sharing with other photographers**
- 🐛 **Reporting bugs or suggesting features**
- ☕ **Buying me a coffee** (if you're feeling generous!)

---

<div align="center">

**Capturing raw emotion, one frame at a time**

**Built with ❤️ and React**

[⬆ Back to Top](#-half-raw-motion---photography-portfolio)

---

**© 2026 Half Raw Motion. All rights reserved.**

</div>

# Dr Daniel Schmuckler - Anaesthetist Website

A modern, responsive website for Dr Daniel Schmuckler, a consultant anaesthetist specializing in neuro-anaesthesia in Johannesburg, South Africa.

## 🏥 About

This website provides comprehensive information about anaesthetic services, patient care, and educational resources. Built with a focus on accessibility, POPIA compliance, and patient-centered design.

## ✨ Features

### 🎯 Core Pages
- **Home** - Hero section with services overview and trust indicators
- **About** - Professional background, credentials, and values
- **Services** - Detailed service descriptions (General anaesthesia, Regional blocks, Sedation, Neuro-anaesthesia)
- **Patient Info** - Pre-op/post-op guides, FAQs, and downloadable resources
- **Education** - Educational articles about anaesthesia and procedures
- **Contact** - Contact form with POPIA compliance and location information

### 🧠 Design Features
- **Brain-themed graphics** - Subtle neurological motifs and SVG animations
- **Medical blue color scheme** - Professional, calming aesthetic
- **Responsive design** - Mobile-first approach with Tailwind CSS
- **Accessibility compliant** - WCAG guidelines, keyboard navigation, proper semantics

### 🔒 Compliance & Legal
- **POPIA compliant** - South African data protection compliance
- **Privacy Policy** - Comprehensive privacy documentation
- **Terms of Service** - Legal framework and medical disclaimers
- **Contact form validation** - Required consent checkboxes

### 🚀 Performance & SEO
- **Next.js 14** - Modern React framework with App Router
- **Static export** - Fast loading and easy deployment
- **SEO optimized** - Meta tags, Open Graph, sitemap.xml, robots.txt
- **Semantic HTML** - Proper structure for search engines and accessibility

## 🛠 Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Static export ready
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── education/         # Education hub and articles
│   ├── patients/          # Patient information
│   ├── privacy/           # Privacy policy
│   ├── services/          # Services overview
│   ├── terms/             # Terms of service
│   ├── globals.css        # Global styles and Tailwind
│   ├── layout.tsx         # Root layout with navigation
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── BrainGraphic.tsx   # Brain-themed SVG graphics
│   ├── Card.tsx           # Card component
│   ├── ContactForm.tsx    # Contact form with validation
│   ├── Footer.tsx         # Site footer
│   ├── Navbar.tsx         # Navigation component
│   └── Section.tsx        # Section wrapper
public/
├── robots.txt             # SEO robots file
└── sitemap.xml            # SEO sitemap
```

## 🎨 Design System

### Colors
- **Primary**: Medical blue (#3B82F6)
- **Background**: Clean whites and light grays
- **Text**: Carefully selected gray shades for readability

### Typography
- **Font**: Inter (Google Fonts)
- **Hierarchy**: Semantic heading structure
- **Readability**: Optimized line heights and spacing

### Components
- **Cards**: Rounded corners, subtle shadows
- **Buttons**: Primary (filled) and secondary (outline) variants
- **Brain Graphics**: Three variants (outline, network, waves)

## 📱 Responsive Design

- **Mobile-first**: Designed for mobile devices first
- **Breakpoints**: Tailwind CSS responsive utilities
- **Navigation**: Collapsible mobile menu
- **Typography**: Responsive text sizing

## ♿ Accessibility

- **WCAG 2.1 AA compliance**
- **Keyboard navigation** throughout
- **Screen reader friendly** with proper ARIA labels
- **Focus indicators** for all interactive elements
- **Color contrast** meets accessibility standards
- **Semantic HTML** structure

## 🇿🇦 South African Compliance

### POPIA (Protection of Personal Information Act)
- **Privacy Policy** with clear data usage explanations
- **Consent mechanisms** in contact forms
- **Data retention policies** clearly stated
- **User rights** information provided
- **Contact details** for data requests

### Medical Professional Standards
- **HPCSA registration** displayed prominently
- **Medical disclaimers** on all relevant pages
- **Emergency contact** information provided
- **Scope of practice** clearly defined

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
# Build static files
npm run build

# The `out` folder will contain the static website
```

## 📧 Contact Form

The contact form includes:
- **Client-side validation**
- **POPIA consent checkbox**
- **Medical emergency warnings**
- **Success/error feedback**

*Note: The form currently simulates submission. In production, integrate with a backend service or email API.*

## 🎯 SEO Features

- **Meta descriptions** for all pages
- **Open Graph tags** for social sharing
- **Structured data** with semantic markup
- **XML sitemap** with all pages
- **Robots.txt** for search engine guidance
- **Canonical URLs** to prevent duplicate content

## 📊 Performance Optimization

- **Static export** for fast loading
- **Font optimization** with Google Fonts
- **Image optimization** ready (add next/image for production images)
- **Code splitting** with Next.js dynamic imports
- **CSS optimization** with Tailwind CSS purging

## 🔧 Customization

### Adding New Pages
1. Create new page in `src/app/[page-name]/page.tsx`
2. Add navigation link in `src/components/Navbar.tsx`
3. Add footer link in `src/components/Footer.tsx`
4. Update sitemap.xml

### Modifying Colors
Edit the Tailwind config in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color-here',
    }
  }
}
```

### Adding Brain Graphics
Create new variants in `src/components/BrainGraphic.tsx`

## 📝 Content Management

### Educational Articles
- Add new articles to the `articles` object in `src/app/education/[slug]/page.tsx`
- Update the articles array in `src/app/education/page.tsx`
- Each article supports full HTML content

### Contact Information
- Update contact details in `src/app/contact/page.tsx`
- Modify footer information in `src/components/Footer.tsx`

## 🌐 Deployment

This website is built as a static export and can be deployed to:

- **Netlify**: Drag and drop the `out` folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Upload to gh-pages branch
- **Traditional hosting**: Upload `out` folder contents

### Environment Setup
For production deployment:
1. Update all placeholder URLs to actual domain
2. Configure contact form backend
3. Add Google Analytics (if required)
4. Set up proper email handling for contact form

## 📋 Browser Support

- **Modern browsers**: Chrome, Firefox, Safari, Edge
- **Mobile browsers**: iOS Safari, Chrome Mobile
- **Accessibility tools**: Screen readers, keyboard navigation

## 📄 License

This project is created for Dr Daniel Schmuckler's medical practice. All content and design elements are proprietary.

## 🤝 Contributing

For updates or modifications to this website, please contact the development team or Dr Schmuckler's office directly.

---

**Medical Disclaimer**: This website is for informational purposes only and does not constitute medical advice. Always consult with qualified healthcare professionals for medical concerns.

**Emergency Contact**: For medical emergencies, contact emergency services immediately (10177 in South Africa). 

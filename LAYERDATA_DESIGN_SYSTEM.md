# LayerData Design System
*Documento completo per la coerenza del brand e lo sviluppo di nuovi progetti*

---

## 🎨 **Brand Identity**

### **Mission Statement**
"Understand & influence customer behavior" - Un modello integrato che combina analytics, segmentazione e personalizzazione per aumentare il valore del tuo pubblico e ottimizzare i risultati.
'immagine, cufficia
### **Brand Personality**
- **Professionale**: Design pulito e minimalista
- **Tecnologico**: Elementi geometrici e moderni
- **Affidabile**: Colori stabili e layout strutturato
- **Accessibile**: Design mobile-first e user-friendly

---

## 🌈 **Color Palette**

### **Primary Colors**
```css
/* Purple - Colore principale */
--primary-purple: #8B5CF6;
--purple-dark: #7C3AED;
--purple-light: #A78BFA;

/* Beige - Colore secondario */
--primary-beige: #F59E0B;
--beige-dark: #D97706;
--beige-light: #FBBF24;

/* Gray - Colore neutro */
--primary-gray: #6B7280;
--gray-dark: #374151;
--gray-light: #9CA3AF;
```

### **Neutral Colors**
```css
/* Background & Text */
--white: #FFFFFF;
--black: #111827;
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-600: #4B5563;
--gray-900: #111827;
```

### **Usage Guidelines**
- **Purple**: CTA buttons, links, accent elements
- **Beige**: Secondary CTAs, highlights, gradients
- **Gray**: Text, borders, subtle elements
- **White**: Backgrounds, cards, clean spaces

---

## 🔤 **Typography**

### **Font Stack**
```css
/* Primary Font - Work Sans (Google Fonts) */
font-family: 'Work Sans', sans-serif;

/* Fallback */
font-family: system-ui, -apple-system, sans-serif;
```

### **Font Weights**
- **Work Sans**: 100, 200, 300, 400 (normal), 500, 600 (semibold), 700 (bold), 800, 900

### **Typography Scale**
```css
/* Headings */
.heading-primary {
  font-size: 2rem;      /* Mobile */
  font-size: 3rem;       /* Tablet */
  font-size: 4rem;       /* Desktop */
  font-size: 5rem;       /* Large Desktop */
  font-size: 6rem;       /* Extra Large */
  font-weight: 700;
  line-height: 1.2;
  font-family: 'Mulish', sans-serif;
}

.heading-secondary {
  font-size: 1.5rem;     /* Mobile */
  font-size: 2rem;       /* Tablet */
  font-size: 3rem;       /* Desktop */
  font-size: 4rem;       /* Large Desktop */
  font-weight: 700;
  line-height: 1.3;
  font-family: 'Mulish', sans-serif;
}

/* Body Text */
.text-large {
  font-size: 0.875rem;   /* Mobile */
  font-size: 1rem;       /* Tablet */
  font-size: 1.125rem;   /* Desktop */
  font-size: 1.25rem;    /* Large Desktop */
  font-weight: 400;
  line-height: 1.6;
  font-family: 'Mulish', sans-serif;
}
```

### **Responsive Typography**
```css
/* Mobile First Approach */
text-xs    /* 12px */
text-sm    /* 14px */
text-base  /* 16px */
text-lg    /* 18px */
text-xl    /* 20px */
text-2xl   /* 24px */
text-3xl   /* 30px */
text-4xl   /* 36px */
text-5xl   /* 48px */
text-6xl   /* 60px */
```

---

## 📐 **Layout & Spacing**

### **Container System**
```css
.container-max {
  max-width: 80rem;      /* 1280px */
  margin: 0 auto;
  padding: 0.75rem;      /* Mobile */
  padding: 1rem;         /* Tablet */
  padding: 1.5rem;       /* Desktop */
  padding: 2rem;         /* Large Desktop */
}
```

### **Spacing Scale**
```css
/* Vertical Spacing */
.section-padding {
  padding-top: 1rem;     /* Mobile */
  padding-bottom: 1rem;
  padding-top: 1.5rem;   /* Tablet */
  padding-bottom: 1.5rem;
  padding-top: 2rem;     /* Desktop */
  padding-bottom: 2rem;
  padding-top: 3rem;     /* Large Desktop */
  padding-bottom: 3rem;
}

/* Responsive Padding */
py-2 sm:py-4 md:py-6 lg:py-8 xl:py-12
px-4 sm:px-6 md:px-8 lg:px-12
```

### **Grid System**
```css
/* Card Grid */
grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
gap-4 sm:gap-6 md:gap-8

/* Service Grid */
grid-cols-1 lg:grid-cols-2
gap-8 lg:gap-12
```

---

## 🎯 **Components**

### **Buttons**

#### **Primary Button**
```css
.btn-primary {
  background-color: var(--primary-purple);
  color: white;
  padding: 0.5rem 1.5rem;    /* Mobile */
  padding: 0.75rem 2rem;     /* Desktop */
  font-weight: 600;
  border-radius: 0;           /* No rounded corners */
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: var(--purple-dark);
}
```

#### **Secondary Button**
```css
.btn-secondary {
  background-color: var(--primary-beige);
  color: white;
  padding: 0.5rem 1.5rem;    /* Mobile */
  padding: 0.75rem 2rem;     /* Desktop */
  font-weight: 600;
  border-radius: 0;
  transition: background-color 0.2s;
}

.btn-secondary:hover {
  background-color: var(--beige-dark);
}
```

#### **Outline Button**
```css
.btn-outline {
  border: 2px solid var(--primary-gray);
  color: var(--primary-gray);
  background-color: transparent;
  padding: 0.5rem 1.5rem;    /* Mobile */
  padding: 0.75rem 2rem;     /* Desktop */
  font-weight: 600;
  border-radius: 0;
  transition: all 0.2s;
}

.btn-outline:hover {
  background-color: var(--primary-gray);
  color: white;
}
```

### **Cards**
```css
.card {
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--gray-200);
  padding: 1.5rem;
  border-radius: 0;           /* No rounded corners */
  transition: box-shadow 0.2s;
}

.card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```

### **Gradients**
```css
.gradient-bg {
  background: linear-gradient(135deg, var(--primary-beige) 0%, var(--primary-purple) 100%);
}

.gradient-text {
  background: linear-gradient(135deg, var(--primary-beige) 0%, var(--primary-purple) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 📱 **Mobile-First Design Principles**

### **Breakpoints**
```css
/* Tailwind CSS Breakpoints */
sm: 640px    /* Small devices */
md: 768px    /* Medium devices */
lg: 1024px   /* Large devices */
xl: 1280px   /* Extra large devices */
2xl: 1536px  /* 2X Extra large devices */
```

### **Mobile-First Approach**
1. **Start with Mobile**: Design for smallest screen first
2. **Progressive Enhancement**: Add features for larger screens
3. **Touch-Friendly**: Minimum 44px touch targets
4. **Readable Text**: Minimum 16px font size on mobile
5. **Fast Loading**: Optimize images and assets

### **Responsive Patterns**
```css
/* Typography Scaling */
text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl

/* Spacing Scaling */
py-2 sm:py-4 md:py-6 lg:py-8 xl:py-12

/* Grid Responsive */
grid-cols-1 sm:grid-cols-2 lg:grid-cols-3

/* Padding Responsive */
px-4 sm:px-6 md:px-8 lg:px-12
```

---

## 🎨 **Visual Elements**

### **Geometric Shapes**
- **No Rounded Corners**: Sharp, geometric edges
- **Clean Lines**: Straight borders and dividers
- **Structured Layout**: Grid-based organization
- **Minimal Icons**: Simple, geometric icons

### **Abstract Graphics**
- **Geometric Patterns**: Triangles, squares, circles
- **Gradient Overlays**: Subtle color transitions
- **Shadow Effects**: Layered depth
- **Clean Separators**: Border lines between sections

### **Image Treatment**
- **Consistent Aspect Ratios**: Maintain visual harmony
- **High Quality**: Sharp, professional images
- **Optimized Loading**: WebP format when possible
- **Responsive Sizing**: Scale appropriately

---

## 🌐 **Multilingual Support**

### **Language Structure**
```
/en/          /* English (Default) */
/it/          /* Italian */
```

### **Translation Keys**
```javascript
// Common structure
{
  "hero": {
    "mission": "Understand & influence customer behavior",
    "description": "An integrated model...",
    "discoverServices": "Start the journey →",
    "discoverCommunity": "Discover the community"
  },
  "header": {
    "services": "Services",
    "community": "Community",
    "eventsForCompanies": "Events for companies"
  }
}
```

### **SEO Implementation**
```html
<!-- Hreflang Tags -->
<link rel="alternate" hreflang="en" href="https://layerdata.eu/en" />
<link rel="alternate" hreflang="it" href="https://layerdata.eu/it" />
<link rel="alternate" hreflang="x-default" href="https://layerdata.eu/en" />
```

---

## 🚀 **Performance Guidelines**

### **Image Optimization**
- Use Next.js `Image` component
- Implement lazy loading
- Provide multiple sizes
- Use WebP format when possible

### **Font Loading**
```css
/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;700&display=swap');

/* Local Fonts */
@font-face {
  font-family: 'Gotham';
  src: url('/fonts/gotham-bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
```

### **CSS Optimization**
- Use Tailwind CSS for consistency
- Implement CSS custom properties
- Minimize custom CSS
- Use utility classes

---

## 📋 **Component Checklist**

### **Essential Components**
- [ ] Header with navigation
- [ ] Hero section
- [ ] Service cards
- [ ] Contact form
- [ ] Footer with links
- [ ] Language selector
- [ ] Modal components

### **Content Sections**
- [ ] About us
- [ ] Services overview
- [ ] Case studies
- [ ] Client testimonials
- [ ] Team members
- [ ] Contact information

### **Interactive Elements**
- [ ] Smooth scrolling
- [ ] Form validation
- [ ] Loading states
- [ ] Error handling
- [ ] Success messages

---

## 🔧 **Technical Implementation**

### **Framework**
- **Next.js 14**: App Router
- **React 18**: Latest features
- **Tailwind CSS**: Styling
- **TypeScript**: Type safety (optional)

### **Key Dependencies**
```json
{
  "next": "^14.2.0",
  "react": "^18.0.0",
  "tailwindcss": "^3.4.0",
  "daisyui": "^4.11.1"
}
```

### **File Structure**
```
app/
├── en/                 /* English routes */
├── it/                 /* Italian routes */
├── api/                /* API routes */
├── globals.css         /* Global styles */
└── layout.js           /* Root layout */

components/
├── header.js           /* Navigation */
├── hero.js             /* Hero section */
├── footer.js           /* Footer */
└── ...                 /* Other components */

lib/
├── translations/       /* Translation files */
└── useTranslations.js  /* Translation hook */
```

---

## 📝 **Usage Examples**

### **Creating a New Page**
```jsx
import Header from "../components/header";
import Footer from "../components/footer";
import { useTranslations } from "../lib/useTranslations";

export default function NewPage() {
  const { t } = useTranslations();
  
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      
      <main className="section-padding">
        <div className="container-max">
          <h1 className="heading-primary text-center mb-8">
            {t('newPage.title')}
          </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Content cards */}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
```

### **Adding a New Component**
```jsx
"use client";
import { useTranslations } from "../lib/useTranslations";

export default function NewComponent() {
  const { t } = useTranslations();
  
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="heading-secondary mb-4">
            {t('newComponent.title')}
          </h2>
          <p className="text-large mb-8">
            {t('newComponent.description')}
          </p>
          
          <button className="btn-primary">
            {t('newComponent.cta')}
          </button>
        </div>
      </div>
    </section>
  );
}
```

---

## 🎯 **Brand Guidelines**

### **Do's**
- ✅ Use the established color palette
- ✅ Maintain consistent typography
- ✅ Follow mobile-first approach
- ✅ Keep geometric, clean design
- ✅ Use proper spacing and alignment
- ✅ Implement responsive design
- ✅ Maintain brand consistency

### **Don'ts**
- ❌ Don't use rounded corners
- ❌ Don't deviate from color palette
- ❌ Don't ignore mobile experience
- ❌ Don't use inconsistent fonts
- ❌ Don't overcrowd layouts
- ❌ Don't ignore performance
- ❌ Don't break responsive design

---

## 📞 **Contact & Support**

### **Development Team**
- **Lead Developer**: Mattia Minafo
- **Design**: LayerData Team
- **Domain**: layerdata.eu

### **Resources**
- **GitHub**: https://github.com/mattiaminafo/layerdata
- **Vercel**: https://vercel.com
- **Design System**: This document

---

*Ultimo aggiornamento: Dicembre 2024*
*Versione: 1.0*

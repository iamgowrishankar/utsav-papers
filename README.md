# Premium Tissue Manufacturing Website

A comprehensive, modern website for a tissue manufacturing company built with Vue 3.5 and Vite.

## Features

- **Modern Tech Stack**: Vue 3.5 (Composition API), Vite 5, Tailwind CSS 3
- **Responsive Design**: Mobile-first approach with beautiful UI across all devices
- **Complete Pages**:
  - Home page with hero section and featured products
  - About Us with company history and mission
  - Products catalog with 10 product categories
  - Individual product detail pages
  - Services & Capabilities
  - Why Choose Us with testimonials
  - Gallery with lightbox
  - Contact form with validation
- **Form Validation**: VeeValidate + Yup for robust form handling
- **Animations**: GSAP animations for smooth user experience
- **State Management**: Pinia for centralized state
- **Routing**: Vue Router 4 with scroll behavior

## Tech Stack

- **Frontend Framework**: Vue 3.5 (Composition API)
- **Build Tool**: Vite 5
- **Language**: JavaScript
- **Styling**: Tailwind CSS 3
- **State Management**: Pinia
- **Router**: Vue Router 4
- **Forms**: VeeValidate + Yup
- **HTTP Client**: Axios
- **Icons**: Lucide Vue
- **Animations**: GSAP

## Project Structure

```
src/
├── assets/         # Static assets
├── components/     # Reusable components
│   ├── Navbar.vue
│   └── Footer.vue
├── stores/         # Pinia stores
│   └── products.js
├── views/          # Page components
│   ├── Home.vue
│   ├── About.vue
│   ├── Products.vue
│   ├── Services.vue
│   ├── WhyChooseUs.vue
│   ├── Gallery.vue
│   ├── Contact.vue
│   └── products/   # Product detail pages
│       ├── FacialTissue.vue
│       ├── ToiletTissue.vue
│       ├── PaperTowel.vue
│       ├── Napkins.vue
│       ├── Handkerchiefs.vue
│       ├── TissueRolls.vue
│       ├── GiftWrapping.vue
│       ├── CrepePaper.vue
│       ├── SpecialtyTissue.vue
│       └── CustomPrinted.vue
├── router/         # Vue Router configuration
│   └── index.js
├── App.vue         # Root component
├── main.js         # Application entry
└── style.css       # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Product Categories

1. **Facial Tissue Paper** - Premium quality facial tissues
2. **Toilet Tissue Paper** - Multiple ply options
3. **Paper Towel** - Highly absorbent
4. **Napkins** - Various sizes and colors
5. **Handkerchiefs** - Pocket-sized convenience
6. **Tissue Paper Rolls** - Industrial and commercial
7. **Gift Wrapping Tissue** - Colorful and decorative
8. **Crepe Paper** - For crafts and decorations
9. **Specialty Tissue Paper** - Industry-specific solutions
10. **Custom Printed Tissue** - Branded products

## Key Features

### Navigation
- Responsive navbar with dropdown menus
- Mobile-friendly hamburger menu
- Sticky header for easy navigation

### Home Page
- Eye-catching hero section
- Company statistics
- Featured products showcase
- Why Choose Us section
- Call-to-action sections

### Product Pages
- Comprehensive product information
- Specifications and features
- Multiple variants
- Applications and use cases
- Custom packaging options

### Contact Form
- Full validation with VeeValidate and Yup
- Product interest selection
- Success message feedback
- Contact information display

### Gallery
- Categorized image gallery
- Lightbox modal for image viewing
- Smooth transitions and animations

## Customization

### Colors
Update the primary color in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your custom color palette
  }
}
```

### Content
- Product information is managed in `src/stores/products.js`
- Update company details in individual page components
- Images are sourced from Unsplash (replace with actual product images)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary software.

## Contact

For inquiries about this website, please contact the development team.

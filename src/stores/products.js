import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => ({
    productCategories: [
      {
        id: 1,
        name: 'Facial Tissue Paper',
        slug: 'facial-tissue',
        description: 'Soft and gentle facial tissues perfect for everyday use, available in multiple ply options.',
        image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop',
        featured: true
      },
      {
        id: 2,
        name: 'Toilet Tissue Paper',
        slug: 'toilet-tissue',
        description: 'Premium quality toilet tissue with superior softness and strength, available in 1-ply, 2-ply, and 3-ply.',
        image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=600&h=400&fit=crop',
        featured: true
      },
      {
        id: 3,
        name: 'Paper Towel',
        slug: 'paper-towel',
        description: 'Highly absorbent paper towels for kitchen and commercial use, available in various sizes.',
        image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&h=400&fit=crop',
        featured: true
      },
      {
        id: 4,
        name: 'Napkins',
        slug: 'napkins',
        description: 'Elegant napkins for dining and events, available in multiple sizes, colors, and ply options.',
        image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&h=400&fit=crop',
        featured: true
      },
      {
        id: 5,
        name: 'Handkerchiefs',
        slug: 'handkerchiefs',
        description: 'Convenient pocket-sized handkerchiefs for on-the-go use.',
        image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=400&fit=crop',
        featured: false
      },
      {
        id: 6,
        name: 'Tissue Paper Rolls',
        slug: 'tissue-rolls',
        description: 'Industrial and commercial tissue paper rolls for various applications.',
        image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=600&h=400&fit=crop',
        featured: false
      },
      {
        id: 7,
        name: 'Gift Wrapping Tissue',
        slug: 'gift-wrapping',
        description: 'Colorful and decorative tissue paper perfect for gift wrapping and packaging.',
        image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&h=400&fit=crop',
        featured: false
      },
      {
        id: 8,
        name: 'Crepe Paper',
        slug: 'crepe-paper',
        description: 'Versatile crepe paper for crafts, decorations, and creative projects.',
        image: 'https://images.unsplash.com/photo-1492112007959-c35ae067c37b?w=600&h=400&fit=crop',
        featured: false
      },
      {
        id: 9,
        name: 'Specialty Tissue Paper',
        slug: 'specialty-tissue',
        description: 'Custom solutions for industry-specific applications and specialized needs.',
        image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&h=400&fit=crop',
        featured: false
      },
      {
        id: 10,
        name: 'Custom Printed Tissue',
        slug: 'custom-printed',
        description: 'Personalized tissue products with your brand logo and custom designs.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
        featured: false
      }
    ]
  }),
  getters: {
    featuredProducts: (state) => state.productCategories.filter(p => p.featured),
    getProductBySlug: (state) => (slug) => state.productCategories.find(p => p.slug === slug)
  }
})

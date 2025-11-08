import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/products/facial-tissue',
    name: 'FacialTissue',
    component: () => import('../views/products/FacialTissue.vue')
  },
  {
    path: '/products/toilet-tissue',
    name: 'ToiletTissue',
    component: () => import('../views/products/ToiletTissue.vue')
  },
  {
    path: '/products/paper-towel',
    name: 'PaperTowel',
    component: () => import('../views/products/PaperTowel.vue')
  },
  {
    path: '/products/napkins',
    name: 'Napkins',
    component: () => import('../views/products/Napkins.vue')
  },
  {
    path: '/products/handkerchiefs',
    name: 'Handkerchiefs',
    component: () => import('../views/products/Handkerchiefs.vue')
  },
  {
    path: '/products/tissue-rolls',
    name: 'TissueRolls',
    component: () => import('../views/products/TissueRolls.vue')
  },
  {
    path: '/products/gift-wrapping',
    name: 'GiftWrapping',
    component: () => import('../views/products/GiftWrapping.vue')
  },
  {
    path: '/products/crepe-paper',
    name: 'CrepePaper',
    component: () => import('../views/products/CrepePaper.vue')
  },
  {
    path: '/products/specialty-tissue',
    name: 'SpecialtyTissue',
    component: () => import('../views/products/SpecialtyTissue.vue')
  },
  {
    path: '/products/custom-printed',
    name: 'CustomPrinted',
    component: () => import('../views/products/CustomPrinted.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/why-choose-us',
    name: 'WhyChooseUs',
    component: () => import('../views/WhyChooseUs.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router

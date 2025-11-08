<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div ref="heroContent">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Quality Tissue Products for Every Need
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-primary-100">
              Manufacturing Excellence Since 1998
            </p>
            <p class="text-lg mb-8 text-primary-50">
              Premium quality tissue paper products crafted with care and precision. From facial tissues to custom printed solutions, we deliver excellence in every sheet.
            </p>
            <div class="flex flex-wrap gap-4">
              <router-link to="/products" class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-200 shadow-lg hover:shadow-xl">
                View Products
              </router-link>
              <router-link to="/contact" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200">
                Get a Quote
              </router-link>
            </div>
          </div>

          <div ref="heroImage" class="hidden md:block">
            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop" alt="Tissue Manufacturing" class="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center" v-for="stat in stats" :key="stat.label">
            <div class="text-4xl md:text-5xl font-bold text-primary-600 mb-2">{{ stat.value }}</div>
            <div class="text-gray-600 font-medium">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="section-title">Our Featured Products</h2>
          <p class="section-subtitle">
            Discover our range of Utsav Papers products designed to meet your everyday needs
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="product in featuredProducts"
            :key="product.id"
            class="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div class="aspect-w-16 aspect-h-12 overflow-hidden">
              <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ product.name }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ product.description }}</p>
              <router-link :to="`/products/${product.slug}`" class="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center">
                Learn More
                <ArrowRight :size="16" class="ml-1" />
              </router-link>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link to="/products" class="btn-primary inline-block">
            View All Products
          </router-link>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="section-title">Why Choose Utsav Papers?</h2>
          <p class="section-subtitle">
            We are committed to delivering quality, reliability, and sustainability
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="reason in reasons" :key="reason.title" class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <component :is="reason.icon" :size="28" class="text-primary-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ reason.title }}</h3>
            <p class="text-gray-600">{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-primary-600 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p class="text-xl mb-8 text-primary-100">
          Contact us today for bulk orders, custom printing, or any inquiries about our products
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <router-link to="/contact" class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-200 shadow-lg">
            Contact Us
          </router-link>
          <a href="tel:+15551234567" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200 inline-flex items-center">
            <Phone :size="20" class="mr-2" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useProductStore } from '../stores/products'
import { ArrowRight, Award, Shield, Leaf, Clock, Users, Phone } from 'lucide-vue-next'
import gsap from 'gsap'

const productStore = useProductStore()
const featuredProducts = productStore.featuredProducts

const heroContent = ref(null)
const heroImage = ref(null)

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '1000+', label: 'Clients Served' },
  { value: '50M+', label: 'Products Manufactured' },
  { value: '99%', label: 'Client Satisfaction' }
]

const reasons = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'ISO certified manufacturing processes ensure consistent quality in every product we deliver.'
  },
  {
    icon: Shield,
    title: 'Reliable Supply',
    description: 'Large production capacity and efficient logistics guarantee on-time delivery for all orders.'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Sustainable sourcing and environmentally conscious manufacturing practices for a greener future.'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Quick production cycles and responsive customer service to meet your urgent requirements.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Experienced professionals dedicated to providing excellent service and product solutions.'
  },
  {
    icon: Phone,
    title: '24/7 Support',
    description: 'Round-the-clock customer support to address your queries and concerns promptly.'
  }
]

onMounted(() => {
  // Hero animations
  gsap.from(heroContent.value, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
  })

  if (heroImage.value) {
    gsap.from(heroImage.value, {
      opacity: 0,
      x: 50,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
    })
  }
})
</script>

<template>
  <div class="products">
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
        <p class="text-xl text-primary-100">Premium Quality Tissue Products for Every Application</p>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse our comprehensive range of tissue paper products manufactured with precision and care. From everyday essentials to specialized solutions, we have the perfect product for your needs.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <router-link
            v-for="product in products"
            :key="product.id"
            :to="`/products/${product.slug}`"
            class="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div class="relative overflow-hidden h-64">
              <img :src="product.image" :alt="product.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="text-2xl font-bold text-white mb-2">{{ product.name }}</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-4">{{ product.description }}</p>
              <div class="flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                <span>View Details</span>
                <ArrowRight :size="20" class="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="section-title">Product Features</h2>
          <p class="section-subtitle">What makes our products stand out</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="feature in features" :key="feature.title" class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <component :is="feature.icon" :size="32" class="text-primary-600" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600 text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary-600 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-4">Need Custom Solutions?</h2>
        <p class="text-xl text-primary-100 mb-8">
          We offer custom printing, private labeling, and specialized product development
        </p>
        <router-link to="/contact" class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all inline-block">
          Request a Quote
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useProductStore } from '../stores/products'
import { ArrowRight, Sparkles, Shield, Leaf, Package } from 'lucide-vue-next'

const productStore = useProductStore()
const products = productStore.productCategories

const features = [
  {
    icon: Sparkles,
    title: 'Premium Quality',
    description: 'Superior softness and strength in every product'
  },
  {
    icon: Shield,
    title: 'Safe & Hygienic',
    description: 'FDA approved and dermatologically tested'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Sustainable materials and processes'
  },
  {
    icon: Package,
    title: 'Custom Packaging',
    description: 'Flexible packaging options for all needs'
  }
]
</script>

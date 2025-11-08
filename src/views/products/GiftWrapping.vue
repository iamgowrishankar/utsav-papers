<template>
  <div class="product-detail">
    <div class="bg-gray-50 py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center space-x-2 text-sm text-gray-600">
          <router-link to="/" class="hover:text-primary-600">Home</router-link>
          <ChevronRight :size="16" />
          <router-link to="/products" class="hover:text-primary-600">Products</router-link>
          <ChevronRight :size="16" />
          <span class="text-gray-900 font-medium">Gift Wrapping Tissue</span>
        </div>
      </div>
    </div>

    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12">
          <div><img src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&h=600&fit=crop" alt="Gift Wrapping Tissue" class="rounded-lg shadow-xl w-full" /></div>
          <div>
            <h1 class="text-4xl font-bold text-gray-900 mb-4">Gift Wrapping Tissue Paper</h1>
            <p class="text-xl text-gray-600 mb-6">Colorful and decorative tissue paper perfect for gift wrapping, retail packaging, and creative projects. Available in a wide spectrum of colors.</p>
            <div class="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
              <h3 class="font-bold text-gray-900 mb-3">Key Features:</h3>
              <ul class="space-y-2">
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>40+ vibrant colors available</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Standard size: 20" x 30" sheets</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Acid-free and colorfast</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Bulk orders for retail and events</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Custom printing available</span></li>
              </ul>
            </div>
            <router-link to="/contact" class="btn-primary inline-block">Request a Quote</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Color Options</h2>
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-600 mb-4">We offer a wide range of colors including:</p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div v-for="color in colors" :key="color" class="flex items-center">
              <span class="w-3 h-3 rounded-full bg-primary-600 mr-2"></span>
              <span class="text-sm">{{ color }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ChevronRight, CheckCircle2 } from 'lucide-vue-next'

const colors = [
  'Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink', 'Black',
  'White', 'Gold', 'Silver', 'Burgundy', 'Navy', 'Teal', 'Lavender', 'Peach'
]
</script>

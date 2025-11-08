<template>
  <div class="product-detail">
    <div class="bg-gray-50 py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center space-x-2 text-sm text-gray-600">
          <router-link to="/" class="hover:text-primary-600">Home</router-link>
          <ChevronRight :size="16" />
          <router-link to="/products" class="hover:text-primary-600">Products</router-link>
          <ChevronRight :size="16" />
          <span class="text-gray-900 font-medium">Paper Towel</span>
        </div>
      </div>
    </div>

    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12">
          <div><img src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&h=600&fit=crop" alt="Paper Towel" class="rounded-lg shadow-xl w-full" /></div>
          <div>
            <h1 class="text-4xl font-bold text-gray-900 mb-4">Paper Towel</h1>
            <p class="text-xl text-gray-600 mb-6">Highly absorbent and durable paper towels for kitchen, commercial, and industrial use. Available in multiple sizes and formats.</p>
            <div class="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
              <h3 class="font-bold text-gray-900 mb-3">Key Features:</h3>
              <ul class="space-y-2">
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Superior absorbency and strength</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>2-ply premium quality</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Quick-drying technology</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Household and commercial variants</span></li>
              </ul>
            </div>
            <router-link to="/contact" class="btn-primary inline-block">Request a Quote</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Specifications</h2>
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-900 mb-3">Standard Roll</h4>
              <p class="text-sm text-gray-600 mb-2">Sheet Size: 11" x 9"</p>
              <p class="text-sm text-gray-600 mb-2">Sheets per Roll: 85-100</p>
              <p class="text-sm text-gray-600">Packaging: 6, 12, 24 rolls</p>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 mb-3">Jumbo Roll</h4>
              <p class="text-sm text-gray-600 mb-2">Sheet Size: 9" x 11"</p>
              <p class="text-sm text-gray-600 mb-2">Sheets per Roll: 600-800</p>
              <p class="text-sm text-gray-600">For commercial dispensers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ChevronRight, CheckCircle2 } from 'lucide-vue-next'
</script>

<template>
  <div class="product-detail">
    <div class="bg-gray-50 py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center space-x-2 text-sm text-gray-600">
          <router-link to="/" class="hover:text-primary-600">Home</router-link>
          <ChevronRight :size="16" />
          <router-link to="/products" class="hover:text-primary-600">Products</router-link>
          <ChevronRight :size="16" />
          <span class="text-gray-900 font-medium">Napkins</span>
        </div>
      </div>
    </div>

    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12">
          <div><img src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&h=600&fit=crop" alt="Napkins" class="rounded-lg shadow-xl w-full" /></div>
          <div>
            <h1 class="text-4xl font-bold text-gray-900 mb-4">Napkins</h1>
            <p class="text-xl text-gray-600 mb-6">Elegant and practical napkins for dining, events, and hospitality. Available in multiple sizes, colors, and designs to suit every occasion.</p>
            <div class="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
              <h3 class="font-bold text-gray-900 mb-3">Key Features:</h3>
              <ul class="space-y-2">
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Multiple sizes: Cocktail, Luncheon, Dinner</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>1-ply, 2-ply, and 3-ply options</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Wide range of colors available</span></li>
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
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Available Sizes</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h4 class="font-bold text-gray-900 mb-2">Cocktail Napkins</h4>
            <p class="text-sm text-gray-600">5" x 5" | Perfect for drinks and appetizers</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h4 class="font-bold text-gray-900 mb-2">Luncheon Napkins</h4>
            <p class="text-sm text-gray-600">13" x 13" | Ideal for casual dining</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h4 class="font-bold text-gray-900 mb-2">Dinner Napkins</h4>
            <p class="text-sm text-gray-600">17" x 17" | Premium for formal dining</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ChevronRight, CheckCircle2 } from 'lucide-vue-next'
</script>

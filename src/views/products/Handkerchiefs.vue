<template>
  <div class="product-detail">
    <div class="bg-gray-50 py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center space-x-2 text-sm text-gray-600">
          <router-link to="/" class="hover:text-primary-600">Home</router-link>
          <ChevronRight :size="16" />
          <router-link to="/products" class="hover:text-primary-600">Products</router-link>
          <ChevronRight :size="16" />
          <span class="text-gray-900 font-medium">Handkerchiefs</span>
        </div>
      </div>
    </div>

    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12">
          <div><img src="https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&h=600&fit=crop" alt="Handkerchiefs" class="rounded-lg shadow-xl w-full" /></div>
          <div>
            <h1 class="text-4xl font-bold text-gray-900 mb-4">Handkerchiefs</h1>
            <p class="text-xl text-gray-600 mb-6">Convenient pocket-sized tissue handkerchiefs for on-the-go use. Soft, absorbent, and individually wrapped for hygiene.</p>
            <div class="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
              <h3 class="font-bold text-gray-900 mb-3">Key Features:</h3>
              <ul class="space-y-2">
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Pocket-friendly compact size</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>2-ply soft tissue</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Individual poly-wrap packaging</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Available in packs of 6, 10, or 12</span></li>
              </ul>
            </div>
            <router-link to="/contact" class="btn-primary inline-block">Request a Quote</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ChevronRight, CheckCircle2 } from 'lucide-vue-next'
</script>

<template>
  <div class="product-detail">
    <div class="bg-gray-50 py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center space-x-2 text-sm text-gray-600">
          <router-link to="/" class="hover:text-primary-600">Home</router-link>
          <ChevronRight :size="16" />
          <router-link to="/products" class="hover:text-primary-600">Products</router-link>
          <ChevronRight :size="16" />
          <span class="text-gray-900 font-medium">Specialty Tissue Paper</span>
        </div>
      </div>
    </div>

    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12">
          <div><img src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&h=600&fit=crop" alt="Specialty Tissue" class="rounded-lg shadow-xl w-full" /></div>
          <div>
            <h1 class="text-4xl font-bold text-gray-900 mb-4">Specialty Tissue Paper</h1>
            <p class="text-xl text-gray-600 mb-6">Custom tissue solutions for industry-specific applications including medical, food service, automotive, and electronics sectors.</p>
            <div class="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
              <h3 class="font-bold text-gray-900 mb-3">Key Features:</h3>
              <ul class="space-y-2">
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Industry-specific formulations</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Custom specifications available</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Medical-grade and food-safe options</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Anti-static and lint-free variants</span></li>
              </ul>
            </div>
            <router-link to="/contact" class="btn-primary inline-block">Request a Quote</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Industry Applications</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h4 class="font-bold text-gray-900 mb-2">Medical & Healthcare</h4>
            <p class="text-sm text-gray-600">Sterile, medical-grade tissue for clinical and laboratory use</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h4 class="font-bold text-gray-900 mb-2">Food Service</h4>
            <p class="text-sm text-gray-600">FDA-approved, food-safe tissue for food handling and packaging</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h4 class="font-bold text-gray-900 mb-2">Electronics</h4>
            <p class="text-sm text-gray-600">Anti-static, lint-free tissue for sensitive equipment</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h4 class="font-bold text-gray-900 mb-2">Automotive</h4>
            <p class="text-sm text-gray-600">Absorbent, durable tissue for automotive applications</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ChevronRight, CheckCircle2 } from 'lucide-vue-next'
</script>

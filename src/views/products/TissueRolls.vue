<template>
  <div class="product-detail">
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12">
          <div><img src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=800&h=600&fit=crop" alt="Tissue Rolls" class="rounded-lg shadow-xl w-full" /></div>
          <div>
            <h1 class="text-4xl font-bold text-gray-900 mb-4">Tissue Paper Rolls</h1>
            <p class="text-xl text-gray-600 mb-6">Industrial and commercial tissue paper rolls for various manufacturing and packaging applications. Customizable dimensions and specifications.</p>
            <div class="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
              <h3 class="font-bold text-gray-900 mb-3">Key Features:</h3>
              <ul class="space-y-2">
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Jumbo rolls for industrial use</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Custom width and diameter options</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Virgin and recycled paper options</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Bulk pricing available</span></li>
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

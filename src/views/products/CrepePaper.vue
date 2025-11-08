<template>
  <div class="product-detail">
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12">
          <div><img src="https://images.unsplash.com/photo-1492112007959-c35ae067c37b?w=800&h=600&fit=crop" alt="Crepe Paper" class="rounded-lg shadow-xl w-full" /></div>
          <div>
            <h1 class="text-4xl font-bold text-gray-900 mb-4">Crepe Paper</h1>
            <p class="text-xl text-gray-600 mb-6">Versatile crepe paper for crafts, decorations, party supplies, and creative projects. Stretchable and easy to work with.</p>
            <div class="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
              <h3 class="font-bold text-gray-900 mb-3">Key Features:</h3>
              <ul class="space-y-2">
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Stretchable and flexible texture</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>30+ vibrant colors</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Standard rolls: 20" width</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Perfect for DIY projects and decorations</span></li>
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

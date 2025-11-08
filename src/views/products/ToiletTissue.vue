<template>
  <div class="product-detail">
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&h=600&fit=crop" alt="Toilet Tissue Paper" class="rounded-lg shadow-xl w-full" />
          </div>
          <div>
            <h1 class="text-4xl font-bold text-gray-900 mb-4">Toilet Tissue Paper</h1>
            <p class="text-xl text-gray-600 mb-6">
              Premium quality toilet tissue combining superior softness, strength, and absorbency. Available in multiple ply options to suit different needs and preferences.
            </p>

            <div class="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
              <h3 class="font-bold text-gray-900 mb-3">Key Features:</h3>
              <ul class="space-y-2">
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Soft and strong for comfortable use</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>1-ply, 2-ply, and 3-ply options</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Highly absorbent and quick dissolving</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Septic-safe and environmentally friendly</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Long-lasting rolls for economy</span></li>
              </ul>
            </div>

            <router-link to="/contact" class="btn-primary inline-block">Request a Quote</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Product Specifications</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Roll Specifications</h3>
            <table class="w-full">
              <tbody class="divide-y">
                <tr><td class="py-3 font-medium">Ply Options</td><td class="py-3 text-gray-600">1-ply, 2-ply, 3-ply</td></tr>
                <tr><td class="py-3 font-medium">Sheet Size</td><td class="py-3 text-gray-600">4" x 4"</td></tr>
                <tr><td class="py-3 font-medium">Sheets per Roll</td><td class="py-3 text-gray-600">200, 300, 400, 500</td></tr>
                <tr><td class="py-3 font-medium">Roll Diameter</td><td class="py-3 text-gray-600">4.5" - 5"</td></tr>
                <tr><td class="py-3 font-medium">Core Size</td><td class="py-3 text-gray-600">Standard 1.6"</td></tr>
              </tbody>
            </table>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Packaging Options</h3>
            <ul class="space-y-3">
              <li class="flex items-start"><Package :size="20" class="text-primary-600 mr-3 mt-0.5" /><div><p class="font-medium">Individual Packs</p><p class="text-sm text-gray-600">4, 6, 8, 12, or 24 rolls per pack</p></div></li>
              <li class="flex items-start"><Package :size="20" class="text-primary-600 mr-3 mt-0.5" /><div><p class="font-medium">Bulk Cases</p><p class="text-sm text-gray-600">48 or 96 rolls per case</p></div></li>
              <li class="flex items-start"><Package :size="20" class="text-primary-600 mr-3 mt-0.5" /><div><p class="font-medium">Commercial Rolls</p><p class="text-sm text-gray-600">Jumbo rolls for dispensers</p></div></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ChevronRight, CheckCircle2, Package } from 'lucide-vue-next'
</script>

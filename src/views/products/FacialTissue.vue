<template>
  <div class="product-detail">
    <!-- Breadcrumb -->
    <div class="bg-gray-50 py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center space-x-2 text-sm text-gray-600">
          <router-link to="/" class="hover:text-primary-600">Home</router-link>
          <ChevronRight :size="16" />
          <router-link to="/products" class="hover:text-primary-600">Products</router-link>
          <ChevronRight :size="16" />
          <span class="text-gray-900 font-medium">Facial Tissue Paper</span>
        </div>
      </div>
    </div>

    <!-- Product Header -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=600&fit=crop" alt="Facial Tissue Paper" class="rounded-lg shadow-xl w-full" />
          </div>
          <div>
            <h1 class="text-4xl font-bold text-gray-900 mb-4">Facial Tissue Paper</h1>
            <p class="text-xl text-gray-600 mb-6">
              Premium quality facial tissues designed for ultimate softness and comfort. Perfect for everyday use in homes, offices, and hospitality settings.
            </p>

            <div class="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
              <h3 class="font-bold text-gray-900 mb-3">Key Features:</h3>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <CheckCircle2 :size="20" class="text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Ultra-soft and gentle on skin</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 :size="20" class="text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Available in 2-ply and 3-ply options</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 :size="20" class="text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Dermatologically tested and hypoallergenic</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle2 :size="20" class="text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Absorbent and durable</span>
                </li>
              </ul>
            </div>

            <router-link to="/contact" class="btn-primary inline-block">
              Request a Quote
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Specifications -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Product Specifications</h2>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Standard Specifications</h3>
            <table class="w-full">
              <tbody class="divide-y">
                <tr><td class="py-3 font-medium text-gray-700">Ply Count</td><td class="py-3 text-gray-600">2-ply, 3-ply</td></tr>
                <tr><td class="py-3 font-medium text-gray-700">Sheet Size</td><td class="py-3 text-gray-600">8.2" x 8.4"</td></tr>
                <tr><td class="py-3 font-medium text-gray-700">Sheets per Box</td><td class="py-3 text-gray-600">100, 150, 200</td></tr>
                <tr><td class="py-3 font-medium text-gray-700">Box Dimensions</td><td class="py-3 text-gray-600">4.5" x 9" x 3"</td></tr>
                <tr><td class="py-3 font-medium text-gray-700">Material</td><td class="py-3 text-gray-600">100% Virgin Pulp</td></tr>
              </tbody>
            </table>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Packaging Options</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <Package :size="20" class="text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p class="font-medium text-gray-900">Individual Boxes</p>
                  <p class="text-sm text-gray-600">Single box packaging for retail</p>
                </div>
              </li>
              <li class="flex items-start">
                <Package :size="20" class="text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p class="font-medium text-gray-900">Bulk Cartons</p>
                  <p class="text-sm text-gray-600">24 boxes per carton for wholesale</p>
                </div>
              </li>
              <li class="flex items-start">
                <Package :size="20" class="text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p class="font-medium text-gray-900">Custom Packaging</p>
                  <p class="text-sm text-gray-600">Private labeling and custom designs available</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Applications -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Applications & Use Cases</h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="app in applications" :key="app.title" class="bg-gray-50 rounded-lg p-6 text-center">
            <component :is="app.icon" :size="36" class="text-primary-600 mx-auto mb-3" />
            <h4 class="font-bold text-gray-900 mb-2">{{ app.title }}</h4>
            <p class="text-sm text-gray-600">{{ app.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Variants -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Available Variants</h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3">Classic</h3>
            <p class="text-gray-600 mb-4">Our standard facial tissue with superior softness and strength.</p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center"><span class="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>2-ply and 3-ply options</li>
              <li class="flex items-center"><span class="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>White color</li>
              <li class="flex items-center"><span class="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Unscented</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3">Soft Care</h3>
            <p class="text-gray-600 mb-4">Enhanced with lotion for extra skin care and comfort.</p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center"><span class="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>3-ply premium quality</li>
              <li class="flex items-center"><span class="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Aloe vera infused</li>
              <li class="flex items-center"><span class="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Dermatologically tested</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3">Scented</h3>
            <p class="text-gray-600 mb-4">Lightly scented tissues for a fresh, pleasant experience.</p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center"><span class="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>2-ply quality</li>
              <li class="flex items-center"><span class="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Lavender or Chamomile</li>
              <li class="flex items-center"><span class="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Long-lasting fragrance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ChevronRight, CheckCircle2, Package, Home as HomeIcon, Building2, Hotel, Briefcase } from 'lucide-vue-next'

const applications = [
  {
    icon: HomeIcon,
    title: 'Residential',
    description: 'Perfect for home use and family needs'
  },
  {
    icon: Building2,
    title: 'Commercial',
    description: 'Ideal for offices and workplaces'
  },
  {
    icon: Hotel,
    title: 'Hospitality',
    description: 'Premium quality for hotels and resorts'
  },
  {
    icon: Briefcase,
    title: 'Healthcare',
    description: 'Hygienic solution for medical facilities'
  }
]
</script>

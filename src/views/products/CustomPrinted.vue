<template>
  <div class="product-detail">
    <div class="bg-gray-50 py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center space-x-2 text-sm text-gray-600">
          <router-link to="/" class="hover:text-primary-600">Home</router-link>
          <ChevronRight :size="16" />
          <router-link to="/products" class="hover:text-primary-600">Products</router-link>
          <ChevronRight :size="16" />
          <span class="text-gray-900 font-medium">Custom Printed Tissue</span>
        </div>
      </div>
    </div>

    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12">
          <div><img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop" alt="Custom Printed Tissue" class="rounded-lg shadow-xl w-full" /></div>
          <div>
            <h1 class="text-4xl font-bold text-gray-900 mb-4">Custom Printed Tissue</h1>
            <p class="text-xl text-gray-600 mb-6">Personalized tissue products with your brand logo and custom designs. Perfect for brand promotion, events, and retail packaging.</p>
            <div class="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
              <h3 class="font-bold text-gray-900 mb-3">Key Features:</h3>
              <ul class="space-y-2">
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Full-color printing capabilities</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Logo and brand customization</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Multiple product types available</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Professional design assistance</span></li>
                <li class="flex items-start"><CheckCircle2 :size="20" class="text-primary-600 mr-2 mt-0.5" /><span>Fast turnaround time</span></li>
              </ul>
            </div>
            <router-link to="/contact" class="btn-primary inline-block">Request a Quote</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Printing Capabilities</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg p-6 shadow-md text-center">
            <Palette :size="48" class="text-primary-600 mx-auto mb-4" />
            <h4 class="font-bold text-gray-900 mb-2">Full Color</h4>
            <p class="text-sm text-gray-600">CMYK and Pantone color matching available</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-md text-center">
            <Image :size="48" class="text-primary-600 mx-auto mb-4" />
            <h4 class="font-bold text-gray-900 mb-2">Logo Printing</h4>
            <p class="text-sm text-gray-600">High-resolution logo and branding elements</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-md text-center">
            <Sparkles :size="48" class="text-primary-600 mx-auto mb-4" />
            <h4 class="font-bold text-gray-900 mb-2">Custom Designs</h4>
            <p class="text-sm text-gray-600">Unique patterns and artwork printing</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Design Guidelines</h2>
        <div class="bg-gray-50 rounded-lg p-8">
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="font-bold text-gray-900 mb-3">File Requirements</h4>
              <ul class="space-y-2 text-sm text-gray-600">
                <li class="flex items-start"><span class="w-2 h-2 bg-primary-600 rounded-full mr-2 mt-1.5"></span><span>Vector files preferred (AI, EPS, PDF)</span></li>
                <li class="flex items-start"><span class="w-2 h-2 bg-primary-600 rounded-full mr-2 mt-1.5"></span><span>High-resolution images (300 DPI minimum)</span></li>
                <li class="flex items-start"><span class="w-2 h-2 bg-primary-600 rounded-full mr-2 mt-1.5"></span><span>CMYK color mode</span></li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 mb-3">Order Details</h4>
              <ul class="space-y-2 text-sm text-gray-600">
                <li class="flex items-start"><span class="w-2 h-2 bg-primary-600 rounded-full mr-2 mt-1.5"></span><span>Minimum order: 10,000 units</span></li>
                <li class="flex items-start"><span class="w-2 h-2 bg-primary-600 rounded-full mr-2 mt-1.5"></span><span>Production time: 2-3 weeks</span></li>
                <li class="flex items-start"><span class="w-2 h-2 bg-primary-600 rounded-full mr-2 mt-1.5"></span><span>Free design proofs provided</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ChevronRight, CheckCircle2, Palette, Image, Sparkles } from 'lucide-vue-next'
</script>

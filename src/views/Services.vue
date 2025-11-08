<template>
  <div class="services">
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Services & Capabilities</h1>
        <p class="text-xl text-primary-100">Comprehensive Manufacturing Solutions Tailored to Your Needs</p>
      </div>
    </section>

    <!-- Main Services -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12">
          <div v-for="(service, index) in mainServices" :key="service.title" class="flex">
            <div class="flex-shrink-0 mr-6">
              <div class="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                <component :is="service.icon" :size="32" class="text-primary-600" />
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ service.title }}</h3>
              <p class="text-gray-600 mb-4">{{ service.description }}</p>
              <ul class="space-y-2">
                <li v-for="feature in service.features" :key="feature" class="flex items-start text-sm text-gray-600">
                  <CheckCircle2 :size="18" class="text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Custom Solutions -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="section-title">Custom Solutions</h2>
          <p class="section-subtitle">Tailored services to meet your specific requirements</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="solution in customSolutions" :key="solution.title" class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <component :is="solution.icon" :size="40" class="text-primary-600 mb-4" />
            <h4 class="text-lg font-bold text-gray-900 mb-2">{{ solution.title }}</h4>
            <p class="text-gray-600 text-sm">{{ solution.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quality Assurance -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Quality Testing & Assurance</h2>
            <p class="text-gray-600 mb-6">
              Our comprehensive quality control process ensures every product meets the highest standards. From raw material inspection to final product testing, we maintain strict quality protocols throughout the manufacturing process.
            </p>
            <ul class="space-y-3">
              <li v-for="test in qualityTests" :key="test" class="flex items-start">
                <Shield :size="20" class="text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">{{ test }}</span>
              </li>
            </ul>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop" alt="Quality Testing" class="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- Delivery & Logistics -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1">
            <img src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop" alt="Delivery" class="rounded-lg shadow-xl" />
          </div>
          <div class="order-1 md:order-2">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Delivery & Logistics</h2>
            <p class="text-gray-600 mb-6">
              Efficient logistics network ensuring timely delivery across the country. We work with trusted logistics partners to guarantee your orders arrive on time and in perfect condition.
            </p>
            <div class="space-y-4">
              <div v-for="delivery in deliveryFeatures" :key="delivery.title" class="flex items-start">
                <div class="flex-shrink-0 mr-4">
                  <component :is="delivery.icon" :size="24" class="text-primary-600" />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 mb-1">{{ delivery.title }}</h4>
                  <p class="text-sm text-gray-600">{{ delivery.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary-600 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-4">Let's Discuss Your Requirements</h2>
        <p class="text-xl text-primary-100 mb-8">
          Our team is ready to help you find the perfect tissue solution for your business
        </p>
        <router-link to="/contact" class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all inline-block">
          Contact Our Team
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Printer, Package, Palette, Settings, CheckCircle2, Shield, Truck, Clock, MapPin, Headphones } from 'lucide-vue-next'

const mainServices = [
  {
    icon: Printer,
    title: 'Custom Printing & Branding',
    description: 'Transform your tissue products into powerful branding tools with our custom printing services.',
    features: [
      'Full-color logo and design printing',
      'Brand customization and personalization',
      'Multiple printing techniques available',
      'Professional design support included'
    ]
  },
  {
    icon: Settings,
    title: 'Bulk Manufacturing',
    description: 'High-volume production capabilities to meet your large-scale requirements with consistent quality.',
    features: [
      'Production capacity of 50M+ units monthly',
      'Flexible order quantities',
      'Competitive bulk pricing',
      'Consistent quality across batches'
    ]
  },
  {
    icon: Package,
    title: 'Private Labeling',
    description: 'Launch your own branded tissue products with our comprehensive private label services.',
    features: [
      'Custom packaging design',
      'Brand development support',
      'Quality assurance protocols',
      'Flexible packaging options'
    ]
  },
  {
    icon: Palette,
    title: 'Design Assistance',
    description: 'Expert design team to help bring your vision to life with professional packaging and branding.',
    features: [
      'Professional graphic design services',
      'Packaging mockups and proofs',
      'Brand guidelines development',
      'Color matching and consultation'
    ]
  }
]

const customSolutions = [
  {
    icon: Settings,
    title: 'Product Development',
    description: 'Custom formulations and specifications for unique requirements'
  },
  {
    icon: Package,
    title: 'Packaging Solutions',
    description: 'Innovative packaging designs tailored to your needs'
  },
  {
    icon: Palette,
    title: 'Color Matching',
    description: 'Precise color matching for branded products'
  },
  {
    icon: Shield,
    title: 'Compliance Support',
    description: 'Assistance with regulatory and certification requirements'
  }
]

const qualityTests = [
  'Raw material inspection and verification',
  'In-process quality checks at every stage',
  'Tensile strength and absorbency testing',
  'Microbiological testing for hygiene products',
  'Final product inspection before shipping',
  'ISO 9001:2015 certified quality management'
]

const deliveryFeatures = [
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'Reliable delivery across all major cities and regions'
  },
  {
    icon: Clock,
    title: 'On-Time Guarantee',
    description: 'Committed delivery schedules with real-time tracking'
  },
  {
    icon: MapPin,
    title: 'Flexible Locations',
    description: 'Multiple warehouse locations for faster delivery'
  },
  {
    icon: Headphones,
    title: 'Logistics Support',
    description: '24/7 logistics support for order tracking and updates'
  }
]
</script>

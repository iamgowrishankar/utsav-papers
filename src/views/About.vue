<template>
  <div class="about">
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">About Premium Tissue</h1>
        <p class="text-xl text-primary-100">Your Trusted Partner in Quality Tissue Manufacturing</p>
      </div>
    </section>

    <!-- Company History -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p class="text-gray-600 mb-4 leading-relaxed">
              Founded in 1998, Premium Tissue Manufacturing has been at the forefront of producing high-quality tissue paper products for over 25 years. What started as a small family-owned business has grown into one of the leading tissue manufacturers in the region.
            </p>
            <p class="text-gray-600 mb-4 leading-relaxed">
              Our journey has been driven by an unwavering commitment to quality, innovation, and customer satisfaction. We've continuously invested in cutting-edge technology and sustainable practices to deliver products that meet the evolving needs of our customers.
            </p>
            <p class="text-gray-600 leading-relaxed">
              Today, we serve over 1000 clients across various sectors including hospitality, healthcare, retail, and industrial applications. Our state-of-the-art manufacturing facility produces millions of tissue products monthly while maintaining the highest quality standards.
            </p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" alt="Manufacturing Facility" class="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-md">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <Target :size="32" class="text-primary-600" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p class="text-gray-600 leading-relaxed">
              To manufacture and deliver premium quality tissue products that enhance everyday comfort and hygiene while maintaining environmental responsibility. We strive to exceed customer expectations through continuous innovation, sustainable practices, and exceptional service.
            </p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-md">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <Eye :size="32" class="text-primary-600" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p class="text-gray-600 leading-relaxed">
              To be the most trusted and preferred tissue manufacturing company globally, recognized for our commitment to quality, sustainability, and customer satisfaction. We aim to set industry benchmarks through innovation and responsible manufacturing practices.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="section-title">Our Core Values</h2>
          <p class="section-subtitle">The principles that guide everything we do</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="value in values" :key="value.title" class="text-center">
            <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <component :is="value.icon" :size="36" class="text-primary-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ value.title }}</h3>
            <p class="text-gray-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Manufacturing Capabilities -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="section-title">Manufacturing Excellence</h2>
          <p class="section-subtitle">State-of-the-art facilities and cutting-edge technology</p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop" alt="Production Line" class="rounded-lg shadow-xl" />
          </div>
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Advanced Infrastructure</h3>
            <ul class="space-y-4">
              <li v-for="capability in capabilities" :key="capability" class="flex items-start">
                <CheckCircle2 :size="24" class="text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                <span class="text-gray-600">{{ capability }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="section-title">Quality Certifications</h2>
          <p class="section-subtitle">Committed to international quality standards</p>
        </div>

        <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="cert in certifications" :key="cert.name" class="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
            <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award :size="32" class="text-white" />
            </div>
            <h4 class="font-bold text-gray-900 mb-1">{{ cert.name }}</h4>
            <p class="text-sm text-gray-600">{{ cert.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="section-title">Our Leadership</h2>
          <p class="section-subtitle">Meet the team driving our success</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="member in team" :key="member.name" class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img :src="member.image" :alt="member.name" class="w-full h-64 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-1">{{ member.name }}</h3>
              <p class="text-primary-600 font-medium mb-3">{{ member.position }}</p>
              <p class="text-gray-600 text-sm">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Target, Eye, Award, Heart, Leaf, Users, Lightbulb, CheckCircle2 } from 'lucide-vue-next'

const values = [
  {
    icon: Award,
    title: 'Quality',
    description: 'Uncompromising commitment to delivering excellence in every product'
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Honest and transparent in all our business dealings and relationships'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Environmentally responsible practices for a better tomorrow'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuously improving through technology and creative solutions'
  }
]

const capabilities = [
  'Fully automated production lines with capacity of 50+ million units monthly',
  'ISO 9001:2015 certified quality management systems',
  '25,000 sq ft state-of-the-art manufacturing facility',
  'Advanced quality control laboratory with modern testing equipment',
  'Sustainable raw material sourcing from certified suppliers',
  'Efficient logistics network ensuring timely delivery nationwide',
  'Custom printing and packaging capabilities',
  'Dedicated R&D team for product innovation'
]

const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management System'
  },
  {
    name: 'ISO 14001:2015',
    description: 'Environmental Management'
  },
  {
    name: 'FSC Certified',
    description: 'Sustainable Sourcing'
  },
  {
    name: 'FDA Approved',
    description: 'Food Safe Products'
  }
]

const team = [
  {
    name: 'John Anderson',
    position: 'Chief Executive Officer',
    bio: 'With 30+ years in the paper industry, John leads our strategic vision and growth initiatives.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop'
  },
  {
    name: 'Sarah Mitchell',
    position: 'Operations Director',
    bio: 'Sarah oversees our manufacturing operations ensuring efficiency and quality excellence.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
  },
  {
    name: 'Michael Chen',
    position: 'Quality Assurance Manager',
    bio: 'Michael ensures all our products meet the highest quality and safety standards.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
  }
]
</script>

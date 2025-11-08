<template>
  <div class="why-choose-us">
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Why Choose Premium Tissue?</h1>
        <p class="text-xl text-primary-100">Your Trusted Partner for Quality Tissue Products</p>
      </div>
    </section>

    <!-- Key Advantages -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="section-title">Our Competitive Advantages</h2>
          <p class="section-subtitle">What sets us apart in the tissue manufacturing industry</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="advantage in advantages" :key="advantage.title" class="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <component :is="advantage.icon" :size="32" class="text-primary-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ advantage.title }}</h3>
            <p class="text-gray-600">{{ advantage.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics -->
    <section class="py-20 bg-primary-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-5xl font-bold mb-2">{{ stat.value }}</div>
            <div class="text-primary-100">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications & Awards -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="section-title">Certifications & Accreditations</h2>
          <p class="section-subtitle">Committed to international quality and safety standards</p>
        </div>

        <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="cert in certifications" :key="cert.name" class="text-center">
            <div class="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award :size="48" class="text-primary-600" />
            </div>
            <h4 class="font-bold text-gray-900 mb-2">{{ cert.name }}</h4>
            <p class="text-sm text-gray-600">{{ cert.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Testimonials -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="section-title">What Our Clients Say</h2>
          <p class="section-subtitle">Real feedback from satisfied customers</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-white rounded-xl p-8 shadow-md">
            <div class="flex items-center mb-4">
              <Star v-for="i in 5" :key="i" :size="20" class="text-yellow-400 fill-current" />
            </div>
            <p class="text-gray-600 mb-6 italic">"{{ testimonial.text }}"</p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <span class="text-primary-600 font-bold text-lg">{{ testimonial.initial }}</span>
              </div>
              <div>
                <h4 class="font-bold text-gray-900">{{ testimonial.name }}</h4>
                <p class="text-sm text-gray-600">{{ testimonial.position }}</p>
                <p class="text-sm text-gray-500">{{ testimonial.company }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Client Logos -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="section-title">Trusted By Leading Brands</h2>
          <p class="section-subtitle">Proud to serve these amazing companies</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div v-for="i in 8" :key="i" class="bg-gray-50 rounded-lg p-8 flex items-center justify-center h-32 hover:shadow-md transition-shadow">
            <Building2 :size="48" class="text-gray-400" />
          </div>
        </div>
      </div>
    </section>

    <!-- Sustainability -->
    <section class="py-20 bg-green-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Commitment to Sustainability</h2>
            <p class="text-gray-600 mb-6">
              We believe in responsible manufacturing that protects our environment for future generations. Our eco-friendly practices span every aspect of our operations.
            </p>
            <ul class="space-y-4">
              <li v-for="practice in sustainabilityPractices" :key="practice" class="flex items-start">
                <Leaf :size="24" class="text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">{{ practice }}</span>
              </li>
            </ul>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop" alt="Sustainability" class="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary-600 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-4">Experience The Premium Difference</h2>
        <p class="text-xl text-primary-100 mb-8">
          Join hundreds of satisfied clients who trust us for their tissue product needs
        </p>
        <router-link to="/contact" class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all inline-block">
          Get Started Today
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Award, Star, Building2, Leaf, Shield, Zap, Users, Clock, TrendingUp, Heart } from 'lucide-vue-next'

const advantages = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'ISO certified manufacturing processes ensure every product meets the highest quality standards with consistent performance.'
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: '99% on-time delivery rate and consistent product quality you can depend on for your business needs.'
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Efficient production cycles and responsive service ensure quick order fulfillment without compromising quality.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: '25+ years of combined industry experience delivering exceptional customer service and technical support.'
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Continuous investment in technology and R&D to provide cutting-edge tissue solutions for modern needs.'
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    description: 'Dedicated account managers and 24/7 support ensuring your complete satisfaction with every order.'
  }
]

const stats = [
  { value: '25+', label: 'Years in Business' },
  { value: '1000+', label: 'Happy Clients' },
  { value: '50M+', label: 'Products Monthly' },
  { value: '99%', label: 'Satisfaction Rate' }
]

const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management' },
  { name: 'ISO 14001:2015', description: 'Environmental Management' },
  { name: 'FSC Certified', description: 'Sustainable Sourcing' },
  { name: 'FDA Approved', description: 'Food Safe Products' }
]

const testimonials = [
  {
    name: 'Robert Johnson',
    initial: 'RJ',
    position: 'Procurement Manager',
    company: 'Luxury Hotels Group',
    text: 'Premium Tissue has been our trusted supplier for 5 years. Their consistent quality and reliable delivery have made them an invaluable partner for our hotel chain.'
  },
  {
    name: 'Sarah Williams',
    initial: 'SW',
    position: 'Operations Director',
    company: 'MediCare Hospitals',
    text: 'The quality and hygiene standards of their products are exceptional. Their medical-grade tissues are perfect for our healthcare facilities, and their service is always professional.'
  },
  {
    name: 'David Chen',
    initial: 'DC',
    position: 'Owner',
    company: 'Chen Retail Stores',
    text: 'Working with Premium Tissue for our private label products has been fantastic. Their design team helped us create beautiful packaging, and the products sell themselves!'
  }
]

const sustainabilityPractices = [
  'Sourcing from FSC-certified sustainable forests',
  'Water recycling systems reducing consumption by 40%',
  'Solar power installation covering 30% of energy needs',
  'Zero-waste manufacturing with 95% recycling rate',
  'Eco-friendly packaging using biodegradable materials',
  'Carbon footprint reduction initiatives across operations'
]
</script>

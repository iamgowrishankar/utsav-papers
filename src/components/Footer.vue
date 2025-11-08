<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">PT</span>
            </div>
            <h3 class="text-xl font-bold">Premium Tissue</h3>
          </div>
          <p class="text-gray-400 text-sm mb-4">
            Manufacturing quality tissue products for over 25 years. Your trusted partner for all tissue paper needs.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">
              <Facebook :size="20" />
            </a>
            <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">
              <Twitter :size="20" />
            </a>
            <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">
              <Instagram :size="20" />
            </a>
            <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">
              <Linkedin :size="20" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-gray-400 hover:text-primary-400 transition-colors text-sm">Home</router-link></li>
            <li><router-link to="/about" class="text-gray-400 hover:text-primary-400 transition-colors text-sm">About Us</router-link></li>
            <li><router-link to="/products" class="text-gray-400 hover:text-primary-400 transition-colors text-sm">Products</router-link></li>
            <li><router-link to="/services" class="text-gray-400 hover:text-primary-400 transition-colors text-sm">Services</router-link></li>
            <li><router-link to="/gallery" class="text-gray-400 hover:text-primary-400 transition-colors text-sm">Gallery</router-link></li>
            <li><router-link to="/contact" class="text-gray-400 hover:text-primary-400 transition-colors text-sm">Contact</router-link></li>
          </ul>
        </div>

        <!-- Products -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Our Products</h4>
          <ul class="space-y-2">
            <li><router-link to="/products/facial-tissue" class="text-gray-400 hover:text-primary-400 transition-colors text-sm">Facial Tissue</router-link></li>
            <li><router-link to="/products/toilet-tissue" class="text-gray-400 hover:text-primary-400 transition-colors text-sm">Toilet Tissue</router-link></li>
            <li><router-link to="/products/paper-towel" class="text-gray-400 hover:text-primary-400 transition-colors text-sm">Paper Towel</router-link></li>
            <li><router-link to="/products/napkins" class="text-gray-400 hover:text-primary-400 transition-colors text-sm">Napkins</router-link></li>
            <li><router-link to="/products/custom-printed" class="text-gray-400 hover:text-primary-400 transition-colors text-sm">Custom Printed</router-link></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
          <ul class="space-y-3 text-sm text-gray-400">
            <li class="flex items-start space-x-3">
              <MapPin :size="18" class="text-primary-400 mt-0.5 flex-shrink-0" />
              <span>123 Manufacturing District, Industrial Area, City, State 12345</span>
            </li>
            <li class="flex items-center space-x-3">
              <Phone :size="18" class="text-primary-400 flex-shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li class="flex items-center space-x-3">
              <Mail :size="18" class="text-primary-400 flex-shrink-0" />
              <span>info@premiumtissue.com</span>
            </li>
            <li class="flex items-center space-x-3">
              <Clock :size="18" class="text-primary-400 flex-shrink-0" />
              <span>Mon - Fri: 9AM - 6PM</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
        <p>&copy; {{ currentYear }} Premium Tissue Manufacturing. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-vue-next'

const currentYear = computed(() => new Date().getFullYear())
</script>

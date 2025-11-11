<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">UP</span>
          </div>
          <div class="hidden sm:block">
            <h1 class="text-xl font-bold text-gray-900">Utsav Papers</h1>
            <p class="text-xs text-gray-600">Manufacturing Excellence</p>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About Us</router-link>

          <!-- Products Dropdown -->
          <div class="relative" @mouseenter="showProducts = true" @mouseleave="showProducts = false">
            <button class="nav-link flex items-center space-x-1">
              <span>Products</span>
              <ChevronDown :size="16" />
            </button>

            <transition name="dropdown">
              <div v-if="showProducts" class="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2">
                <router-link
                  v-for="product in products"
                  :key="product.slug"
                  :to="`/products/${product.slug}`"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                >
                  {{ product.name }}
                </router-link>
              </div>
            </transition>
          </div>

          <router-link to="/services" class="nav-link">Services</router-link>
          <router-link to="/why-choose-us" class="nav-link">Why Choose Us</router-link>
          <router-link to="/gallery" class="nav-link">Gallery</router-link>
          <router-link to="/contact" class="btn-primary text-sm">Contact Us</router-link>
        </div>

        <!-- Mobile menu button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden p-2">
          <Menu v-if="!mobileMenuOpen" :size="24" />
          <X v-else :size="24" />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <transition name="mobile-menu">
      <div v-if="mobileMenuOpen" class="lg:hidden bg-white border-t">
        <div class="px-4 py-4 space-y-3">
          <router-link to="/" class="mobile-nav-link" @click="mobileMenuOpen = false">Home</router-link>
          <router-link to="/about" class="mobile-nav-link" @click="mobileMenuOpen = false">About Us</router-link>

          <div class="space-y-2">
            <button @click="mobileProductsOpen = !mobileProductsOpen" class="mobile-nav-link w-full flex justify-between items-center text-left">
              <span>Products</span>
              <ChevronDown :size="16" :class="{ 'rotate-180': mobileProductsOpen }" class="transition-transform" />
            </button>
            <transition name="mobile-dropdown">
              <div v-if="mobileProductsOpen" class="pl-4 space-y-1 bg-gray-50 rounded-md py-2">
                <router-link
                  v-for="product in products"
                  :key="product.slug"
                  :to="`/products/${product.slug}`"
                  class="block py-2 px-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-white rounded transition-colors"
                  @click="mobileMenuOpen = false; mobileProductsOpen = false"
                >
                  {{ product.name }}
                </router-link>
              </div>
            </transition>
          </div>

          <router-link to="/services" class="mobile-nav-link" @click="mobileMenuOpen = false">Services</router-link>
          <router-link to="/why-choose-us" class="mobile-nav-link" @click="mobileMenuOpen = false">Why Choose Us</router-link>
          <router-link to="/gallery" class="mobile-nav-link" @click="mobileMenuOpen = false">Gallery</router-link>
          <router-link to="/contact" class="btn-primary w-full text-center" @click="mobileMenuOpen = false">Contact Us</router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, X, ChevronDown } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)
const showProducts = ref(false)
const mobileProductsOpen = ref(false)

const products = [
  { name: 'Facial Tissue Paper', slug: 'facial-tissue' },
  { name: 'Toilet Tissue Paper', slug: 'toilet-tissue' },
  { name: 'Paper Towel', slug: 'paper-towel' },
  { name: 'Napkins', slug: 'napkins' },
  { name: 'Handkerchiefs', slug: 'handkerchiefs' },
  { name: 'Tissue Paper Rolls', slug: 'tissue-rolls' },
  { name: 'Gift Wrapping Tissue', slug: 'gift-wrapping' },
  { name: 'Crepe Paper', slug: 'crepe-paper' },
  { name: 'Specialty Tissue Paper', slug: 'specialty-tissue' },
  { name: 'Custom Printed Tissue', slug: 'custom-printed' }
]
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200;
}

.mobile-nav-link {
  @apply block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  max-height: 0;
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  max-height: 500px;
}

.mobile-dropdown-enter-active,
.mobile-dropdown-leave-active {
  transition: all 0.2s ease;
}

.mobile-dropdown-enter-from,
.mobile-dropdown-leave-to {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}
</style>
<template>
  <div class="gallery">
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
        <p class="text-xl text-primary-100">Explore Our Products, Facilities, and Capabilities</p>
      </div>
    </section>

    <!-- Gallery Filters -->
    <section class="py-8 bg-gray-50 sticky top-20 z-40 border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-2 rounded-full font-medium transition-all',
              selectedCategory === category
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(image, index) in filteredImages"
            :key="index"
            class="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
            @click="openLightbox(index)"
          >
            <div class="aspect-w-16 aspect-h-12 overflow-hidden">
              <img
                :src="image.url"
                :alt="image.title"
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 class="text-lg font-bold mb-1">{{ image.title }}</h3>
                <p class="text-sm text-gray-200">{{ image.description }}</p>
              </div>
            </div>
            <div class="absolute top-3 right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
              {{ image.category }}
            </div>
          </div>
        </div>

        <div v-if="filteredImages.length === 0" class="text-center py-20">
          <p class="text-gray-500 text-lg">No images found in this category</p>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <transition name="fade">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        @click="closeLightbox"
      >
        <button
          @click="closeLightbox"
          class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        >
          <X :size="32" />
        </button>

        <button
          v-if="currentImageIndex > 0"
          @click.stop="previousImage"
          class="absolute left-4 text-white hover:text-gray-300 transition-colors"
        >
          <ChevronLeft :size="48" />
        </button>

        <button
          v-if="currentImageIndex < filteredImages.length - 1"
          @click.stop="nextImage"
          class="absolute right-4 text-white hover:text-gray-300 transition-colors"
        >
          <ChevronRight :size="48" />
        </button>

        <div class="max-w-5xl w-full" @click.stop>
          <img
            :src="filteredImages[currentImageIndex]?.url"
            :alt="filteredImages[currentImageIndex]?.title"
            class="w-full h-auto rounded-lg"
          />
          <div class="text-white mt-4 text-center">
            <h3 class="text-2xl font-bold mb-2">{{ filteredImages[currentImageIndex]?.title }}</h3>
            <p class="text-gray-300">{{ filteredImages[currentImageIndex]?.description }}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { X, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const categories = ['All', 'Products', 'Facility', 'Production', 'Custom Work', 'Packaging']
const selectedCategory = ref('All')
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

const images = [
  {
    url: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=600&fit=crop',
    title: 'Facial Tissue Boxes',
    description: 'Premium quality facial tissue in various packaging options',
    category: 'Products'
  },
  {
    url: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&h=600&fit=crop',
    title: 'Toilet Tissue Rolls',
    description: 'Soft and strong toilet tissue in multiple ply options',
    category: 'Products'
  },
  {
    url: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&h=600&fit=crop',
    title: 'Paper Towel Products',
    description: 'Highly absorbent paper towels for kitchen and commercial use',
    category: 'Products'
  },
  {
    url: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&h=600&fit=crop',
    title: 'Napkin Collection',
    description: 'Elegant napkins in various sizes and colors',
    category: 'Products'
  },
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    title: 'Manufacturing Facility',
    description: 'Our state-of-the-art 25,000 sq ft production facility',
    category: 'Facility'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
    title: 'Production Lines',
    description: 'Automated high-speed production equipment',
    category: 'Production'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop',
    title: 'Quality Control Lab',
    description: 'Advanced testing and quality assurance facilities',
    category: 'Facility'
  },
  {
    url: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&h=600&fit=crop',
    title: 'Gift Wrapping Tissue',
    description: 'Colorful tissue paper for gift wrapping and packaging',
    category: 'Products'
  },
  {
    url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    title: 'Custom Printed Tissue',
    description: 'Branded tissue products with custom logos and designs',
    category: 'Custom Work'
  },
  {
    url: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&h=600&fit=crop',
    title: 'Specialty Products',
    description: 'Industry-specific tissue solutions',
    category: 'Products'
  },
  {
    url: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=800&h=600&fit=crop',
    title: 'Jumbo Tissue Rolls',
    description: 'Industrial tissue rolls for commercial applications',
    category: 'Products'
  },
  {
    url: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop',
    title: 'Packaging Varieties',
    description: 'Multiple packaging options for different needs',
    category: 'Packaging'
  },
  {
    url: 'https://images.unsplash.com/photo-1492112007959-c35ae067c37b?w=800&h=600&fit=crop',
    title: 'Crepe Paper Selection',
    description: 'Vibrant colors for crafts and decorations',
    category: 'Products'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
    title: 'Production Floor',
    description: 'Clean and organized manufacturing environment',
    category: 'Production'
  },
  {
    url: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&h=600&fit=crop',
    title: 'Pocket Handkerchiefs',
    description: 'Convenient individually wrapped tissue handkerchiefs',
    category: 'Products'
  }
]

const filteredImages = computed(() => {
  if (selectedCategory.value === 'All') {
    return images
  }
  return images.filter(img => img.category === selectedCategory.value)
})

const openLightbox = (index) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}

const nextImage = () => {
  if (currentImageIndex.value < filteredImages.value.length - 1) {
    currentImageIndex.value++
  }
}

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

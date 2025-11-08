<template>
  <div class="contact">
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p class="text-xl text-primary-100">Get in Touch - We're Here to Help</p>
      </div>
    </section>

    <!-- Contact Information & Form -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-12">
          <!-- Contact Information -->
          <div class="lg:col-span-1">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p class="text-gray-600 mb-8">
              Have questions about our products or services? Our team is ready to assist you. Reach out to us through any of these channels.
            </p>

            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <MapPin :size="24" class="text-primary-600" />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 mb-1">Address</h4>
                  <p class="text-gray-600 text-sm">48A, SIDCO Industrial Estate,<br>Narasothipatti, Salem<br>Tamilnadu 636004</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Phone :size="24" class="text-primary-600" />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 mb-1">Phone</h4>
                  <p class="text-gray-600 text-sm">Sales: +91 97896 20197</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Mail :size="24" class="text-primary-600" />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 mb-1">Email</h4>
                  <p class="text-gray-600 text-sm">info@utsavpapers.com<br>sales@utsavpapers.com</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Clock :size="24" class="text-primary-600" />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 mb-1">Business Hours</h4>
                  <p class="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday: 9:00 AM - 1:00 PM<br>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div class="mt-8">
              <h4 class="font-bold text-gray-900 mb-4">Follow Us</h4>
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                  <Facebook :size="20" />
                </a>
                <a href="#" class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                  <Twitter :size="20" />
                </a>
                <a href="#" class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                  <Instagram :size="20" />
                </a>
                <a href="#" class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                  <Linkedin :size="20" />
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <div class="bg-gray-50 rounded-xl p-8 shadow-md">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                <div class="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Field
                      name="name"
                      type="text"
                      class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      :class="{ 'border-red-500': errors.name }"
                      placeholder="John Doe"
                    />
                    <ErrorMessage name="name" class="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <Field
                      name="email"
                      type="email"
                      class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      :class="{ 'border-red-500': errors.email }"
                      placeholder="john@example.com"
                    />
                    <ErrorMessage name="email" class="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <Field
                      name="phone"
                      type="tel"
                      class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      :class="{ 'border-red-500': errors.phone }"
                      placeholder="+91 98765 43210"
                    />
                    <ErrorMessage name="phone" class="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Product Interest</label>
                    <Field
                      name="productInterest"
                      as="select"
                      class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a product...</option>
                      <option value="facial-tissue">Facial Tissue Paper</option>
                      <option value="toilet-tissue">Toilet Tissue Paper</option>
                      <option value="paper-towel">Paper Towel</option>
                      <option value="napkins">Napkins</option>
                      <option value="custom-printed">Custom Printed Tissue</option>
                      <option value="other">Other</option>
                    </Field>
                  </div>
                </div>

                <div class="mb-6">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <Field
                    name="subject"
                    type="text"
                    class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    :class="{ 'border-red-500': errors.subject }"
                    placeholder="How can we help you?"
                  />
                  <ErrorMessage name="subject" class="text-red-500 text-sm mt-1" />
                </div>

                <div class="mb-6">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <Field
                    name="message"
                    as="textarea"
                    rows="5"
                    class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    :class="{ 'border-red-500': errors.message }"
                    placeholder="Tell us more about your requirements..."
                  />
                  <ErrorMessage name="message" class="text-red-500 text-sm mt-1" />
                </div>

                <div class="flex items-center justify-between">
                  <p class="text-sm text-gray-600">* Required fields</p>
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="btn-primary inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send :size="20" class="mr-2" />
                    {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                  </button>
                </div>
              </Form>

              <!-- Success Message -->
              <transition name="fade">
                <div v-if="submitSuccess" class="mt-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
                  <CheckCircle2 :size="24" class="text-green-600 mr-3 flex-shrink-0" />
                  <div>
                    <h4 class="font-bold text-green-900 mb-1">Message Sent Successfully!</h4>
                    <p class="text-sm text-green-700">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Visit Our Facility</h2>
        <div class="bg-gray-300 rounded-lg overflow-hidden h-96 flex items-center justify-center">
          <div class="text-center">
            <MapPin :size="48" class="text-gray-500 mx-auto mb-4" />
            <p class="text-gray-600">Map integration placeholder</p>
            <p class="text-sm text-gray-500">123 Manufacturing District, Industrial Area</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-vue-next'

const isSubmitting = ref(false)
const submitSuccess = ref(false)

const schema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Please enter a valid email'),
  phone: yup.string().required('Phone number is required').min(10, 'Please enter a valid phone number'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
  productInterest: yup.string()
})

const onSubmit = async (values) => {
  isSubmitting.value = true
  submitSuccess.value = false

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))

  console.log('Form submitted:', values)

  isSubmitting.value = false
  submitSuccess.value = true

  // Hide success message after 5 seconds
  setTimeout(() => {
    submitSuccess.value = false
  }, 5000)
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

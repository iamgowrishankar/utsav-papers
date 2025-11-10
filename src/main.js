import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Handle 404 redirects from GitHub Pages
const redirect = sessionStorage.getItem('redirect')
if (redirect) {
  sessionStorage.removeItem('redirect')
  // Wait for router to be ready, then navigate
  router.isReady().then(() => {
    // Remove the base path from the stored URL
    const basePath = import.meta.env.BASE_URL
    const path = redirect.startsWith(basePath)
      ? redirect.slice(basePath.length)
      : redirect
    router.replace(path || '/')
  })
}

app.mount('#app')
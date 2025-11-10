import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// --- FIX: Handle GitHub Pages redirect before mounting ---
const url = new URL(window.location.href)
const redirectPath = url.searchParams.get('redirect')
if (redirectPath) {
  // Clean the URL (so redirect param disappears)
  window.history.replaceState(null, '', redirectPath)
}

app.use(router)

// Mount after router is ready (and redirect applied)
router.isReady().then(() => {
  app.mount('#app')
})

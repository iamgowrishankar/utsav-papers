import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Handle GitHub Pages redirect parameter
router.isReady().then(() => {
  const url = new URL(window.location.href)
  const redirectPath = url.searchParams.get('redirect')
  if (redirectPath) {
    router.replace(redirectPath)
  }
})

app.use(router).mount('#app')

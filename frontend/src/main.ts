import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { initializeLanguage } from './composables/useLanguage'
import { initializeTheme } from './composables/useTheme'

initializeLanguage()
initializeTheme()
createApp(App).mount('#root')

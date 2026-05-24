import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { initializeTheme } from './composables/useTheme'

initializeTheme()
createApp(App).mount('#root')

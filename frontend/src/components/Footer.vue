<script setup lang="ts">
import { computed } from 'vue'
import { TRANSLATIONS } from '../content'
import { useLanguage } from '../composables/useLanguage'

const { language } = useLanguage()
const copy = computed(() => TRANSLATIONS[language.value])
</script>

<template>
  <footer class="app-footer">
<<<<<<< Updated upstream
    {{ copy.footer }}
=======
    Fast, simple, and ready for future Google Gemini integration.
    <a href="https://www.linkedin.com/in/victorpazbraga/" class="footer-link" target="_blank" rel="noopener noreferrer">
      <br/>Created by: <b>Victor Paz Braga</b>
    </a>
>>>>>>> Stashed changes
  </footer>
</template>
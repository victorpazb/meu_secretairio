<script setup lang="ts">
import { computed } from 'vue'
import { TRANSLATIONS } from '../content'
import { useLanguage } from '../composables/useLanguage'

const { language } = useLanguage()
const copy = computed(() => TRANSLATIONS[language.value])
</script>

<template>
  <footer class="app-footer">
    {{ copy.footer }}
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { TRANSLATIONS } from '../content'
import { useLanguage } from '../composables/useLanguage'
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const { language, toggleLanguage } = useLanguage()
const copy = computed(() => TRANSLATIONS[language.value])
</script>

<template>
  <header class="app-header">
    <div class="app-header-copy">
      <p class="app-kicker">{{ copy.header.kicker }}</p>
      <h1 class="app-title">Meu Secretário</h1>
      <p class="app-subtitle">{{ copy.header.subtitle }}</p>
    </div>

    <div class="app-header-actions">
      <button type="button" class="language-toggle" @click="toggleLanguage">
        <span>{{ language === 'pt-BR' ? copy.languageToggle.en : copy.languageToggle.pt }}</span>
      </button>

      <button type="button" class="theme-toggle" @click="toggleTheme">
        <span>{{ isDark ? '☀️' : '🌙' }}</span>
        <span class="theme-toggle__label">{{ isDark ? copy.header.themeLight : copy.header.themeDark }}</span>
      </button>
    </div>
  </header>
</template>

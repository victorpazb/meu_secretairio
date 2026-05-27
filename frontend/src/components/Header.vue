<template>
  <header class="app-header">
    <div class="app-header-copy">
      <p class="app-kicker">{{ copy.header.kicker }}</p>
      <div class="app-header-brand">
        <img class="app-logo" src="/favicon.svg" alt="" aria-hidden="true" />
        <h1 class="app-title">Meu Secretário</h1>
      </div>
      <p class="app-subtitle">{{ copy.header.subtitle }}</p>
    </div>

    <div class="app-header-actions">
      <button
          type="button"
          class="language-switch"
          role="switch"
          :aria-checked="isPortuguese"
          :aria-label="languageSwitchLabel"
          @click="toggleLanguage"
      >
        <span class="language-switch__flag" :class="{ 'language-switch__flag--active': isPortuguese }">
          <svg class="language-switch__flag-icon" viewBox="0 0 24 16" aria-hidden="true" focusable="false">
            <rect width="24" height="16" rx="3" fill="#009c3b" />
            <path d="M12 2.15 20 8 12 13.85 4 8Z" fill="#ffdf00" />
            <circle cx="12" cy="8" r="3.2" fill="#002776" />
          </svg>
        </span>
        <span class="language-switch__track" aria-hidden="true">
          <span class="language-switch__thumb" :class="{ 'language-switch__thumb--english': !isPortuguese }" />
        </span>
        <span class="language-switch__flag" :class="{ 'language-switch__flag--active': !isPortuguese }">
          <svg class="language-switch__flag-icon" viewBox="0 0 24 16" aria-hidden="true" focusable="false">
            <rect width="24" height="16" rx="3" fill="#ffffff" />
            <rect y="0" width="24" height="2" fill="#b22234" />
            <rect y="4" width="24" height="2" fill="#b22234" />
            <rect y="8" width="24" height="2" fill="#b22234" />
            <rect y="12" width="24" height="2" fill="#b22234" />
            <rect width="10.2" height="8.8" fill="#3c3b6e" />
            <g fill="#ffffff">
              <circle cx="1.6" cy="1.6" r="0.35" />
              <circle cx="3.2" cy="1.6" r="0.35" />
              <circle cx="4.8" cy="1.6" r="0.35" />
              <circle cx="1.6" cy="3.1" r="0.35" />
              <circle cx="3.2" cy="3.1" r="0.35" />
              <circle cx="4.8" cy="3.1" r="0.35" />
              <circle cx="1.6" cy="4.6" r="0.35" />
              <circle cx="3.2" cy="4.6" r="0.35" />
              <circle cx="4.8" cy="4.6" r="0.35" />
            </g>
          </svg>
        </span>
      </button>

      <button type="button" class="theme-toggle" @click="toggleTheme">
        <span>{{ isDark ? '☀️' : '🌙' }}</span>
        <span class="theme-toggle__label">{{ isDark ? copy.header.themeLight : copy.header.themeDark }}</span>
      </button>
    </div>
  </header>
</template>


<script setup lang="ts">
import { computed } from 'vue'
import { TRANSLATIONS } from '../content'
import { useLanguage } from '../composables/useLanguage'
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const { language, isPortuguese, toggleLanguage } = useLanguage()
const copy = computed(() => TRANSLATIONS[language.value])
const languageSwitchLabel = computed(() =>
  isPortuguese.value ? 'Trocar para inglês' : 'Switch to Portuguese',
)
</script>

<script setup lang="ts">
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <header class="app-header">
    <div class="app-header-copy">
      <p class="app-kicker">AI text utility</p>
      <h1 class="app-title">Meu Secretairio</h1>
      <p class="app-subtitle">
        A calm workspace inspired by Claude, with a bright default theme and an easy dark mode toggle.
      </p>
    </div>

    <button type="button" class="theme-toggle" @click="toggleTheme">
      <span>{{ isDark ? '☀️' : '🌙' }}</span>
      <span class="theme-toggle__label">{{ isDark ? 'Light mode' : 'Dark mode' }}</span>
    </button>
  </header>
</template>

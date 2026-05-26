<script setup lang="ts">
import { computed } from 'vue'
import { TRANSLATIONS } from '../content'
import { useLanguage } from '../composables/useLanguage'
import { TOOL_TABS, type ToolTab } from '../types/tool'

defineProps<{
  activeTab: ToolTab
}>()

const emit = defineEmits<{
  tabChange: [tab: ToolTab]
}>()

const { language } = useLanguage()
const tabs: ToolTab[] = TOOL_TABS
const tabLabels = computed(() => TRANSLATIONS[language.value].tabs)
</script>

<template>
  <nav class="tab-group">
    <button
      v-for="tab in tabs"
      :key="tab"
      type="button"
      @click="emit('tabChange', tab)"
      :class="[
        'tab-button',
        tab === activeTab ? 'tab-button--active' : '',
      ]"
    >
      {{ tabLabels[tab] }}
    </button>
  </nav>
</template>

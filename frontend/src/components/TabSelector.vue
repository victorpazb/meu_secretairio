<script setup lang="ts">
import { TOOL_LABELS, type ToolTab } from '../types/tool'

defineProps<{
  activeTab: ToolTab
}>()

const emit = defineEmits<{
  tabChange: [tab: ToolTab]
}>()

const tabs: ToolTab[] = ['corrector', 'summarizer', 'translator']
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
      {{ TOOL_LABELS[tab] }}
    </button>
  </nav>
</template>

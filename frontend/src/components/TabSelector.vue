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
  <nav class="mb-4 grid grid-cols-3 gap-2 rounded-xl bg-slate-900/70 p-1.5 sm:mb-5">
    <button
      v-for="tab in tabs"
      :key="tab"
      type="button"
      @click="emit('tabChange', tab)"
      :class="[
        'rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200',
        tab === activeTab
          ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30'
          : 'text-slate-300 hover:bg-white/10 hover:text-white',
      ]"
    >
      {{ TOOL_LABELS[tab] }}
    </button>
  </nav>
</template>

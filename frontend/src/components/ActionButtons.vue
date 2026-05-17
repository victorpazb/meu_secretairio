<script setup lang="ts">
import type { ActionOption } from '../types/tool'

defineProps<{
  options: ActionOption[]
  selectedAction: string
}>()

const emit = defineEmits<{
  actionChange: [action: string]
}>()
</script>

<template>
  <div class="mb-4 flex flex-wrap gap-2 sm:mb-5">
    <button
      v-for="option in options"
      :key="option.id"
      type="button"
      @click="emit('actionChange', option.id)"
      :class="[
        'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
        selectedAction === option.id
          ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/30'
          : 'bg-slate-800 text-slate-200 hover:bg-slate-700',
      ]"
    >
      {{ option.label }}
    </button>
  </div>
</template>

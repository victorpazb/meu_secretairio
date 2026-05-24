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
  <div class="action-list">
    <button
      v-for="option in options"
      :key="option.id"
      type="button"
      @click="emit('actionChange', option.id)"
      :class="[
        'action-pill',
        selectedAction === option.id ? 'action-pill--active' : '',
      ]"
    >
      {{ option.label }}
    </button>
  </div>
</template>

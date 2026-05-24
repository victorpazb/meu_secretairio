<script setup lang="ts">
defineProps<{
  input: string
  result: string
  isLoading: boolean
}>()

const emit = defineEmits<{
  inputChange: [value: string]
}>()
</script>

<template>
  <div class="text-grid">
    <label class="field">
      <span class="field-label">Input</span>
      <textarea
        :value="input"
        @input="emit('inputChange', ($event.target as HTMLTextAreaElement).value)"
        placeholder="Paste your text here..."
        class="text-field"
      />
    </label>

    <div class="field">
      <span class="field-label">Result</span>
      <div class="text-result">
        {{ isLoading ? 'Generating...' : result || 'Generated text appears here.' }}
      </div>
    </div>
  </div>
</template>

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
  <div class="grid gap-4 lg:grid-cols-2">
    <label class="space-y-2">
      <span class="text-sm font-medium text-slate-300">Input</span>
      <textarea
        :value="input"
        @input="emit('inputChange', ($event.target as HTMLTextAreaElement).value)"
        placeholder="Paste your text here..."
        class="h-64 w-full resize-y rounded-xl border border-white/10 bg-slate-950/80 p-4 text-sm text-slate-100 outline-none transition focus:border-indigo-400"
      />
    </label>

    <div class="space-y-2">
      <span class="text-sm font-medium text-slate-300">Result</span>
      <div class="h-64 overflow-y-auto whitespace-pre-wrap rounded-xl border border-white/10 bg-slate-950/80 p-4 text-sm text-slate-100">
        {{ isLoading ? 'Generating...' : result || 'Generated text appears here.' }}
      </div>
    </div>
  </div>
</template>

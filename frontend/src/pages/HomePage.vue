<script setup lang="ts">
import ActionButtons from '../components/ActionButtons.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import TabSelector from '../components/TabSelector.vue'
import TextAreas from '../components/TextAreas.vue'
import { useTextTool } from '../composables/useTextTool'

const {
  tab,
  setTab,
  actions,
  selectedAction,
  setSelectedAction,
  input,
  result,
  isLoading,
  toast,
  handleGenerate,
  handleCopy,
  handlePdfPlaceholder,
} = useTextTool()

function handleInputChange(value: string) {
  input.value = value
}
</script>

<template>
  <div class="mx-auto min-h-screen w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
    <Header />

    <main class="rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-2xl shadow-black/20 backdrop-blur sm:p-6">
      <TabSelector :active-tab="tab" @tab-change="setTab" />
      <ActionButtons :options="actions" :selected-action="selectedAction" @action-change="setSelectedAction" />

      <div class="mb-4 flex flex-wrap gap-2 sm:mb-5">
        <button
          type="button"
          @click="handleGenerate"
          :disabled="isLoading"
          class="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {{ isLoading ? 'Generating...' : 'Generate' }}
        </button>
        <button
          type="button"
          @click="handleCopy"
          :disabled="!result.trim()"
          class="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-indigo-300 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          Copy
        </button>
        <button
          type="button"
          @click="handlePdfPlaceholder"
          class="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-indigo-300 hover:text-white"
        >
          Download PDF (soon)
        </button>
      </div>

      <TextAreas :input="input" :result="result" :is-loading="isLoading" @input-change="handleInputChange" />
    </main>

    <div
      v-if="toast"
      class="fixed bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-lg bg-slate-800 px-4 py-2 text-sm text-white shadow-lg"
    >
      {{ toast }}
    </div>

    <Footer />
  </div>
</template>

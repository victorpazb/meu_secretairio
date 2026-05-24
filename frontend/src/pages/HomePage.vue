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
  <div class="app-shell">
    <div class="app-container">
      <Header />

      <main class="app-card">
        <TabSelector :active-tab="tab" @tab-change="setTab" />
        <ActionButtons :options="actions" :selected-action="selectedAction" @action-change="setSelectedAction" />

        <div class="control-row">
          <button
            type="button"
            @click="handleGenerate"
            :disabled="isLoading"
            class="button-primary"
          >
            {{ isLoading ? 'Generating...' : 'Generate' }}
          </button>
          <button
            type="button"
            @click="handleCopy"
            :disabled="!result.trim()"
            class="button-secondary"
          >
            Copy
          </button>
          <button
            type="button"
            @click="handlePdfPlaceholder"
            class="button-secondary button-secondary--ghost"
          >
            Download PDF (soon)
          </button>
        </div>

        <TextAreas :input="input" :result="result" :is-loading="isLoading" @input-change="handleInputChange" />
      </main>

      <div
        v-if="toast"
        class="toast"
      >
        {{ toast }}
      </div>

      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ActionButtons from '../components/ActionButtons.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import TabSelector from '../components/TabSelector.vue'
import TextAreas from '../components/TextAreas.vue'
import { TRANSLATIONS } from '../content'
import { useLanguage } from '../composables/useLanguage'
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
const { language } = useLanguage()
const copy = computed(() => TRANSLATIONS[language.value])

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
            {{ isLoading ? copy.controls.generating : copy.controls.generate }}
          </button>
          <button
              type="button"
              @click="handleCopy"
              :disabled="!result.trim()"
              class="button-secondary"
          >
            {{ copy.controls.copy }}
          </button>
          <button
              type="button"
              @click="handlePdfPlaceholder"
              class="button-secondary button-secondary--ghost"
          >
            {{ copy.controls.pdf }}
          </button>
        </div>

        <TextAreas
            :input="input"
            :result="result"
            :is-loading="isLoading"
            @input-change="handleInputChange"
            @copy="handleCopy"
            @retry="handleGenerate"
        />
      </main>

      <Transition name="toast">
        <div
            v-if="toast"
            class="toast"
            role="status"
            aria-live="polite"
        >
          {{ toast }}
        </div>
      </Transition>

      <Footer />
    </div>
  </div>
</template>

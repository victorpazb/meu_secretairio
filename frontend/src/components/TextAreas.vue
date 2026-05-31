<script setup lang="ts">
import { computed } from 'vue'
import { TRANSLATIONS } from '../content'
import { useLanguage } from '../composables/useLanguage'

const props = defineProps<{
  input: string
  result: string
  isLoading: boolean
}>()

const emit = defineEmits<{
  inputChange: [value: string]
  copy: []
  retry: []
}>()

const { language } = useLanguage()
const copy = computed(() => TRANSLATIONS[language.value])

const MAX_CHARS = 20000
const charCount = computed(() => props.input.length)
const isNearLimit = computed(() => charCount.value >= MAX_CHARS * 0.9)
const isOverLimit = computed(() => charCount.value > MAX_CHARS)
const canCopy = computed(() => !props.isLoading && props.result.trim().length > 0)
</script>

<template>
  <div class="text-grid">
    <label class="field">
      <span class="field-label">
        {{ copy.fields.input }}
        <span
          class="char-counter"
          :class="{
            'char-counter--warning': isNearLimit && !isOverLimit,
            'char-counter--danger': isOverLimit,
          }"
          aria-live="polite"
        >
          {{ charCount.toLocaleString(language) }} / {{ MAX_CHARS.toLocaleString(language) }}
        </span>
      </span>
      <textarea
        :value="input"
        @input="emit('inputChange', ($event.target as HTMLTextAreaElement).value)"
        :placeholder="copy.fields.inputPlaceholder"
        class="text-field"
      />
    </label>

    <div class="field">
      <span class="field-label">{{ copy.fields.result }}</span>
      <div class="text-result-wrapper">
        <div v-if="canCopy" class="text-result-actions">
          <button
            type="button"
            class="text-result-action"
            @click="emit('retry')"
            :aria-label="copy.controls.retry"
            :title="copy.controls.retry"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 12a9 9 0 1 0 3-6.7" />
              <path d="M3 4v5h5" />
            </svg>
          </button>
          <button
            type="button"
            class="text-result-action"
            @click="emit('copy')"
            :aria-label="copy.controls.copy"
            :title="copy.controls.copy"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          </button>
        </div>
        <div v-if="isLoading" class="text-result text-result--loading" aria-busy="true">
          <span class="skeleton-line" style="width: 92%" />
          <span class="skeleton-line" style="width: 78%" />
          <span class="skeleton-line" style="width: 85%" />
          <span class="skeleton-line" style="width: 64%" />
        </div>
        <div v-else class="text-result" :class="{ 'text-result--empty': !result }">
          {{ result || copy.fields.resultEmpty }}
        </div>
      </div>
    </div>
  </div>
</template>

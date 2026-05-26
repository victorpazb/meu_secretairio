<script setup lang="ts">
import { computed } from 'vue'
import { TRANSLATIONS } from '../content'
import { useLanguage } from '../composables/useLanguage'

defineProps<{
  input: string
  result: string
  isLoading: boolean
}>()

const emit = defineEmits<{
  inputChange: [value: string]
}>()

const { language } = useLanguage()
const copy = computed(() => TRANSLATIONS[language.value])
</script>

<template>
  <div class="text-grid">
    <label class="field">
      <span class="field-label">{{ copy.fields.input }}</span>
      <textarea
        :value="input"
        @input="emit('inputChange', ($event.target as HTMLTextAreaElement).value)"
        :placeholder="copy.fields.inputPlaceholder"
        class="text-field"
      />
    </label>

    <div class="field">
      <span class="field-label">{{ copy.fields.result }}</span>
      <div class="text-result">
        {{ isLoading ? copy.fields.resultLoading : result || copy.fields.resultEmpty }}
      </div>
    </div>
  </div>
</template>

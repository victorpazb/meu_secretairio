import { computed, ref } from 'vue'

export type Language = 'pt-BR' | 'en-US'

const STORAGE_KEY = 'meu_secretairio_language'
const language = ref<Language>('pt-BR')
let isInitialized = false

function applyLanguage(nextLanguage: Language) {
  if (typeof document === 'undefined') {
    return
  }

  document.documentElement.lang = nextLanguage
}

function getPreferredLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'pt-BR'
  }

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY)
  if (storedLanguage === 'pt-BR' || storedLanguage === 'en-US') {
    return storedLanguage
  }

  return 'pt-BR'
}

export function initializeLanguage() {
  if (isInitialized) {
    return
  }

  isInitialized = true
  const initialLanguage = getPreferredLanguage()
  language.value = initialLanguage
  applyLanguage(initialLanguage)
}

export function useLanguage() {
  function setLanguage(nextLanguage: Language) {
    language.value = nextLanguage

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage)
    }

    applyLanguage(nextLanguage)
  }

  function toggleLanguage() {
    setLanguage(language.value === 'pt-BR' ? 'en-US' : 'pt-BR')
  }

  return {
    language: computed(() => language.value),
    isPortuguese: computed(() => language.value === 'pt-BR'),
    isEnglish: computed(() => language.value === 'en-US'),
    setLanguage,
    toggleLanguage,
  }
}

import { computed, ref, watch } from 'vue'
import { generateText } from '../services/api'
import { TRANSLATIONS } from '../content'
import { useLanguage } from './useLanguage'
import { TOOL_ACTION_IDS, type ActionOption, type ToolTab } from '../types/tool'

export function useTextTool() {
  const { language } = useLanguage()
  const tab = ref<ToolTab>('corrector')
  const selectedActions = ref<Record<ToolTab, string>>({
    corrector: TOOL_ACTION_IDS.corrector[0],
    summarizer: TOOL_ACTION_IDS.summarizer[0],
    translator: TOOL_ACTION_IDS.translator[0],
  })

  const input = ref('')
  const result = ref('')
  const isLoading = ref(false)
  const toast = ref('')

  watch(toast, (nextToast, _previousToast, onCleanup) => {
    if (!nextToast) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      toast.value = ''
    }, 2000)

    onCleanup(() => window.clearTimeout(timeoutId))
  })

  const actions = computed<ActionOption[]>(() => {
    const localeActions = TRANSLATIONS[language.value].actions[tab.value]

    return TOOL_ACTION_IDS[tab.value].map((actionId) => ({
      id: actionId,
      label: localeActions[actionId] ?? actionId,
    }))
  })
  const selectedAction = computed(() => selectedActions.value[tab.value])

  function setTab(nextTab: ToolTab) {
    tab.value = nextTab
    result.value = ''
  }

  function setSelectedAction(nextAction: string) {
    selectedActions.value = {
      ...selectedActions.value,
      [tab.value]: nextAction,
    }
  }

  async function handleGenerate() {
    if (!input.value.trim()) {
      toast.value = TRANSLATIONS[language.value].toasts.pasteBeforeGenerating
      return
    }

    isLoading.value = true

    try {
      const generatedText = await generateText(tab.value, {
        text: input.value,
        action: selectedAction.value,
      })
      result.value = generatedText
    } catch (error) {
      toast.value = error instanceof Error ? error.message : TRANSLATIONS[language.value].toasts.unexpectedError
    } finally {
      isLoading.value = false
    }
  }

  async function handleCopy() {
    if (!result.value.trim()) {
      return
    }

    await navigator.clipboard.writeText(result.value)
    toast.value = TRANSLATIONS[language.value].controls.copied
  }

  function handlePdfPlaceholder() {
    toast.value = TRANSLATIONS[language.value].controls.pdfSoon
  }

  return {
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
  }
}

import { computed, ref, watch } from 'vue'
import { generateText } from '../services/api'
import { TOOL_ACTIONS, type ToolTab } from '../types/tool'

export function useTextTool() {
  const tab = ref<ToolTab>('corrector')
  const selectedActions = ref<Record<ToolTab, string>>({
    corrector: TOOL_ACTIONS.corrector[0].id,
    summarizer: TOOL_ACTIONS.summarizer[0].id,
    translator: TOOL_ACTIONS.translator[0].id,
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

  const actions = computed(() => TOOL_ACTIONS[tab.value])
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
      toast.value = 'Paste text before generating.'
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
      toast.value = error instanceof Error ? error.message : 'Unexpected error.'
    } finally {
      isLoading.value = false
    }
  }

  async function handleCopy() {
    if (!result.value.trim()) {
      return
    }

    await navigator.clipboard.writeText(result.value)
    toast.value = 'Result copied!'
  }

  function handlePdfPlaceholder() {
    toast.value = 'PDF download will be available soon.'
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

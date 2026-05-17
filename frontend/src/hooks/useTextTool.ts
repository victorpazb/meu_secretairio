import { useEffect, useMemo, useState } from 'react'
import { generateText } from '../services/api'
import { TOOL_ACTIONS, type ToolTab } from '../types/tool'

export function useTextTool() {
  const [tab, setTab] = useState<ToolTab>('corrector')
  const [selectedActions, setSelectedActions] = useState<Record<ToolTab, string>>({
    corrector: TOOL_ACTIONS.corrector[0].id,
    summarizer: TOOL_ACTIONS.summarizer[0].id,
    translator: TOOL_ACTIONS.translator[0].id,
  })
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [toast, setToast] = useState('')

  useEffect(() => {
    if (!toast) {
      return
    }

    const timeout = window.setTimeout(() => setToast(''), 2000)
    return () => window.clearTimeout(timeout)
  }, [toast])

  const actions = useMemo(() => TOOL_ACTIONS[tab], [tab])
  const selectedAction = selectedActions[tab]

  function handleTabChange(nextTab: ToolTab) {
    setTab(nextTab)
    setResult('')
  }

  function handleActionChange(action: string) {
    setSelectedActions((previous) => ({
      ...previous,
      [tab]: action,
    }))
  }

  async function handleGenerate() {
    if (!input.trim()) {
      setToast('Paste text before generating.')
      return
    }

    setIsLoading(true)

    try {
      const generatedText = await generateText(tab, {
        text: input,
        action: selectedAction,
      })
      setResult(generatedText)
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unexpected error.'
      setToast(message)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleCopy() {
    if (!result.trim()) {
      return
    }

    await navigator.clipboard.writeText(result)
    setToast('Result copied!')
  }

  function handlePdfPlaceholder() {
    setToast('PDF download will be available soon.')
  }

  return {
    tab,
    setTab: handleTabChange,
    actions,
    selectedAction,
    setSelectedAction: handleActionChange,
    input,
    setInput,
    result,
    isLoading,
    toast,
    handleGenerate,
    handleCopy,
    handlePdfPlaceholder,
  }
}

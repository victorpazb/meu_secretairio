export type ToolTab = 'corrector' | 'summarizer' | 'translator'

export type ActionOption = {
  id: string
  label: string
}

export const TOOL_TABS: ToolTab[] = ['corrector', 'summarizer', 'translator']

export const TOOL_ACTION_IDS: Record<ToolTab, string[]> = {
  corrector: ['formal', 'informal', 'professional', 'grammar'],
  summarizer: ['short-summary', 'bullet-points', 'executive-summary', 'simplify'],
  translator: ['pt-en', 'en-pt', 'natural-tone', 'professional-tone'],
}

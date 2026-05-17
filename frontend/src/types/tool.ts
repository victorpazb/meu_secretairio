export type ToolTab = 'corrector' | 'summarizer' | 'translator'

export type ActionOption = {
  id: string
  label: string
}

export const TOOL_ACTIONS: Record<ToolTab, ActionOption[]> = {
  corrector: [
    { id: 'formal', label: 'Formal' },
    { id: 'informal', label: 'Informal' },
    { id: 'professional', label: 'Professional' },
    { id: 'grammar', label: 'Fix grammar only' },
  ],
  summarizer: [
    { id: 'short-summary', label: 'Short summary' },
    { id: 'bullet-points', label: 'Bullet points' },
    { id: 'executive-summary', label: 'Executive summary' },
    { id: 'simplify', label: 'Simplify text' },
  ],
  translator: [
    { id: 'pt-en', label: 'PT → EN' },
    { id: 'en-pt', label: 'EN → PT' },
    { id: 'natural-tone', label: 'Natural tone' },
    { id: 'professional-tone', label: 'Professional tone' },
  ],
}

export const TOOL_LABELS: Record<ToolTab, string> = {
  corrector: 'Corrector',
  summarizer: 'Summarizer',
  translator: 'Translator',
}

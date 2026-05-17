import type { ToolTab } from '../types/tool'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3001'

const endpointByTab: Record<ToolTab, string> = {
  corrector: 'correct',
  summarizer: 'summarize',
  translator: 'translate',
}

type GeneratePayload = {
  text: string
  action: string
}

type GenerateResponse = {
  result: string
}

export async function generateText(tab: ToolTab, payload: GeneratePayload): Promise<string> {
  const response = await fetch(`${API_BASE_URL}/api/${endpointByTab[tab]}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = (await response.json()) as GenerateResponse & { message?: string }

  if (!response.ok) {
    throw new Error(data.message ?? 'Unable to generate text right now.')
  }

  return data.result
}

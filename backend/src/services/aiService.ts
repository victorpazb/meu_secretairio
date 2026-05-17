import { ApiError } from '../utils/ApiError.js'

type ServiceType = 'correct' | 'summarize' | 'translate'

const serviceLabels: Record<ServiceType, string> = {
  correct: 'Corrected text',
  summarize: 'Summarized text',
  translate: 'Translated text',
}

export async function processText(service: ServiceType, text: string, action: string): Promise<string> {
  if (!text.trim()) {
    throw new ApiError(400, 'Text is required.')
  }

  // Placeholder service. Replace this block with an OpenAI call later.
  return `${serviceLabels[service]} (${action}):\n\n${text.trim()}`
}

import dotenv from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { ApiError } from '../utils/ApiError.js'

dotenv.config()

type ServiceType = 'correct' | 'summarize' | 'translate'

const serviceLabels: Record<ServiceType, string> = {
  correct: 'Corrected text',
  summarize: 'Summarized text',
  translate: 'Translated text',
}

const prompts: Record<ServiceType, (text: string, action: string) => string> = {
  correct: (text, action) => `Fix grammar and spelling errors in this text. Keep the meaning. Just return the corrected text, nothing else:\n\n${text}`,
  summarize: (text, action) => `Summarize this text in ${action || '2'} sentences:\n\n${text}`,
  translate: (text, action) => `Translate this text to ${action || 'English'}. Only return the translation:\n\n${text}`,
}

if (!process.env.GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY is not set in environment variables')
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-flash-latest' })

export async function processText(service: ServiceType, text: string, action: string): Promise<string> {
  if (!text.trim()) {
    throw new ApiError(400, 'Text is required.')
  }

  try {
    const prompt = prompts[service](text, action)
    const result = await model.generateContent(prompt)
    const response = result.response.text()

    return response
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    throw new ApiError(500, `Gemini API error: ${message}`)
  }
}
import type { RequestHandler } from 'express'
import { processText } from '../services/aiService.js'

type TextRequestBody = {
  text: string
  action: string
}

function createTextController(service: 'correct' | 'summarize' | 'translate'): RequestHandler {
  return async (req, res, next) => {
    try {
      const { text, action } = req.body as TextRequestBody
      const result = await processText(service, text, action)
      res.json({ result })
    } catch (error) {
      next(error)
    }
  }
}

export const correctText = createTextController('correct')
export const summarizeText = createTextController('summarize')
export const translateText = createTextController('translate')

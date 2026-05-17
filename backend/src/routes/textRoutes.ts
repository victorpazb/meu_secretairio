import { Router } from 'express'
import { z } from 'zod'
import { correctText, summarizeText, translateText } from '../controllers/textController.js'
import { validateRequest } from '../middlewares/validateRequest.js'

const textRequestSchema = z.object({
  text: z.string().min(1, 'Text is required.').max(20000, 'Text is too long.'),
  action: z.string().min(1, 'Action is required.'),
})

const router = Router()

router.post('/correct', validateRequest(textRequestSchema), correctText)
router.post('/summarize', validateRequest(textRequestSchema), summarizeText)
router.post('/translate', validateRequest(textRequestSchema), translateText)

export { router as textRoutes }

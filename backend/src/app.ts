import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import { errorHandler } from './middlewares/errorHandler.js'
import { textRoutes } from './routes/textRoutes.js'

dotenv.config()

export const app = express()

app.use(helmet())
// app.use(cors())
app.use(cors({ origin: process.env.FRONTEND_URL ?? 'http://localhost:5175' }))
app.use(express.json({ limit: '1mb' }))

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api', textRoutes)
app.use(errorHandler)

import type { ErrorRequestHandler } from 'express'
import { ApiError } from '../utils/ApiError.js'

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({ message: error.message })
  }

  return res.status(500).json({ message: 'Internal server error.' })
}

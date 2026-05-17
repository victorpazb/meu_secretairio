import type { RequestHandler } from 'express'
import type { ZodSchema } from 'zod'
import { ApiError } from '../utils/ApiError.js'

export function validateRequest(schema: ZodSchema): RequestHandler {
  return (req, _res, next) => {
    const parsed = schema.safeParse(req.body)

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0]
      return next(new ApiError(400, firstIssue?.message ?? 'Invalid request body.'))
    }

    req.body = parsed.data
    next()
  }
}

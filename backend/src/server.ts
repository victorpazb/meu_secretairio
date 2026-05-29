import dotenv from 'dotenv'
dotenv.config()  // ← No topo, ANTES de tudo
import express from 'express'
import { app } from './app.js'

const port = Number(process.env.PORT ?? 3001)

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`)
})

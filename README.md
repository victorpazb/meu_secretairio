# Meu Secretairio

Modern and minimal full-stack boilerplate for an AI-powered text utility platform.

## Tech stack

- Frontend: React + TypeScript + Vite + TailwindCSS
- Backend: Node.js + Express + TypeScript

## Project structure

```text
frontend/
  src/
    components/
    hooks/
    pages/
    services/
    types/
backend/
  src/
    controllers/
    middlewares/
    routes/
    services/
    utils/
```

## Setup

1. Install dependencies:

```bash
npm install --prefix frontend
npm install --prefix backend
```

2. Create environment file:

```bash
cp .env.example .env
```

3. Run frontend and backend in separate terminals:

```bash
npm run dev --prefix backend
npm run dev --prefix frontend
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3001`

## Available API placeholders

- `POST /api/correct`
- `POST /api/summarize`
- `POST /api/translate`

Expected body:

```json
{
  "text": "Your text here",
  "action": "formal"
}
```

## Scripts

Frontend:

- `npm run dev --prefix frontend`
- `npm run build --prefix frontend`
- `npm run lint --prefix frontend`

Backend:

- `npm run dev --prefix backend`
- `npm run build --prefix backend`
- `npm run lint --prefix backend`

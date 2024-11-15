import express, { NextFunction, Request, Response } from "express"
import morgan from "morgan"

const app = express()

const PORT = 3375

app.use(morgan("tiny"))

app.get("/", async (req: Request, res: Response, next) => {
  const error = new Error("error encountered")

  return next(error)
})

import { createPost, createProfile, createUser } from "@app/controllers/api.controller"

app.post("/api/create-post", createPost)
app.post("/api/create-profile", createProfile)
app.post("/api/create-user", createUser)

// Error handler
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(error)

  res.status(500).json({ error: error.message })

  return
})

app.listen(PORT, () => {
  console.log(`[server] server ready at port ${PORT}`)
})

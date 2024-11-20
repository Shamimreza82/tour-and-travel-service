import express, { Request, Response } from 'express'

export const app = express()


app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: true,
    message: "server is running", 
  })
})

import { Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const expectBody = process.env.expectBody!

export const login = (_: Request, res: Response) => {
  res.status(200).send(expectBody)
}

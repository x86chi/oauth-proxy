import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

import { getToken } from './routes'

const app = express()

app.use(cors({ origin: 'http://localhost:3000' }))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.post('/', bodyParser.json(), getToken)

export default app

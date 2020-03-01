import { Request, Response } from 'express'
import dotenv from 'dotenv'

import axios, { AxiosResponse } from 'axios'

import 'dotenv/config'

interface Req extends Request {
  body: { code: string }
}

interface Env extends NodeJS.ProcessEnv {
  clientID: string
  clientSecret: string
}

const { clientID, clientSecret } = process.env as Env

export const getToken = async (req: Req, res: Response) => {
  const { code } = req.body
  const { data: access_token } = (await axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${code}`,
    headers: {
      accept: 'application/json',
    },
  })) as AxiosResponse<{ access_token: string }>
  res
    .status(201)
    .send(access_token)
    .end()
}

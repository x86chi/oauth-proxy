import request from 'supertest'
import dotenv from 'dotenv'

import app from '.'

dotenv.config()

const expectBody = process.env.expectBody!

describe('POST /login is', () => {
  it(expectBody, done => {
    request(app)
      .post('/')
      .expect(200)
      .end((_, res) => {
        expect(res.text).toEqual(expectBody)
        done()
      })
  })
})

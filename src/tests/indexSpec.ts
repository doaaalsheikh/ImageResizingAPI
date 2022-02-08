import supertest from 'supertest'
import app from '../index'

// create a request object
const request = supertest(app)

describe('Test endpoint responses', () => {
  it('gets the resize endpoint', async (done) => {
    const response = await request.get('/api/resize')
    expect(response.status).toBe(200)
    done()
  })
})

describe('Test endpoint responses', () => {
  it('get response for resized image', async () => {
    const response = await request.get('/api/display')
    expect(response.status).toBe(200)
  })
})

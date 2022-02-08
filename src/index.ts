import express, { Application, Request, Response } from 'express'
import displayRouter from './routes/displayRouter'
import resizeRouter from './routes/resizeRouter'

const PORT = 3000

// create an instance server
const app: Application = express()

app.get('/api', (req: Request, res: Response) => {
  res.send(' Please use endpoint "/resize" to resize or "/display" to display an image')
})

app.use('/api/resize', resizeRouter)

app.use('/api/display', displayRouter)

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})

export default app

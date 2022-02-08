import express, { Request, Response, Router } from 'express'
import { resizeImage } from '../utilities/imageModule'

// create an instance router
const resizeRouter: Router = express.Router()

resizeRouter.get('/', async (req: Request, res: Response) => {
  try {
    // check if required query parameters are defined or not
    if (
      req.query.imgName === undefined ||
      Number.isNaN(req.query.width as unknown as number) ||
      (req.query.width as unknown as number) === undefined ||
      Number.isNaN(req.query.height as unknown as number) ||
      (req.query.height as unknown as number) === undefined
    ) {
      res.send(' <h4>Please enter valid image name with valid width / height parameters</h4>')
    } else {
      // calling resize function
      const resizeResult = await resizeImage(
        req.query.imgName as string,
        req.query.width as unknown as number,
        req.query.height as unknown as number
      )
      if (resizeResult.code === 200) {
        // send the image to browser
        res.sendFile(resizeResult.destImagePath)
      } else {
        res.sendStatus(404)
      }
    }
  } catch (error) {
    res.status(400).send('invalid query')
  }
})

export default resizeRouter

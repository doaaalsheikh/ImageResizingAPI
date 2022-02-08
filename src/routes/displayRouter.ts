import express, { Request, Response, Router } from 'express'
import { displayImage } from '../utilities/imageModule'

// create an instance router
const displayRouter: Router = express.Router()

displayRouter.get('/', async (req: Request, res: Response) => {
  try {
    // check if query parameter of imgName is defined or not
    if (req.query.imgName === undefined) {
      res.send(' <h4>Please enter valid image name </h4>')
    } else {
      // calling display function
      const displayResult = await displayImage(req.query.imgName as string)
      if (displayResult.code === 200) {
        // send the image to browser
        res.sendFile(displayResult.srcImagePath)
      } else {
        res.sendStatus(404)
      }
    }
  } catch (error) {
    res.status(400).send('invalid query')
  }
})

export default displayRouter

import path from 'path'
import fs from 'fs-extra'

// Resized image Existence test
describe('Test for resized image existance', () => {
  const destImagePath1 = path.join(__dirname, '../../../images/thumbnails', 'flower2_100_300.jpg')
  const destImagePath2 = path.join(__dirname, '../../../images/thumbnails', 'flower8_200_300.jpg')

  it('expect not to be exist to be resized', async () => {
    expect(await fs.pathExists(destImagePath1)).toBeTruthy()
  })

  it('expect to be exist not to be resized again', async () => {
    expect(await fs.pathExists(destImagePath2)).toBeFalsy()
  })
})

// Input values of image in query test
describe('Test for input values of the image in query', () => {
  const width = 200
  const height = 200
  const imgName = 'flower7.jpg'

  it('expect width not to be NaN', () => {
    expect(width).not.toBeNaN()
  })

  it('expect height not to be Nan', () => {
    expect(height).not.toBeNaN()
  })

  it('expect image name to be defined', () => {
    expect(imgName).toBeDefined()
  })
})

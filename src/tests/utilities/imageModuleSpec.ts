import { resizeImage, displayImage } from '../../utilities/imageModule'

const imgName1 = 'flower2.jpg'
const imgName2 = 'flower11.jpg'
describe('Test for image resize function', () => {
  it('expect not to be exist to be resized', async () => {
    expect((await resizeImage(imgName1, 100, 300)).code).toEqual(200)
  })

  it('expect to be exist not to be resized again', async () => {
    expect((await resizeImage(imgName2, 100, 300)).code).toEqual(404)
  })
})

describe('Test for image display function', () => {
  it('expect to be exist to display', async () => {
    expect((await displayImage(imgName1)).code).toEqual(200)
  })
  it('expect not to be exist then return "not found"', async () => {
    expect((await displayImage(imgName2)).code).toEqual(404)
  })
})

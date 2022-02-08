import path from 'path'
import fs from 'fs-extra'

const srcImagePath1 = path.join(__dirname, '../../../images/flower7.jpg')
const srcImagePath2 = path.join(__dirname, '../../../images/flower20.jpg')

describe('Test for image existance', () => {
  it('expect to be exist to be resized', async () => {
    expect(await fs.pathExists(srcImagePath1)).toBeTruthy()
  })

  it('expect not to be exist then return false', async () => {
    expect(await fs.pathExists(srcImagePath2)).toBeFalsy()
  })
})

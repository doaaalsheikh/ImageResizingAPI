import path from 'path'
import sharp from 'sharp'
import fs from 'fs-extra'

function getImageData(imgName: string): { fileName: string; fileExtension: string } {
  let fileName: string = ''
  let fileExtension: string = ''
  try {
    if (imgName != null) {
      // substring image path to get file name and file extension
      fileName = imgName.slice(0, imgName.lastIndexOf('.'))
      fileExtension = imgName.slice(imgName.lastIndexOf('.') + 1)
    }
  } catch (error) {
    console.log(error)
  }
  return { fileName, fileExtension }
}

async function resizeImage(
  imgName: string,
  width: number,
  height: number
): Promise<{ destImagePath: string; code: number }> {
  // get query parameters values
  // const { imgName, width, height } = req.query
  let code: number
  const fileName = getImageData(imgName as string)?.fileName // constant to get file name without extension
  const fileExtension = getImageData(imgName as string)?.fileExtension // constant to get file extension
  const srcImagePath = path.join(__dirname, '../../images', imgName as string) // constant to get source path of image to be resized
  const destImagePath = path.join(
    __dirname,
    '../../images/thumbnails',
    `${fileName}_${Number(width)}_${Number(height)}.${fileExtension}`
  ) // set the destination path of resized image

  // check if image is existed or not
  if (await fs.pathExists(srcImagePath)) {
    // check if same version of resizing parameters exists or not
    if (!(await fs.pathExists(destImagePath))) {
      // resize image without crop
      await sharp(srcImagePath)
        .resize(Number(width), Number(height), { fit: 'fill' })
        .toFile(destImagePath)
    }
    code = 200
  } else {
    code = 404
  }
  return { destImagePath, code }
}
async function displayImage(imgName: string): Promise<{ srcImagePath: string; code: number }> {
  const srcImagePath = path.join(__dirname, '../../images', imgName as string) // constant to get source path of image to be resized
  let code: number
  // check if image is existed or not
  if (await fs.pathExists(srcImagePath)) {
    code = 200
  } else {
    code = 404
  }
  return { srcImagePath, code }
}

export { resizeImage, displayImage }

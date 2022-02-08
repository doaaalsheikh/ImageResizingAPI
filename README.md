# Image Processing project

In this project we use Express server on Node.js to process images (basicly, to resize an image without crop despite of its format or destination)

## The api contain two endoints :
### display
        where to display an original image from the source images before resizing. 
        It can be used as follows:
        'localhost:3000/api/display/?imgName=<imageName>'
        Example:
            localhost:3000/api/display/?imgName=flower4.jpg


### resize
        where to display the image to be resized.
        If the image with the same request is not exists, it will be resized, saved to disk and displayed to user.
        if the image was resized before with same dimensions it would be retrieved from cashed images and displayed.
        It can an be used as follows:
        'localhost:3000/api/resize/?imgName=<ImageName>&width=<Width>&height=<Height>'
        Example:
            localhost:3000/api/resize/?imgName=flower4.jpg&width=500&height=300


 ### Images available in the api
    flower1.jpg
    flower2.jpg
    flower3.jpg
    flower4.jpg
    flower5.jpg
    flower6.jpg


## Folders: 

    src : 
      contain TypeScript files including (index, routes, modules and tests), images and thumbnails 

    dest:
      contain JavaScript files including (index, routes, modules and tests), images and thumbnails 



 ## Scripts to run:

    "build":
           npm run build
    "format":
           npm run format
    "lint":
            npm run lint
    "test":
           npm run test
    "start":
           npm run start
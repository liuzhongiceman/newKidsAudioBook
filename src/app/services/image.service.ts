import { Injectable } from '@angular/core';

import { mongoURI } from './constants';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }
  
    // Create storage engine
  // const storage = new GridFsStorage({
  //   url: mongoURI,
  //   file: (req, file) => {
  //     return new Promise((resolve, reject) => {
  //       crypto.randomBytes(16, (err, buf) => {
  //         if (err) {
  //           return reject(err)
  //         }
  //         const filename = file.originalname
  //         const fileInfo = {
  //           filename: filename,
  //           bucketName: 'uploads',
  //         }
  //         resolve(fileInfo)
  //       })
  //     })
  //   },
  // });

  // upload() {
  //   return multer({ storage });
  // }
  
}

var cloudinary = require('cloudinary').v2;
import {buyRequest} from '../model/buyrequest/buyRequestSchema'
import * as fs from 'fs'
import { Request, Response } from 'express';
import {responsesHelper} from '../utils/responseHelper'
class ImageUpload {
    async add(req:Request, res:Response){
        const content = []
        const files = req.files
        //console.log(files);
        
        
      for (let index = 0; index < files.length; index++) {
        const element = files[index]; 
        const { path } = element;
       const result = await cloudinary.uploader.upload(path)
            result['originalName'] = element.originalname
            content.push({url:result.url, name:result.originalName});
            fs.unlinkSync(path);
    
      }
      
console.log(content);

      for (const value of content) {
          const productName = value.name.split('.')
          const ProductName = productName[0].toLowerCase().trim()
    buyRequest.find({productsName: ProductName}).updateMany({$set: {image:value.url}} )
    .then((out) => {
       console.log(out);
       
    })
    .catch((e) => {
        console.log(e);
    });
}
      
    }
}
export const imageUpload = new ImageUpload()
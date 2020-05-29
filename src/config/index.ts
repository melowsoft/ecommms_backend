import * as dotenv from 'dotenv'
dotenv.config()
const Config = {
    cloudinary:{
        CLOUDINARY_NAME  :process.env.CLOUDINARY_NAME ,
        API_KEY_CLOUDINARY:process.env.API_KEY_CLOUDINARY,
        CLOUDINARY_PASSWORD: process.env.CLOUDINARY_PASSWORD
}
}
export const config = Config
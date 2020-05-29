import * as express from 'express'
import {upload} from '../libs/multer'
import { imageUpload} from '../controller/imageUpload'



const router = express.Router()


router.post ('/images', upload.array('files'),(req, res) => {
  imageUpload.add(req, res)
})



export const imageUploader = router
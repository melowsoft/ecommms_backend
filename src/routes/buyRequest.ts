import * as express from 'express'
import {buyRequest} from '../controller/Request'
import {excelUpload} from '../libs/excelUpload'


const router = express.Router()


router.post ('/buyrequest', excelUpload.single('files'),(req, res) => {
  buyRequest.addCsv(req, res)
})

router.get ('/buyrequest/search', excelUpload.single('files'),(req, res) => {
buyRequest.search(req, res)
})


export const buyrequest = router
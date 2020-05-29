import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as compression from 'compression'
import * as cloudinary from 'cloudinary'
import {buyrequest} from './routes/buyRequest'
import { imageUploader} from './routes/imageupload'

import config_val from './libs/cloudinary'

cloudinary.v2.config(config_val)
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(cors())
app.use(compression())
app.use('/v1',buyrequest)
app.use('/v1', imageUploader)

app.get('/', (req, res) => {
    res.status(200).send({
      message: 'Ecom is running here'
    });
  });
export default app;



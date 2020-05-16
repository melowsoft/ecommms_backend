import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as compression from 'compression'
import {buyrequest} from './routes/buyRequest'


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(cors())
app.use(compression())
app.use('/v1',buyrequest)

app.get('/', (req, res) => {
    res.status(200).send({
      message: 'Ecom is running here'
    });
  });
export default app;



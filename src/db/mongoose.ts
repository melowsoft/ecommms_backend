import * as  Mongoose from 'mongoose'
const url = 'mongodb://admin:admin123@ds345597.mlab.com:45597/ecomm_test'

 Mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(res => {
    console.log('database connected', url);
  })
  .catch(e => {
    console.log(e);
  });
module.exports = Mongoose
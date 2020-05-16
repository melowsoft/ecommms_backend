import app from './app'
require('./db/mongoose')
app.listen(5000, () => {
    console.log('app is listening');  
})
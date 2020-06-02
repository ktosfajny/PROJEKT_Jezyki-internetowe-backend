const express = require('express')
const app = express()
const port = process.env.PORT || '5000';

app.use(express.json())

const questions = require('./routes/questions')
const characterImage = require('./routes/characterImage')


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST, PUT')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`)
})



app.get('/', (req, res) => {

    res.send('this is server. There is nothing to do here!')

})

questions(app)

characterImage(app)
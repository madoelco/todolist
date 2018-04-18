const express = require('express')
const app = express()
require('dotenv').config()
const cors =  require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASEURL)

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
 console.log('connected successfuly')
})

app.use(cors())
app.use(bodyParser.json())

const router = require('./router')

app.use('/', router)

app.listen(process.env.PORT, function () {
  console.log('app listen on port ' + process.env.PORT)
})


const express = require('express')
const cors = require('cors')
var mongoose = require('mongoose')
require('dotenv').config()

const students = require('./models/Students')

const server = express()

server.use(express.json())
server.use(cors())

mongoose.connect(process.env.MONGODB_URL)

// require('./routes')(server)

const router = require('./routes')
server.use('/', router)

const port = process.env.SERVER_PORT || 5008

server.listen(port, () => {
  console.log(`Running on the port ${port} `)
})

module.exports = server

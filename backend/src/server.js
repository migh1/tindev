const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

const server = express()

mongoose.connect('mongodb+srv://tindev:@Tindev1@tindev-lz1eu.mongodb.net/tindev?retryWrites=true&w=majority', {
  useNewUrlParser: true,
})
server.use(routes)

routes.listen(3333)
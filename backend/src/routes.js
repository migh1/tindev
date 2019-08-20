const express = require('express')
const cors = require('cors')
const { store: DevStore, index: DevIndex } = require('./controllers/DevController')
const { store: LikeStore } = require('./controllers/LikeController')
const { store: DislikeStore } = require('./controllers/DislikeController')

const routes = express()

routes.use(cors())
routes.use(express.json())

routes.get('/devs', DevIndex)
routes.post('/devs', DevStore)
routes.post('/devs/:devId/likes', LikeStore)
routes.post('/devs/:devId/dislikes', DislikeStore)

module.exports = routes
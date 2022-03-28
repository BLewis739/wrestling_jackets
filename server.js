const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001

const db = require('./db')
const { Jacket } = require('./models')
const { Athlete } = require('./models')
const { Order } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('I am gRoot!')
})

app.get('/jackets', async (req, res) => {
  const jackets = await Jacket.find()
  res.json(jackets)
})

app.get('/athletes', async (req, res) => {
  const athletes = await Athlete.find()
  res.json(athletes)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

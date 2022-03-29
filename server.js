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
  const athletes = await Athlete.find()
  const jackets = await Jacket.find()
  res.send({ athletes, jackets })
})

app.get('/athletes', async (req, res) => {
  const athletes = await Athlete.find()
  res.json(athletes)
})

app.get('/orders', async (req, res) => {
  const orders = await Order.find()
  res.json(orders)
})

app.post('/jackets', async (req, res) => {
  try {
    const jacket = await new Jacket(req.body)
    await jacket.save()
    return res.status(201).json({
      jacket
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

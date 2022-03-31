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
    .populate({
      path: 'athlete',
      model: Athlete
    })
    .populate('orderNum')
  res.send({ athletes, jackets })
})

app.get('/athletes', async (req, res) => {
  const athletes = await Athlete.find()
  res.json(athletes)
})

app.get('/athletes/:id', async (req, res) => {
  const { id } = req.params
  const athlete = await Athlete.findById(id)
  res.json(athlete)
})

app.get('/jackets/:id', async (req, res) => {
  const { id } = req.params
  const jacket = await Jacket.findById(id)
    .populate({
      path: 'athlete',
      model: Athlete
    })
    .populate('orderNum')
  res.json(jacket)
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

app.post('/athletes', async (req, res) => {
  try {
    const athlete = await new Athlete(req.body)
    await athlete.save()
    return res.status(201).json({
      athlete
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

app.delete('/athletes/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Athlete.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Athlete deleted')
    }
    throw new Error('Athlete not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

app.delete('/jackets/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Jacket.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Jacket deleted')
    }
    throw new Error('Jacket not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

app.patch('/jackets/:id', async (req, res) => {
  try {
    const { id } = req.params
    await Jacket.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, jacket) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!jacket) {
          res.status(500).send('Jacket not found!')
        }
        return res.status(200).json(jacket)
      }
    ).clone()
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

app.put('/jackets/:id', async (req, res) => {
  try {
    const { id } = req.params
    await Jacket.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, jacket) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!jacket) {
          res.status(500).send('Jacket not found!')
        }
        return res.status(200).json(jacket)
      }
    ).clone()
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

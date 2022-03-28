const { model } = require('mongoose')
const JacketSchema = require('./Jacket')
const AthleteSchema = require('./Athlete')
const OrderSchema = require('./Order')

const Jacket = model('jackets', JacketSchema)
const Athlete = model('athletes', AthleteSchema)
const Order = model('orders', OrderSchema)

module.exports = {
  Jacket,
  Athlete,
  Order
}

const { Schema } = require('mongoose')

const Order = new Schema({
  orderNum: { type: Number, required: true },
  openOrder: { type: Boolean, required: true },
  athletes: [{ type: Schema.Types.ObjectId, ref: 'athletes' }]
})

module.exports = Order

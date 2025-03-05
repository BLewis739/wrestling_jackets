const { Schema } = require('mongoose')

const Jacket = new Schema({
  athlete: { type: Schema.Types.ObjectId, ref: 'athlete' },
  emptyStars: { type: Number, required: true },
  fullStars: { type: Number, required: true },
  role: { type: String, required: false },
  award1: { type: String, required: false },
  award2: { type: String, required: false },
  award3: { type: String, required: false },
  award4: { type: String, required: false },
  award5: { type: String, required: false },
  award6: { type: String, required: false },
  award7: { type: String, required: false },
  award8: { type: String, required: false },
  award9: { type: String, required: false },
  award10: { type: String, required: false },
  isNewJacket: { type: Boolean, required: true },
  isBeforeJacket: { type: Boolean, required: false },
  orderNum: { type: Schema.Types.ObjectId, ref: 'orders' }
})

module.exports = Jacket

const { Schema } = require('mongoose')

const Athlete = new Schema({
  name: { type: String, required: true },
  abbrevName: { type: String, required: true }
})

module.exports = Athlete

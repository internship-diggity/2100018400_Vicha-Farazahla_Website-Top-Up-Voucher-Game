const mongoose = require('mongoose');

let nominalSchema = new mongoose.Schema({
  coinQuantity: {
    type: Number,
    default: 0
  },
  coinName : {
    type: String,
    require: [true, 'Nama koin harus diisi']
  },
  price : {
    type : Number,
    default : 0
  }
});

const Nominal = mongoose.model('Nominal', nominalSchema);

module.exports = Nominal;
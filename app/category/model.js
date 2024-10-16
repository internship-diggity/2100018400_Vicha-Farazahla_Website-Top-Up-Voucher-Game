const mongoose = require('mongoose');

let categorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Nama kategori harus diiisi']
  },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
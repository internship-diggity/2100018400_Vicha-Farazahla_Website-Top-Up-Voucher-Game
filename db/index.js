const mongoose = require('mongoose');
const { urlDb } = require('../config');

console.log('Connecting to MongoDB at:', urlDb);

mongoose.connect(urlDb)
   .then(() => console.log('Connected to MongoDB'))
   .catch((err) => console.log('connection error: ', err));

const db = mongoose.connection;

module.exports = db;
const mongoose = require('mongoose');

const URI = 'mongodb://user:password@localhost:27018/recimarket?authSource=admin';
const URI = 'mongodb+srv://admin:admin@cluster0.unsivk0.mongodb.net/recimarket';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
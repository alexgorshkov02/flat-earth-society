const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/flatearthsociety' 

);

module.exports = mongoose.connection;

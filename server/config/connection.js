const mongoose = require('mongoose');

Mongoose.connect(
  MONGODB_URL,
  async(err)=>{
      if(err) throw err;
      console.log("conncted to db")
  }
)

module.exports = mongoose.connection;

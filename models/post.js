const mongoose = require('mongoose')

var PostSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  body:{
    type:String,
    required:true
  }
})

module.exports = mongoose.model('Posts', PostSchema)

//import mongoose from 'mongoose'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  name: String,
  type: String
})

module.exports = mongoose.model('Item', ItemSchema);

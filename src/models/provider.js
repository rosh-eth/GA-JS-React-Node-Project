const mongoose = require('mongoose');// require mongoose
const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor

// create a new Schema
// This will define the shape of the documents in the collection
// https://mongoosejs.com/docs/guide.html
const providerSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },  
  name: String,
  address: String,
  phone: String,
  email: String,
  services: [String]
})

const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;
const mongoose = require('mongoose');
const { Schema } = mongoose;

const dogSchema = new Schema({
  name: String,
  age: Number,
});

mongoose.model('dogs', dogSchema);


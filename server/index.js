const express = require('express');
const mongoose = require('mongoose');
const keys =  require('./config/keys');
require('./models/Dog');

const app = express();
mongoose.connect(keys.mongoURI);

app.get('/',(req, res) => {
  res.send({ test: 'test'});
});

app.listen(5000);

require('./routes/dogRoutes')(app);
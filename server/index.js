const express = require('express');
const mongoose = require('mongoose');
const keys =  require('./config/keys');
const bodyParser = require('body-parser');
require('./models/Dog');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(keys.mongoURI);

app.get('/',(req, res) => {
  res.send({ test: 'test'});
});

app.listen(5000);

require('./routes/dogRoutes')(app);
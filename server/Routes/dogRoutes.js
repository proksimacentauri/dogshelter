const mongoose = require('mongoose');
const Dog = mongoose.model('dogs');
const ObjectId = require('mongodb').ObjectId;

module.exports = app => {
  //list all dogs
  app.get('/dogs', async (req, res) => {
    const dogs = await Dog.find();
    res.send(dogs);
  });
  // find dog by id
  app.get('/dogs/:id/', async (req, res) => {
    Dog.findById({ _id: ObjectId(req.params.id)} , (err, dog) => {
      res.send(dog);
    });
  });
};
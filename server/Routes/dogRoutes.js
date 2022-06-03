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
  //create new dog
  app.post('/dog', async (req, res) =>{
    const dog = await new Dog(req.body).save();
    res.send(dog);
  });
  //delete dog
  app.delete('/dog/:id', async (req, res) => {
    Dog.findByIdAndDelete({ _id: ObjectId(req.params.id)}, (err, dog) => {
      res.send("dog deleted.");
    });
  });
};
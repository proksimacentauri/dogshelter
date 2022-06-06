import React, { useState, useEffect } from 'react';
import axios from "axios";
import DogCard from "./DogCard";

const DogList = () => {
  const [dogs, setDogs] = useState([]);

  const fetchDogs = async () => {
    const res = await axios.get('/api/dogs');
    console.log(res);
    setDogs(res.data);
  }
  useEffect(() => {
    fetchDogs();
  },[]);

  return (
    <div>
      {dogs.length !== 0 ? dogs.map(dog => <DogCard key={dog._id} age={dog.age} name={dog.name} />) : null}
    </div>
  )
};

export default DogList;
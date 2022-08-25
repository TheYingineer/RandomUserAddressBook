import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import AddressCard from './AddressCard';

function App() {
  // const {name, thumbnail, location, city, state, country, postcode} = props;
  const [list,setList] = useState([]);

  useEffect(()=> {

    axios.get('https://randomuser.me/api?results=25').then (res =>{
      const arrayOfAddress = res.data.results
      setList(arrayOfAddress) 
    })

  },[])
  
  console.log(list)
 
  // Spec 1: minimum 25 users
  // Spec 2: displays the user's name and thumbnail picture
  // Spec 3: When the "show details" button is clicked the user's details are revealed and button text turns to "hide details"
  // Spec 4: When "hide details" is clicked the user's details disappear.

  return(
    <div>
      {list.map((person,index)=>{
        return <AddressCard person = {person}/>
      })}
    </div>
   ) 
}

export default App;

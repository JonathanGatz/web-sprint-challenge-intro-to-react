import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Cards from "./components/Character";
//import {Row} from "reactstrap"



  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.


const App = () => {

  
  const [data, setData] = useState([])



useEffect(() => {
  axios.get("https://cors-anywhere.herokuapp.com/swapi.py4e.com/api/species")
  .then(response => {
    console.log(response.data.results)
    setData(response.data.results)
  })
},[])



return (
  
  <div className="App">
    *******
    <h1 className="Header">Species of the UNIVERSE</h1>
    *******
    <Cards characterArray = {data}/> 
  </div>
);
}


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // ********************************* I finally got my project back to somewhat normal. 




  export default App;
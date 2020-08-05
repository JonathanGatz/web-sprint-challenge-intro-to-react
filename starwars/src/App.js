import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Cards from "./components/Character";
import styled from 'styled-components'
//import {Row} from "reactstrap"



  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.


const App = () => {

  
  const [data, setData] = useState([])
  const [color, setColor] = useState("red");



useEffect(() => {
  axios.get("https://cors-anywhere.herokuapp.com/swapi.py4e.com/api/species")
  .then(response => {
    console.log(response.data.results)
    setData(response.data.results)
  })
},[])



return (

  <div style={{ color, border: `10px solid ${color}`, padding: "25px" }}>
  <div className="App">
    *******
    <div style={{border: `50px`, padding: "50px"}}></div>
    <h1 className="Header">Species of the UNIVERSE</h1>
    *******
    <Cards characterArray = {data}/> 
    <button onClick={e => setColor("red")}>Space Red</button>
    <button onClick={e => setColor("green")}>Space Green</button>
    <button onClick={e => setColor("blue")}>Space Blue</button>
    <button onClick={e => setColor("white")}>Hide All Data</button>
    </div>
      {/* <button>red</button>
      <button>green</button> */}
  </div>
);
}

const button = styled.button`
flex-direction: row;`

const h1 = styled.h1`
width: 50%;`



  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // ********************************* I finally got my project back to somewhat normal. 




  export default App;
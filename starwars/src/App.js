import React, {useState, useEffect} from 'react';
import './App.css';


const App = () => {

  
  const [count, setCount] = useState(false)

  useEffect((getCharacters) =>{
    console.log(`Hello`);
    const listener = e => console.log("click")
    document.addEventListener("click", listener);
    return () => {
      console.log(`CLEAN UP HELLO ${getCharacters}`)
      document.removeEventListener("click", listener);
    }
  }, [])

  
 


  

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      {setCount && <getCharacters getCharacters={count} />}
      <h1 className="Header">Characters</h1>
      <button onClick={e => setCount(true)}>Find a Character</button>
      <container class= "info-container">
        <h1>'name'</h1>
      </container>
    </div>
  );
}





export default App;

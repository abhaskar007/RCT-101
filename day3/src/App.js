import React from 'react';

import './App.css';
import { useState } from 'react';
import { Counter } from './components/Counter';
import { Todo } from './components/Todo';

function App() {
  const [toggle,setToggle] = useState(false);

 
    return(
      <div className="App">
      <button onClick={() => setToggle(!toggle)}>{toggle?"show todo":"show counter"}</button>
      {toggle?<Counter/>:<Todo/>}
    </div>
    );
    
    
  // return (
  //   <div className="App">
  //     <button>toggle</button>
  //   </div>
  // );
  }
  
  


export default App;

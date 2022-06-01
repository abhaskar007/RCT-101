import React, { useState }  from 'react';
import './App.css';


function App() {
  const [counter,setCounter] = useState({value:""});
  const handleOnChange = (e) => {
    setCounter({value:e.target.value})
  }
  return (
    <div className="App">
     <input type="text" value={counter.value} onChange={handleOnChange}/>
  
    </div>
  );
}

export default App;

import React, { useReducer, useState }  from 'react';
import './App.css';

function reducer(state,action)
{
  switch(action.type){
    case 'inc':
    return state+1;

    case 'dec':
      return state-1;

      default:
      return  state;
  }

}

function App() {
  // const [counter,setCounter] = useState(0);

  const [state,dispatch] = useReducer(reducer,0);


  // const handleOnChange = (e) => {
  //   setCounter({value:e.target.value})
  // }
  return (
    <div className="App">
     Counter:{state}
     <div>
     <button onClick={()=>dispatch({type:'inc'})}>+</button>
     <button onClick={()=>dispatch({type:'dec'})}>-</button>
     </div>
    </div>
  );
}

export default App;

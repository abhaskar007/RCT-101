import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Body } from "./components/Body";


// >>>context API>>>

// function reducer(state,action)
// {
//   switch(action.type){
//     case 'inc':
//     return state+1;

//     case 'dec':
//       return state-1;

//       default:
//       return  state;
//   }

// }

// function reducer(counter,action)
// {
//   switch(action.type)
//   {
//     case 'inc':
//       return counter + action.payload;
//       case 'dec':
//       return counter - action.payload;
//       default:
//         console.log("the error is --",action.type)
//         return counter;

//   }
// }

function App() {
  // const [yu,dispatch]= useReducer(reducer,0);

  // const [counter,dispatch] = useReducer(reducer,0);

  // onClick={()=>dispatch({type:'inc'})}

  return (
    <div className="App">
      {/* Counter:{yu}
     <div>
     <button onClick={()=> dispatch({type: "inc",payload :10})}>+</button>
     <button onClick={()=> dispatch({type: "dec",payload:20})}>-</button>
     </div> */}


   
        <Navbar />
        <Body />
     


    </div>
  );
}

export default App;

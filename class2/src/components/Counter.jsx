import React,{useState} from "react";

const Counter = ({initial_value}) => {
  let [count, setCount] = useState(initial_value);

 if(count<0)
 {
     alert("your done");
     setCount(0)
 }





  return (
    <div>
      <h1  style={{ color: count %2 ? 'green' : 'red'}}>Counter App: {count}</h1>
      <button onClick={() => setCount(count + 5)}>Increament</button>
      <button onClick={() =>{if(count=>0){setCount(count - 5)}}}>Decreament</button>
      <button onClick={()=>setCount(count*2)} >Double</button>
      
    </div>
  );
};

export default Counter;

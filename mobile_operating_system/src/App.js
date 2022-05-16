import React from 'react'
import './App.css'

function App() {
  let head1 = "Mobile Operating System";
  let head2 = "Mobile Manufactures";

  let body1= ["Android","BlackBerry","Iphone","Window"];
  let body2= ["Samsung","HTC","Micromax","Apple"];

  
  return (
    <div className='App'>
      <Card title={head1} comp={body1}/>
      <Card title={head2} comp={body2}/>
    </div>
  )
}

function Card(props){
  return(
<div>
<h1>{props.title}</h1>
<ul>
  {props.comp.map(item => <li>{item}</li>)}
</ul>

</div>

  )
}
export default App
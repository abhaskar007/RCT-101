
import './App.css';

function App() {
  fetch("http://localhost:8080/App")
  .then((r)=> r.json())
  .then((d)=> {
    console.log(d);
  })
  return (
    <div className="App">
      App
    </div>
  );
}

export default App;

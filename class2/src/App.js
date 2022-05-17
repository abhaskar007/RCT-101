import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
// import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Counter propt={100}/>
      {/* <Todo/> */}
    </div>
  );
}

export default App;

// initialValue={1000}
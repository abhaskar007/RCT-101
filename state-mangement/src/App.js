import logo from './logo.svg';
import './App.css';
import { UseState } from './components/UseState';
import { Todo } from './components/Todo';


function App() {
  
  return (
    <div className="App">
     <UseState/>
     <Todo/>
    </div>
  );
}

export default App;

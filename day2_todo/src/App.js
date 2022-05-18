import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import { Todo2 } from './components/Todo2';
import { Todo3 } from './components/Todo3';
import { Todo4 } from './components/Todo4';

function App() {
  return (
    <div className="App">
      <Todo/>
      <br/>
      <br/>
      <Todo2/>
      <br/>
      <br/>
      <Todo3/>
      <br/>
      <br/>
      <Todo4/>

    </div>
  );
}

export default App;

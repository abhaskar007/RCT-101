import logo from "./logo.svg";
import "./App.css";
import { Todo } from "./components/Todo";

function App() {
  return (
    <div className="main_div">
      
      <div className="centre_div">
        <Todo />
      </div>
    </div>
  );
}

export default App;

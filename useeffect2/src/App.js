import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const[page,setPage] = useState(1);
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    axios
    .get(`http://localhost:8080/todo?_page=${page}&_limit=5`)
    .then((r)=>{
      setTodo(r.data);
    });
  
  }, [page]);
  return (
    <div className="App">
      {todos.map((todo, index) => (
        <div key={todo.id}>
          {todo.id} . {todo.value}
        </div>
      ))}
      <br />
      <button onClick={() => setPage(page + 1)}>Next</button>
      <button onClick={() => setPage(page - 1)}>Prev</button>
    </div>
  );
}

export default App;

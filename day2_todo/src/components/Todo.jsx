import React, { useState } from "react";

const Todo = () => {
  let [newTodo,setTodo ]= useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div>
      Todo
      <input value={newTodo} onChange={handleChange} />
      <button
        onClick={() => {
          
         
          setTodos([...todos,{
            id: Date.now(),
            value: newTodo,
            isCompleted: false
          }]);
          setTodo("");
        }}
      >
        Add
      </button>
      {todos.map((todo) => (
        <div>
          <input type="checkbox"/>
        <div key={todo.id}>{todo.value}</div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
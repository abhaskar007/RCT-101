import React, { useEffect, useState } from "react";

export const Todos = () => {
  const [todos, setTodo] = useState([]);
// http://m6g3bt.sse.codesandbox.io/todos
  useEffect(() => {
    fetch("http://localhost:8080/todo")
      .then((r) => r.json())
      .then((d) => {
        setTodo(d);
      });
  }, []);

  return (
    <div>
      Todos
      <div>
        <input />
        {todos.map((todo) => (
            <div key={todo.id}>{todo.value}</div>
        ))}
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";

export const Todos = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodo] = useState([]);

  const saveInfo = () => {
    fetch(" http://localhost:8080/todo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        value: newTodo,
        iscompleted: false,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        setTodo([...todos,d])
        setNewTodo("");
      });
  };
  //  http://m6g3bt.sse.codesandbox.io/todos

  useEffect(() => {
    fetch(" http://localhost:8080/todo")
      .then((r) => r.json())
      .then((d) => {
        setTodo(d);
      });
  }, []);

  return (
    <div>
      Todos
      <div>
        <input
          value={newTodo}
          onChange={({ target }) => setNewTodo(target.value)}
        />
        <button onClick={saveInfo}>+</button>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.value}</div>
        ))}
      </div>
    </div>
  );
};

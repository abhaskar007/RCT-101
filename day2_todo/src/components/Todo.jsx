import React, { useState } from "react";
import styles from "./todo.module.css";
import { TodoItem } from "./TodoItem";

const Todo = () => {
  let [newTodo, setTodo] = useState("");
  const [todos, xxx] = useState([]);
  // const handleChange = (e) => {
  //   setTodo(e.target.value);
  // };
  const onDelete = (id) => {
    let oldTodo = todos.filter(todo => todo.id !== id);
    xxx(oldTodo);
  };
  return (
    <div>
      Todo
      <input value={newTodo} onChange={(e)=>{setTodo(e.target.value)}} />
      <button
        className={styles.btn}
        onClick={() => {
          xxx([
            ...todos,
            {
              id: Date.now(),
              value: newTodo,
              isCompleted: false,
            },
          ]);
          setTodo("");
        }}
      >
        Add
      </button>
      <div className={styles.todo_box}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default Todo;

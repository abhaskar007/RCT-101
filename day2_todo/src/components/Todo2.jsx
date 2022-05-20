import React, { useState } from "react";
import { Todoitem2 } from "./Todoitem2";
import style from "./todo2.module.css";

export const Todo2 = () => {
  let [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handlechange = (e) => {
    setValue(e.target.value);
  };

  const del_me = (id) => {
    let erase = todos.filter(todow => todow.id !== id);
    setTodos(erase);
  };

  return (
    <div>
      second task:
      <input value={value} onChange={handlechange} />
      <button
        className={style.btn}
        onClick={() => {
          setTodos([...todos, { id: Date.now(), value: value }]);
          setValue("");
        }}
      >
        Add
      </button>
      {todos.map((todow) => (
        <Todoitem2 key={todow.id} todow={todow} onDelete={del_me} />
      ))}
    </div>
  );
};

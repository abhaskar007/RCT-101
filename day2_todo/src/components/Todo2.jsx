import React, { useState } from "react";

export const Todo2 = () => {
  let [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handlechange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      second task:
      <input value={value} onChange={handlechange} />
      <button
        onClick={() => {
          setTodos([...todos, {value: value}]);
          setValue("");
        }}
      >
        Add
      </button>
      {todos.map((todow) => (
        <div>{todow.value}</div>
      ))}
      
    </div>
  );
};



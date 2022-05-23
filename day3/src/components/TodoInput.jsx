import React, { useState } from "react";

export const TodoInput = ({addTodo}) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="new todo item"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
      disabled={!value}
        onClick={() => {
            
            addTodo(value);
            setValue("")
        }}
      >
        add
      </button>
    </div>
  );
};

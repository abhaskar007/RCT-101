import React from "react";

export const TodoList = ({ children}) => {
  return (
    <div>
      <h3>Here is your Todo List</h3>
    {children}
    </div>
  );
};

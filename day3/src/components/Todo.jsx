import React, { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { v4 as uuidv4 } from 'uuid';

export const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newtodo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        value: newtodo,
      },
    ]);
  };
  const Delete = (value) => {
    setTodos(todos.filter((todo) => todo !== value));
  };
  return (
    <div>
      Todo
      <TodoInput addTodo={addTodo} />
      <TodoList>
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} value={todo.value} Delete={Delete} />
          ))}
        </ul>
      </TodoList>
    </div>
  );
};

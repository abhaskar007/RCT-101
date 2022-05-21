import React from "react";
import styles from './todo.module.css'

export const TodoList = ({el}) => {
  return (
    <div  >
      
        <div>{ el.value }</div>
    </div>
  );
};

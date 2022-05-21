import React, { useState } from "react";
import { TodoList } from "./TodoList";
import styles from './todo.module.css';


export const Todo = () => {

  let [inp, setInp] = useState("");
  const [render, setRender] = useState([]);

  return (
    <div>

<div className={styles.box}>
      {render.map((el) => (

        <div  ><TodoList key={el.id} el={el}/></div>
        ))}
        </div>

      <input placeholder='Write Something'
        value={inp}
        onChange={(e) => {
          setInp(e.target.value);
        }}
      />

      <button className={styles.btn}
        onClick={() => {
          setRender([
            ...render,
            {
              id: Date.now(),
              value: inp,
              isCompleted: false,
            },
          ]);
          setInp("");
        }}
      >
        +
      </button>

     
    </div>
  );
};

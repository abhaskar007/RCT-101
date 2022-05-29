import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

export const Todos = () => {
    const [page, setPage] = useState(1);
    const [limit ,setLimit]= useState(5);
    const [todos, setTodo] = useState([]);
    const [totalCount, setTotalcount] = useState(0);
    useEffect(() => {
      axios.get(`http://localhost:8080/todo?_page=${page}&_limit=${limit}`).then((r) => {
        setTodo(r.data);
        setTotalcount(Number(r.headers["x-total-count"]));
      });
    }, [page,limit]);
    return (
      <div className="App">
        <button
          disabled={totalCount < page * limit}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
        <select onChange={(e)=>setLimit(Number(e.target.value))}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="30">30</option>
        </select>
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        
        {todos.map((todo, index) => (
          <div key={todo.id}>
            {todo.id} . {todo.value}
          </div>
        ))}
      </div>
    );
}

import React, { useState } from "react";

export const Todo5 = () => {
  const [inp, setInp] = useState("");
  const [render, setRender] = useState([]);
  return (
    <div>
      Todo5
      <input
      value={inp}
        onChange={(e) => {
          setInp(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setRender([...render, {id:Date.now(), value: inp }]);
          setInp("");
        }}
      >
        +
      </button>
      {render.map((items_list) => (
          <div>
              <input type="checkbox"/>
        <div key={items_list.id}>{items_list.value}</div>
        </div>
      ))}
    </div>
  );
};

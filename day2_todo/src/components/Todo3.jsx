import React, { useState } from "react";

export const Todo3 = () => {
  let [xxx, setXxx] = useState("");
  const [yyy, setYyy] = useState([]);
  return (
    <div>
      Todo3
      <input
        value={xxx}
        onChange={(e) => {
          setXxx(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setYyy([...yyy, { id: 1, value: xxx }]);
          setXxx("");
        }}
      >
        Add
      </button>
      {yyy.map((e) => (
        <div>
        <input type="checkbox"/>
        <div key={e.id}> {e.value}</div>
        </div>
      ))}
    </div>
  );
};

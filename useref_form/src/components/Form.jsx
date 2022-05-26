import React, { useEffect, useState } from "react";

export const Form = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    age: 0,
  });

  const handleonchange = (e) => {
    let { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      Form
      <form>
        <div>
          <label>Name :</label>
          <input
            type="text "
            placeholder="enter name"
            value={form.username}
            onchange={handleonchange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="write email"
            value={form.email}
            onchange={handleonchange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="enter password"
            value={form.password}
            onchange={handleonchange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            placeholder="enter age"
            value={form.age}
            onchange={handleonchange}
          />
        </div>
      </form>
    </div>
  );
};

import axios from "axios";
import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, password);
    axios({
      method: "POST",
      url: "http://localhost:5000/api/register",
      data: {
        username: name,
        password: password,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="name"
          placeholder="insert name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="password"
          placeholder="insert password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Submit</button>
      </form>
    </>
  );
}

export default Register;

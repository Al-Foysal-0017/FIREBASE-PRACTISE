import React from "react";
import db from "./Config";

const PostData = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const { email, name, password } = form;
    e.preventDefault();
    db.collection("user").add({
      name,
      email,
      password,
    });
  };

  console.log(form);
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          className="form-input"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleOnChange}
        />
        <input
          className="form-input"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleOnChange}
        />
        <input
          className="form-input"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleOnChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default PostData;

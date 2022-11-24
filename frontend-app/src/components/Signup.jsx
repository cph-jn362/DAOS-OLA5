import { useState } from "react";
import SignupCSS from "./Signup.module.css";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    console.log();
  }

  return (
    <div className={SignupCSS.signup}>
      <h1>Register profile</h1>
      <form>
        <input
          type="text"
          onChange={handleChange}
          name="fullname"
          id="fullname"
          value={input.fullname}
          placeholder="Your full name"
        />
        <br /> <br />
        <input
          type="email"
          onChange={handleChange}
          name="email"
          id="email"
          value={input.email}
          placeholder="E-mail"
        />
        <br /> <br />
        <input
          type="text"
          onChange={handleChange}
          name="password"
          id="password"
          value={input.password}
          placeholder="Password"
        />
        <br /> <br />
        <button onClick={handleClick}>Register profile</button>
      </form>
    </div>
  );
};

export default Signup;

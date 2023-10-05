import axios from "axios";
import React, { useState } from "react";
import '../Css/Home.css'

const Login = () => {
  let [email, setEmail] = useState("");

  let [password, setPassword] = useState("");

  const handlelogin = (e) => {
    e.preventDefault();

    axios
      .get(`http://localhost:5000/users?email=${email}`)
      .then((res) => {
        console.log(res.data);
        if (res.data[0].email == email && res.data[0].password == password) {
          alert("Logged In");
        } else {
          alert("Login Failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="login-div">
        <div className="login-logo">
          <img src="https://uspoloassn.in/cdn/shop/files/USPA_Logo_e5e8f319-4b6a-47dd-bd4d-4422173c3ebb_600x.png?v=1660826567" alt="" />
        </div>
        <div className="login-text">
          <h1>Log In with E-mail ID</h1>
        </div>
        <form onSubmit={handlelogin} className="login-form">
          <input
            type="email"
            placeholder="Enter your E-mail"
            onChange={(e) => setEmail(e.target.value)}
            className="email-inp login-inp"
            required
          />
          <br />
          <input
            type="password"
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
            className="pass-inp login-inp"
            required
          />
          <div className="check-div">
            <input type="checkbox" className="checkbox" required />
            <p>Remember me....</p>
          </div>
          <input type="submit" className="submit-inp" />
        </form>
      </div>
    </div>
  );
};

export default Login;

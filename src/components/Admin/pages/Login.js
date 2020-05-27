import React, { useState, useContext } from "react";
import {AuthContext} from '../../../shared/context/auth-context' 

import "./admin.scss";

const Login = () => {
  const auth = useContext(AuthContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    auth.login()
    console.log("Login successfull");
    window.location.href = '/admin'
  };


  return (
    <div className='login center'>
      <form onSubmit={submitHandle}>
        <h2>Login</h2>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          placeholder='email'
          required
        />
        <input
          type='password'
          password={password}
          onChange={(e) => setPassword(e.target.value)}
          name='password'
          placeholder='password'
          required
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;

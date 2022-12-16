import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChangeHandler = (e) => setEmail(e.target.value);
  const passwordChangeHandler = (e) => setPassword(e.target.value);

  const generateError = (err) => {
    toast.error(err, {
      position: "bottom-right",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          email && generateError(email);
          password && generateError(password);
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={email}
            placeholder="Email"
            onChange={emailChangeHandler} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={passwordChangeHandler}
          />
        </div>
        <button type="submit">Login</button>
        <span>
          You don't have an account ? <Link to='/register'>Register</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;

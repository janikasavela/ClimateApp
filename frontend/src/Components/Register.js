import React, { useState, useEffect, useRef } from 'react';
import {checkUsersInput} from './controlFunctions/controlInputs.js';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { register } from './services/userService.js';


export default function Register({setPathName, pathName}) {

  const callingTheServer = async () => {

    const { data : post } = await register(username, password); 
    if(post.hasOwnProperty('username')) { 
      return toast.info((loginInfo), {position: toast.POSITION.BOTTOM_CENTER});
    }
    if(post.hasOwnProperty('code')) {
      console.log(post);
      if (post.errno === 1062) return toast.info(("Username taken, try another username!"), {position: toast.POSITION.BOTTOM_CENTER}); 
      if (post.errno === -4078) return toast.info(("Something went wrong, please try again later!"), {position: toast.POSITION.BOTTOM_CENTER}); 
    }   
  };

  const loginInfo = () => (
    <div>
      <p>Registration was successful! You can now login: </p>
       <Link onClick={() => setPathName("/Login")} className={`${pathName === "/Login" ? "active" : "navlink"}`} id="register-link" to="/Login">LOGIN HERE</Link>
    </div>
  );

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const usernameRef = useRef();
  useEffect(() => { usernameRef.current.focus(); } , []);
  // focus on the username when first render register component

  const handleSubmit = e => {
    e.preventDefault();
    //prevent from sending the Form to the backend, so that the page does not reload

    if (password !== password2) return toast("The given password do not match!", {position: toast.POSITION.BOTTOM_CENTER}); 
    // check that the entered passwords are the same

    let checkInputs = checkUsersInput(username, password);
    // checking that the inputs are valid for the database

    if (checkInputs) return toast(checkInputs, {position: toast.POSITION.BOTTOM_CENTER});

    // if no error in inputs calling the server
    callingTheServer();

  }

    return (
        <div className="container2">
        <form className="register" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          ref={usernameRef}
          id="username"
          type="text"
          placeholder="User123"
          name="username"
          autoComplete='off'
          required
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
          placeholder="your password"
          name="password"
          autoComplete='off'
          required
        />
        <label htmlFor="password2">Password Again</label>
        <input
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          id="password2"
          type="password"
          placeholder="your password"
          name="password"
          autoComplete='off'
          required
        />
        <button>Register</button>
      </form> 
      </div>

    );
};
import React, { useState, useEffect, useRef, useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { login } from './services/authService.js';
import welcome from '../assets/images/welcome.webp';
import { UserContext } from './context/userContext.js';
import { UserInfoContext } from './context/userInfoContext.js';

export default function Login () {

  const { setLogged } = useContext(UserContext);
  const { setUser } = useContext(UserInfoContext);

  const callingTheServer = async () => {
 
    const data = await login(username, password); 
    console.log(data);
    if(data.data === "wrong password") return toast.info(("Wrong password"), {position: toast.POSITION.BOTTOM_CENTER}); 
    if(data.data === "user does not exists") return toast.info(("User does not exists"), {position: toast.POSITION.BOTTOM_CENTER}); 
    if(data.data === -4078) return toast.info(("Something went wrong, please try again later!"), {position: toast.POSITION.BOTTOM_CENTER}); 
    localStorage.setItem('token', data.data);
    setLogged(true);
    setUser(username);
    setAuthSuccess(true);
  };

const [authSuccess, setAuthSuccess] = useState(false);
const [username, setUserName] = useState("");
const [password, setPassword] = useState("");


const usernameRef = useRef();

useEffect (() => { 
  usernameRef.current.focus();
  // focus on the username when first render login component
} , [] );


const handleSubmit = e => {
  e.preventDefault();
  //prevent from sending the Form to the backend, so that the page does not reload

  callingTheServer();
  //here call the server
}


return (

    <div className="container2">
      {authSuccess ? ( <React.Fragment>
        <h4>
        Welcome {`${username}`}!
        </h4>
         <div className="picturee">
        <img src={welcome} alt="mountains" />
      </div>
      </React.Fragment>
      ) : (
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
    <button>Login</button>
  </form>
      )}
  </div>
);

};
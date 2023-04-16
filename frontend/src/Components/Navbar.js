import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({setPathName, pathName}) {

const isLoggedIn = true;

return (
    
<nav className="tabs">
<ul>
  <li>
   <p className="downdrop">Views ⇓</p>
    <ul className="dropdown">
      <li><Link onClick={() => setPathName("/v1")} className="link-style" to="/v1">v1</Link></li>
      <li><Link onClick={() => setPathName("/v2")} className="link-style" to="/v2">v2</Link></li>
    </ul>
  </li>
</ul>
    <ul>
  <li><Link onClick={() => setPathName("/")} className={`${pathName === "/" ? "active" : "navlink"}`} to="/">Home</Link></li>
  {isLoggedIn ? ( <React.Fragment>
  <li><Link onClick={() => setPathName("/Login")} className={`${pathName === "/Login" ? "active" : "navlink"}`}  to="/Login">Login</Link></li>
  <li><Link onClick={() => setPathName("/Register")} className={`${pathName === "/Register" ? "active" : "navlink"}`} to="/Register">Register</Link></li>
  </React.Fragment>
  ) :  
    ( <React.Fragment>
  <li><Link onClick={() => setPathName("/Profile")} className={`${pathName === "/Profile" ? "active" : "navlink"}`}  to="/Profile">Profile</Link></li>
  {/* <li><Link onClick={() => {setPathName("/");}} className="navlink" to="/Logout">Log Out</Link></li> */}
  </React.Fragment>
  )}  
  </ul>
</nav>

);

};
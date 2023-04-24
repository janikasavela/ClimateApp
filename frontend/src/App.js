import './App.css';
import React, { useState, useEffect, useMemo } from 'react';
import Footer from './Components/Footer.js';
import Homepage from './Components/Homepage.js';
import Login from './Components/Login.js';
import Navbar from './Components/Navbar.js';
import Register from './Components/Register.js';
import Profile from './Components/Profile.js';
import V1 from './Components/visualizationViews/V1.js';
import V2 from './Components/visualizationViews/V2.js';

import { Routes, Route, useLocation} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { UserContext } from './Components/context/userContext';
import { UserInfoContext } from './Components/context/userInfoContext';
import { Logout } from './Components/Logout';
import Errorpage from './Components/Errorpage';

function App() {

const [pathName, setPathName] = useState(useLocation().pathname);
const [logged, setLogged] = useState(false);
const [user, setUser] = useState("");

useEffect( () => {

  if (localStorage.hasOwnProperty('token')) {
    setLogged(true);
  }
  else {
    setLogged(false);
  }
  console.log(logged);
}, [logged])

  const userLogged = useMemo(() => ({ logged, setLogged }), [logged, setLogged]);
  const userInfo = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
   <div className="container">
     <ToastContainer />
       <header>
        <UserContext.Provider value={userLogged}>
          <Navbar setPathName={setPathName} pathName={pathName}/>
          </UserContext.Provider>
          <Routes>
              <Route path="/" exact element={<Homepage setPathName={setPathName} />} />
              <Route path="/v1" element={<V1 />} />
              <Route path="/v2" element={<V2 />} />
              <Route path="/Login" element={<UserInfoContext.Provider value={userInfo}><UserContext.Provider value={userLogged}><Login /></UserContext.Provider></UserInfoContext.Provider>} />
              <Route path="/Logout" element={<UserInfoContext.Provider value={userInfo}><UserContext.Provider value={userLogged}><Logout /></UserContext.Provider></UserInfoContext.Provider>} />
              <Route path="/Profile" element={<UserInfoContext.Provider value={userInfo}><UserContext.Provider value={userLogged}><Profile /></UserContext.Provider></UserInfoContext.Provider>} />
              <Route path="/Register" element={<Register setPathName={setPathName} pathName={pathName}/>}/>
              <Route path="*" element={<Errorpage/>}/>
          </Routes>
       </header>
       <Footer />
   </div>
  );
}

export default App;

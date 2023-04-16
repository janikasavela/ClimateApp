import { useContext } from 'react'
import { UserContext } from './context/userContext.js';
import { UserInfoContext } from './context/userInfoContext.js';


export const Logout = () => {
  
    const { setLogged } = useContext(UserContext);
    const { setUser} = useContext(UserInfoContext);

        localStorage.removeItem('token');
        setLogged(false);
        setUser("");
        window.location = '/';

  return (
    null
  )
};
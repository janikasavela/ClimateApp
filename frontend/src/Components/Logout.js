import { useContext } from 'react'
import { UserContext } from './context/userContext.js';
// import { useNavigate } from 'react-router-dom'

export const Logout = () => {
    // const navigation = useNavigate();
    const { setLogged } = useContext(UserContext);

        localStorage.removeItem('token');
        setLogged(false);
        // navigation("/");
        window.location = '/';

  return (
    null
  )
};
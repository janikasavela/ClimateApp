import React, { useState, useContext, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { UserContext } from './context/userContext';
import { UserInfoContext } from './context/userInfoContext.js';
import { deleteUser } from './services/authService.js';
import CreateView from './CreateView';
import { getViews } from './services/authService.js';
import { Link } from 'react-router-dom';


export default function Profile() {

const { setUser } = useContext(UserInfoContext);
const { user } = useContext(UserInfoContext);
const { setLogged } = useContext(UserContext);
let [confirm, setConfirm] = useState(false);
const [viewData, setViewData] = useState([]);

const callingTheServer = async () => {
  setViewData((await getViews(user)).data);
  console.log(viewData);
};


useEffect(() => {
  callingTheServer();
}, [])


const deleteProfile = async (e) => {
    e.preventDefault()

  const data = await deleteUser(user);

  if (data.status === 200 ) {
    setUser("");
    setLogged(false);
    localStorage.removeItem('token');
    window.location = '/';
  }

  return toast.info("Something went wrong, please try again later!", {position: toast.POSITION.BOTTOM_CENTER});
}

const views = viewData.map((view, i)=> 
<li className='liViews' key={view.url}>
    <div className='ownViews'>
        <h5>{view.title}</h5>
        <Link to={"/custom/" + view.url}>Open View</Link>
    </div>
</li>  
)


    return (
   
         <div className=''>

        {confirm ? ( <React.Fragment>
            <form onSubmit={deleteProfile} className='createForm2'>
                    <h3>Confirm user deletion</h3>
                    <p>If you delete a user, you will also lose all the views you created!</p>
                    <button type="submit" className="deleteButton">Delete</button>
                    <button onClick={() => setConfirm(false)}className="deleteButton">Cancel</button>
                </form>
        </React.Fragment>
        ) : (
            <React.Fragment>
              <div className="testi">

              <div className='createForm'>
                <h3>Views:</h3>
                {
                    viewData.length > 0 ? views : 
                    <div>
                        <p>No views created.</p>
                    </div>
                }
                   </div>

              <CreateView username={user}/>
              </div>
         
        <button onClick={() => setConfirm(true)} className="deleteButton">Delete user</button> </React.Fragment> 
        )}
    </div>

  );

};
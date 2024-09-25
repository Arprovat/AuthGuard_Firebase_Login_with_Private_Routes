import React, { useContext } from 'react';
import { Auth_context } from '../Private-auth/Private_auth';
import { useNavigate } from 'react-router-dom';

const Private_Route = ({children}) => {
    const {User,Loader}= useContext(Auth_context);
 const Navigate = useNavigate();

  if(Loader){
    <span className="loading loading-dots loading-lg"></span>
  }
    if(User){
        return children
    }
    else{
        Navigate('/login')
    }
    return (
        <div>
            
        </div>
    );
};

export default Private_Route;
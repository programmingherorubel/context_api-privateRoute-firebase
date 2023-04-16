import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const ProtractedRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    
    if(loading){
       return <progress className="progress text-white w-56"></progress>
    }
    else if(user?.email){
        return children
    }else{
        return <Navigate to='/login' replace={true}></Navigate>
    }
};

export default ProtractedRoute;
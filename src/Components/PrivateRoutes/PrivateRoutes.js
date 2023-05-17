import React, { useContext } from 'react';
import { authContext } from '../Auth/Auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const PrivateRoutes = ({children}) => {
    const {user, loading}= useContext(authContext);
    const location= useLocation();
    if (loading){
        return loading ;
    }
    
       if(!user){
        toast("You Need to Login In first",{ position: "top-center",autoClose: 1000},{
            toastId: "success"        
        });
        return <Navigate to='/login' state={{from: location}} replace ></Navigate>;
    
       }
    
       return children;
   
};

export default PrivateRoutes;
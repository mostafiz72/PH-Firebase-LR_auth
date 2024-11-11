import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({children}) {

    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <div className=' text-center'><span className="my-5 loading loading-ring loading-2xl"></span></div>;
    }

    if(user){
        return children;
    }

  return (
    <>
       <Navigate to="/login"></Navigate>
    </>
  )
}

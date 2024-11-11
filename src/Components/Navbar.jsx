import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'

export default function Navbar() {
  const {user, signOutUser} = useContext(AuthContext)

  const handleSignOut = ()=>{
    signOutUser()
    .then(()=>{
      console.log("Sign Out Successfully");
    })
    .catch(error => console.log("Error", error.message))
  }

  return (
    <>
    <nav className="bg-white sticky start-0 top-0 dark:bg-gray-900 w-full border-gray-200 dark:border-gray-600">
      <div className="flex flex-wrap items-center justify-between mx-auto p-5 container">
        <div>
            <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PH Media</span>
            </Link>
        </div>
        <div className="flex gap-5">
            <Link to="/login" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Login</Link>
            <Link to="/register" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</Link>
             {user && <>
            <Link to="/orders" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Order</Link>
            <Link to="/profile" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Profile</Link>
             
             </>}
        </div>
        <div>
          <div>
            {user?
           <>
            <span className=' text-2xl font-bold text-red-900'>{user.email}</span>
            <button onClick={handleSignOut} className=' btn btn-secondary font-bold ml-5'>Sign-Out</button>
            </>
            :
            <Link to="/login">Login</Link>
            } 
            
            {/*user jodi na thake tahole jno error dite na pare sei jonno ooptional chening (?) use kora hoy */}
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

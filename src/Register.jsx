import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './Provider/AuthProvider';

export default function Register() {
    const {createUser} = useContext(AuthContext)  


    const handleRergister = (e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);


        /// create user useing the AuthProvider context
        createUser(email, password)
        .then(result => {
            console.log('User created successfully!', result.user);
        })
        .catch(error =>{
            console.error('Error creating user:', error);
        })
    }

  return (
    <>
             <div  className=' bg-gray-900 h-screen'>
                <div className=' max-w-screen-sm mx-auto h-screen flex flex-col justify-center items-center'>
                    <div className=" w-full  border border-blue-500 py-8 px-5 rounded-lg">
                        <h2 className=' font-bold text-blue-600 text-3xl text-center'>Register From</h2>
                        <form onSubmit={handleRergister}>
                            <div className="mb-5">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input type="text" id="name" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your name" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-mail" />
                            </div>
                            <div className="mb-5 relative">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input placeholder='Password' type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                 <button  className=' absolute top-10 right-2'>show</button>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer justify-start label">
                                    <input type="checkbox" name='trams' defaultChecked className="checkbox checkbox-accent" />
                                    <span className="label-text ml-3">Accept Trams and Condition's</span>
                                </label>
                            </div>
                            <div className="mb-5">
                                <h3 className=' text-right text-blue-500'><Link to="/login">Login Here</Link></h3>
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                        </form>
                    </div>
                </div>
            </div>
    </>
  )
}

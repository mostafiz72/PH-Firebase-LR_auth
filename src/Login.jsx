import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';

export default function Login() {

    const Nevigate = useNavigate();

    const { signInUser, signInWithGoogle } = useContext(AuthContext)

    /// sing up with google functionality start here now
    /// sing up with google functionality start here now
    const handleSignUp = () =>{
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
            Nevigate('/orders')  // Amara same kaj ta Register page o korte pari
        })
       .catch(err => console.log(err.message));
    }

     const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        //// sign in user useing from the context

        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            e.target.reset()
            Nevigate('/orders')  // Amara same kaj ta Register page o korte pari
        })
        .catch(result => {
            console.log(result.user);
        })
        
     }


  return (
    <>
            <div  className=' bg-gray-900 h-screen'>
                <div className=' max-w-screen-sm mx-auto h-screen flex flex-col justify-center items-center'>
                    <div className=" w-full  border border-blue-500 py-8 px-5 rounded-lg">
                        <h2 className=' font-bold text-blue-600 text-3xl text-center'>Login From</h2>
                        <form onSubmit={handleLogin}>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-mail" />
                            </div>
                            <div className="mb-5 relative">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input placeholder='Password' type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                 <button  className=' absolute top-10 right-2'>show</button>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer justify-start label">
                                    <input type="checkbox"  defaultChecked className="checkbox checkbox-accent" />
                                    <span className="label-text ml-3">Accept Trams and Condition's</span>
                                </label>
                            </div>
                            <div className="mb-5">
                                <h3 className=' text-right text-blue-500'><Link to="/register">Register Here</Link></h3>
                            </div>
                            <button className=' btn btn-accent' onClick={handleSignUp}>Sign-Up-With-Google</button>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                        </form>
                    </div>
                </div>
            </div>
    </>
  )
}

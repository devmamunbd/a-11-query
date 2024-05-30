/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";



const Login = () => {

  const {singInUser, singInGoogle} = useContext(AuthContext)
  const [error, setError] = useState()


  const handleLogin =e => {
    e.preventDefault()

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    singInUser(email, password)
    .then((result)=> {
      console.log(result)
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "User Login Success",
        showConfirmButton: false,
        timer: 1500
      });
     
    })
    .catch(error => {
      setError("email and password dosent match")
      // console.log(error)
    })
    setError('')
  }

  const handleGoogle=()=> {
    singInGoogle()
    .then(result => {
      console.log(result.user)
     
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:gap-6 md:gap-0 md:grid-cols-2 lg:grid-cols-2 p-10">
      <div>
        <img src="regi.jpg" alt="" />
      </div>
      <div className="bg-white shadow-md ">
        <h1 className="text-center text-2xl font-bold mt-2">Login Now</h1>

        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-4 px-10 mt-10">
          
          <div>
          <label htmlFor="">Email</label> <br />
            <input className="w-full outline-none" type="email" name='email' placeholder="email" />
          </div>
         
          <div>
            <label htmlFor="">Password</label> <br />
            <input className="w-full outline-none" type="text" name='password' placeholder="Password" />
            {
              error && <span className="text-red-500">{error}</span>
            }
          </div>
          </div>
          <div className="p-10">

          <button className='bg-black py-3 text-white w-full '>Login Now</button>
          <p className="mt-2">New in here? <Link to="/register" className="text-blue-500 underline">Please Register</Link></p>
          </div>
        </form>


         <h1 className="text-center mb-2 font-bold">Or</h1>
        <div className="px-10">
          <button onClick={handleGoogle} className="bg-black text-white py-3 w-full">
          <FaGoogle  className="mx-auto"/>
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

const Register = () => {


  const {createUser,updateUserProfile, setUser} = useContext(AuthContext)

  const handleRegister =e => {
    e.preventDefault()

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;


    const users = {name, email, photo}
    axios.post('http://localhost:9000/users', users)

    // console.log(name,email,password,photo)
    createUser(email, password)
    .then((result)=> {
     console.log(result)
     updateUserProfile(name, photo)
     setUser((prevUser) => {
      return {...prevUser, displayName: name, photoURL: photo}
     })
     Swal.fire({
      position: "top-end",
      icon: "success",
      title: "User Register Successfully",
      showConfirmButton: false,
      timer: 1500
    });
     
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
        <h1 className="text-center text-2xl font-bold">Register Now</h1>

        <form onSubmit={handleRegister}>
          <div className="flex flex-col gap-4 px-10">
          <div>
            <label htmlFor="">Full Name</label> <br />
            <input className="w-full outline-none" type="text" name='name' placeholder="Full Name" />
          </div>
          <div>
          <label htmlFor="">Email</label> <br />
            <input className="w-full outline-none" type="email" name='email' placeholder="email" />
          </div>
          <div>
            <label htmlFor="">Photo URL</label> <br />
            <input className="w-full outline-none" type="text" name='photo' placeholder="Photo URL" />
          </div>
          <div>
            <label htmlFor="">Password</label> <br />
            <input className="w-full outline-none" type="text" name='password' placeholder="Password" />
          </div>
          </div>
          <div className="p-10">

          <button className='bg-black py-3 text-white w-full '>Register Now</button>
          <p className="mt-2">Already have an account? <Link to="/login" className="text-blue-500 underline">Please Login</Link></p>
          </div>
        </form>
      </div>
      </div>
   
    </div>
  )
}

export default Register
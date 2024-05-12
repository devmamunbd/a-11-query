/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const ViewDetails = () => {

    const loadData = useLoaderData()
    const {_id, pname, brand, query, image, count, boycott, currentDate, name, email, photoURL} = loadData;
    // console.log(loadData)
    const {user} = useContext(AuthContext)
    const [recoCount, setRecoCount] = useState(0)
    const increaseCount=()=> {
      const sum = recoCount + 1
      setRecoCount(sum)

    }

	const handleRecomended = e => {
		e.preventDefault()
		const form = e.target;
    const RecommenderName = user?.displayName;
    const RecommenderEmail = user?.email;
    const photo = user?.photoURL;
    const userEmail = email;
    const userName = name;
    const queryId = _id;
    const queryTitle = query;
    const recotitle = form.recotitle.value;
    const recoimage = form.recoimage.value;
    const recopname = form.recopname.value;
    const reason = form.reason.value;
    const date = new Date()
    const currentDate = date.toLocaleString()
    const  recoInfo = {RecommenderName,RecommenderEmail,userEmail, userName, queryId, name, photo, recotitle, recoimage, recopname, reason, currentDate} ;
    // console.log(recoInfo)

    if (RecommenderEmail === userEmail) {
      return toast.error("Action Not Permited")
    }

    axios.post('http://localhost:9000/addreco', recoInfo)
    .then(result => {
      console.log(result)
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Add Recommendation Is Done",
        showConfirmButton: false,
        timer: 1500
      });
      // form('')
      increaseCount()
    })
    .catch(error => {
      console.log(error)
    })


	}



  return (
    <div>
        <section className="dark:bg-gray-100 bg-white shadow-md mt-10 dark:text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group  lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src={image} alt="" className="object-contain w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl">{pname}</h3>
				
				<span className="text-xl dark:text-gray-600">Date: {new Date(currentDate).toLocaleString()}</span> <br />
				<span className="text-xl dark:text-gray-600">Brand: {brand}</span>
				<p className="text-xl dark:text-gray-600">Query Title: {query}</p>
				<p className="text-xl dark:text-gray-600">Boycott Reason: {boycott}</p>
				<p className="text-xl dark:text-gray-600">Count: {count}</p>

				<div>
					<h1 className="text-xl font-bold">User Information</h1>
					<div className="space-y-1">
						<img className="w-12 h-12 mt-2 rounded-full" src={photoURL} alt="" />
					
					<p><span className="text-black font-semibold">User Name:</span> {name}</p>
					<p><span className="text-black font-semibold">User Email:</span> {email}</p>
					</div>
          <div className="">
            <h1 className="text-2xl text-black">Recommended Count: {recoCount} </h1>
          </div>
				</div>


			</div>
		</a>
		
	</div>
</section>

<div>
            <div className="bg-white shadow-md mt-10">
        <h1 className="text-center text-2xl font-bold p-4">Recommendation Form</h1>

        <form 
        onSubmit={handleRecomended}
        >
          <div className="flex flex-col justify-center items-center md:flex-row lg:flex-row flex-wrap gap-4 px-10">
          <div>
          <div>
            <label htmlFor="">Recommendation Title</label> <br />
            <input className="w-[400px] outline-none mt-1" type="text" name='recotitle' placeholder="Recommendation Title" />
          </div>
          {/* <div>
          <label htmlFor="">Recommended Product Name</label> <br />
            <input className="w-[400px] outline-none mt-1" type="text" name='recopname' placeholder="Recommended Product Name" />
          </div> */}
          <div>
            <label htmlFor="">Recommended Product Image</label> <br />
            <input className="w-[400px] outline-none mt-1" type="text" name='recoimage' placeholder="Recommended Product Image" />
          </div>
          </div>
         <div>
         <div>
          <label htmlFor="">Recommended Product Name</label> <br />
            <input className="w-[400px] outline-none mt-1" type="text" name='recopname' placeholder="Recommended Product Name" />
          </div>
          <div>
            <label htmlFor="">Recommendation Reason</label> <br />
           <textarea className="w-[400px] outline-none mt-1" name="reason" id="" cols="10" rows="1" placeholder="Recommendation Reason"></textarea>
          </div>
          {/* <div>
            <label htmlFor="">Recommendation Count</label> <br />
            <input className="w-[400px] outline-none mt-1" type="text" name='count' placeholder="Recommendation Count" />
          </div> */}
         </div>
        
          </div>
          <div className="p-10 flex flex-col justify-center items-center mx-auto">
          <button className='bg-black py-3 text-white w-[820px] '>Add Recommendation</button>
          </div>
        </form>
      </div>
    </div>
    <ToastContainer />
    </div>
  )
}

export default ViewDetails
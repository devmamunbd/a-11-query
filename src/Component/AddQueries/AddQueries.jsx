import { useContext } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import axios from "axios"
import Swal from "sweetalert2"

const AddQueries = () => {

  const {user} = useContext(AuthContext)

  const handleAddQueris = e=> {
    e.preventDefault()
    const form = e.target;
    const pname = form.pname.value;
    const brand = form.brand.value;
    const image = form.image.value;
    const query = form.query.value;
    const boycott = form.boycott.value;
    const count = form.count.value;
    const name = user?.displayName;
    const email = user?.email;
    const photoURL = user?.photoURL;
    const date = new Date()
    const currentDate = date.toLocaleString()

    const userInfo = {name, email, photoURL, currentDate}
    const addQueri = {pname, brand, image, query, email, boycott, count,currentDate,name, photoURL, userInfo}
    console.log(addQueri)

    axios.post('http://localhost:9000/addquerie', addQueri)
    .then(result => {
      console.log(result)
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Add Queries has been saved",
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
            <div className="bg-white shadow-md ">
        <h1 className="text-center text-2xl font-bold p-4">Add Queries</h1>

        <form 
        onSubmit={handleAddQueris}
        >
          <div className="flex flex-col justify-center items-center md:flex-row lg:flex-row flex-wrap gap-4 px-10">
          <div>
          <div>
            <label htmlFor="">Product Name</label> <br />
            <input className="w-[400px] outline-none mt-1" type="text" name='pname' placeholder="Product Name" />
          </div>
          <div>
          <label htmlFor="">Product Brand</label> <br />
            <input className="w-[400px] outline-none mt-1" type="text" name='brand' placeholder="Brand Name" />
          </div>
          <div>
            <label htmlFor="">Product Image URL</label> <br />
            <input className="w-[400px] outline-none mt-1" type="text" name='image' placeholder="Image URL" />
          </div>
          </div>
         <div>
         <div>
            <label htmlFor="">Query Title</label> <br />
            <input className="w-[400px] outline-none mt-1" type="text" name='query' placeholder="Query Title" />
          </div>
          <div>
            <label htmlFor="">Boycotting Reason Deatils</label> <br />
           <textarea className="w-[400px] outline-none mt-1" name="boycott" id="" cols="10" rows="1" placeholder="Boycotting Reason Deatils"></textarea>
          </div>
          <div>
            <label htmlFor="">Recommendation Count</label> <br />
            <input className="w-[400px] outline-none mt-1" type="text" name='count' placeholder="Recommendation Count" />
          </div>
         </div>
        
          </div>
          <div className="p-10 flex flex-col justify-center items-center mx-auto">
          <button className='bg-black py-3 text-white w-[820px] '>Add Query</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddQueries
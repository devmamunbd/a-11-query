import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCart = () => {


    const loadData = useLoaderData()
    const {_id, pname, brand, query, image, count, boycott} = loadData;

    const handleUpdateQueris = e => {
    e.preventDefault()
    const form = e.target;
    const pname = form.pname.value;
    const brand = form.brand.value;
    const image = form.image.value;
    const query = form.query.value;
    const boycott = form.boycott.value;
    const count = form.count.value;
    const upInfo = {pname, brand, image, query, boycott, count}
    console.log(upInfo)

        fetch(`http://localhost:9000/update/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(upInfo)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })


    }



  return (
    <div>
    <div className="bg-white shadow-md ">
<h1 className="text-center text-2xl font-bold p-4">Add Queries</h1>

<form 
onSubmit={handleUpdateQueris}
>
  <div className="flex flex-col justify-center items-center md:flex-row lg:flex-row flex-wrap gap-4 px-10">
  <div>
  <div>
    <label htmlFor="">Product Name</label> <br />
    <input className="w-[400px] outline-none mt-1" defaultValue={pname} type="text" name='pname' placeholder="Product Name" />
  </div>
  <div>
  <label htmlFor="">Product Brand</label> <br />
    <input className="w-[400px] outline-none mt-1" defaultValue={brand} type="text" name='brand' placeholder="Brand Name" />
  </div>
  <div>
    <label htmlFor="">Product Image URL</label> <br />
    <input className="w-[400px] outline-none mt-1" defaultValue={image} type="text" name='image' placeholder="Image URL" />
  </div>
  </div>
 <div>
 <div>
    <label htmlFor="">Query Title</label> <br />
    <input className="w-[400px] outline-none mt-1" defaultValue={query} type="text" name='query' placeholder="Query Title" />
  </div>
  <div>
    <label htmlFor="">Boycotting Reason Deatils</label> <br />
   <textarea className="w-[400px] outline-none mt-1" defaultValue={boycott} name="boycott" id="" cols="10" rows="1" placeholder="Boycotting Reason Deatils"></textarea>
  </div>
  <div>
    <label htmlFor="">Recommendation Count</label> <br />
    <input className="w-[400px] outline-none mt-1" defaultValue={count} type="text" name='count' placeholder="Recommendation Count" />
  </div>
 </div>

  </div>
  <div className="p-10 flex flex-col justify-center items-center mx-auto">
  <button className='bg-black py-3 text-white w-[820px]'>Update Query</button>
  </div>
</form>
</div>
</div>
  )
}

export default UpdateCart
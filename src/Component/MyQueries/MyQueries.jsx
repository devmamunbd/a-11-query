/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import QueryCard from "../QueryCard/QueryCard";
import Swal from "sweetalert2";

const MyQueries = () => {

  const {user} = useContext(AuthContext)
  const [items, setItems] = useState([])

  useEffect(()=> {
    fetch(`https://assignment-eleven.vercel.app/queries/${user?.email}`, {credentials: "include"})
    .then(res => res.json())
    .then(data => {
      setItems(data)
    })
  },[])

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-eleven.vercel.app/delete/${id}`, {
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount> 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        })
        const remaining = items.filter(item => item._id !== id)
        setItems(remaining)

       
      }
    });
}







  return (
    <div className="mt-10">
      <div className="">
        <div className="relative">
          <img
            className="sm:w-[700px] flex flex-col justify-center mx-auto md:w-full lg:w-full h-[300px] rounded-lg"
            src="HomeBanner.jpg"
            alt=""
          />
          <div className="absolute flex justify-center items-center top-[47%] left-[45%] md:top-[31%] md:left-[45%]">
            <Link
              to="/add"
              type="button"
              className="px-8 py-3 font-semibold border rounded text-white"
            >
              Add Queries
            </Link>
          </div>
        </div>
      </div>

    <div className="mt-10">
    <h1 className="text-center text-2xl font-bold mb-7">My Queries Card</h1>
    </div>

    <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-7">
    {
      items.map(item => <QueryCard key={item._id} item={item} handleDelete={handleDelete}></QueryCard>)
    }
    </div>

    </div>
  );
};

export default MyQueries;

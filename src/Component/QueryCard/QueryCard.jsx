/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// import axios from "axios";
import { Link } from "react-router-dom";

const QueryCard = ({item, handleDelete}) => {
    const {_id, pname, brand, query, image, count, boycott} = item;


  

  return (
    <div className="w-[370px] p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
	<img src={image} alt="" className="object-contain  w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{pname}</span>
		<h2 className="text-xl font-semibold tracking-wide">Brand: {brand}</h2>
	</div>
	<p className="dark:text-gray-800">Query Title: {query}</p>
    <div className="flex gap-4 mt-6">
        <Link to={`/details/${_id}`}>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">View Details</button>
        </Link>
        <Link to={`/update/${_id}`}>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Update</button>
        </Link>
        <button onClick={() => handleDelete(_id)} className="bg-blue-600 text-white px-4 py-2 rounded-md">Delete</button>
    </div>
</div>
  )
}

export default QueryCard
import { Link } from "react-router-dom"

const MyQueries = () => {
  return (
    <div className="mt-10">

      <div className="">
      <div className="relative">
      <img className="w-full h-[300px] rounded-lg" src="HomeBanner.jpg" alt="" />
      <div className="absolute flex justify-center items-center top-[47%] left-[45%]">
      <Link to="/add" type="button" className="px-8 py-3 font-semibold border rounded text-white">Add Queries</Link>
      </div>
      </div>
      </div>

    </div>
  )
}

export default MyQueries
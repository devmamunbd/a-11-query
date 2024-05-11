import { Link, useLoaderData } from "react-router-dom"

const Queries = () => {

  const loadData = useLoaderData()
  const sortedData = loadData.sort((a,b)=> new Date(b.currentDate) - new Date(a.currentDate))
//   console.log(sortedData)


  return (
    <div>
      <h1 className="text-center text-black font-bold text-2xl">All Queries</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {
            sortedData.map(data => <div key={data._id}>
              <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex space-x-4">
		<img alt="" src={data?.photoURL} className="object-contain w-12 h-12 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{data?.name}</a>
			<span className="text-xs dark:text-gray-600">Date: {new Date (data?.currentDate).toLocaleDateString()}</span>
		</div>
	</div>
	<div>
		<img src={data?.image} alt="" className="object-contain w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-xl font-semibold">Product Name: {data?.pname}</h2>
		<p className="text-sm dark:text-gray-600">Query Title: {data?.query}</p>
	</div>
	<div className="mt-4">
		<h3>Brand Name: {data?.brand}</h3>
		<h3>Boycott Reasson: {data?.boycott}</h3>
		<h3>Recommendation Count: {data?.count}</h3>
	</div>
  <Link to={`/details/${data._id}`}> <button className="w-full py-3 bg-black text-white">Recommend</button> </Link>
</div>
            </div>)
          }
        </div>
    </div>
  )
}

export default Queries
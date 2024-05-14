/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router-dom"

const Queries = () => {

	const [itemPerPages, setItemPerPages] = useState(6)
	const [currentPage, setCurrentPage] = useState(1)
	const [count, setCount] = useState(0)
	const [search, setSearch] = useState('')
	const [loadData, setLoadData] = useState([])


	useEffect(()=> {
		fetch(`https://assignment-eleven.vercel.app/all-queries?page=${currentPage}&size=${itemPerPages}&search=${search}`)
		.then(res => res.json())
		.then(data => {
			setLoadData(data)
		})
	},[currentPage, itemPerPages, search])

//   const loadData = useLoaderData()
  const sortedData = loadData.sort((a,b)=> new Date(b.currentDate) - new Date(a.currentDate))
//   console.log(sortedData)
	useEffect(()=> {
	setCount(sortedData.length)
	},[sortedData.length])
	// console.log(count)

useEffect(()=> {
		fetch(`https://assignment-eleven.vercel.app/queries-count?search=${search}`)
		.then(res => res.json())
		.then(data => {
			setCount(data.count)
		})
},[search])
// console.log(count)

const numberOfPage = Math.ceil(count / itemPerPages)
const pages = [...Array(numberOfPage).keys()].map(element => element + 1)


const handlePagination= (value)=> {
	console.log(value)
	setCurrentPage(value)
}


const handleSaerch = e => {
	e.preventDefault()
	const text = e.target.search.value;
	setSearch(text)
}


// console.log(search)

  return (
    <div>
      <h1 className="text-center text-black font-bold text-2xl mb-5">All Queries</h1>
	<form onSubmit={handleSaerch} action="">
		<div className="flex justify-center items-center gap-4">
			<input name="search" className=" border-[1px] w-96 border-cyan-500 outline-0" type="text" placeholder="Enter Product Name" />
			<button className="bg-black font-semibold rounded-md px-10 py-2 text-white" type="submit">Search</button>
		</div>
	</form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {
            sortedData.map(data => <div key={data._id}>
              <div className="flex flex-col h-[820px] p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex space-x-4">
		<img alt="" src={data?.photoURL} className="object-contain w-12 h-12 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{data?.name}</a>
			<span className="text-xs dark:text-gray-600">Date: {new Date (data?.currentDate).toLocaleString()}</span>
		</div>
	</div>
	<div>
		<img src={data?.image} alt="" className="object-contain w-52 md:w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-xl font-semibold">Product Name: {data?.pname}</h2>
		<p className="text-sm dark:text-gray-600">Query Title: {data?.query}</p>
	</div>
	<div className="mt-4">
		<h3>Brand Name: {data?.brand}</h3>
		<h3>Boycott Reasson: {data?.boycott}</h3>
		<h3>Recommendation Count: {data?.count}</h3>
	</div>
  <Link to={`/details/${data._id}`}> <button className=" w-52 md:w-full py-3 bg-black text-white">Recommend</button> </Link>
</div>
            </div>)
          }
        </div>

		{/* pagination */}
		<div className="mt-5">
			<h1 className="text-center font-bold text-black mb-4">Pagination</h1>

			<div className="flex gap-5 text-white justify-center">
				<button disabled={currentPage === 1} onClick={()=> handlePagination(currentPage - 1)} className="bg-black px-7 py-1 disabled:bg-gray-500">Prev..</button>
				<div  className="flex gap-4">
					{
						pages.map(page => <div key={page}>
							<button onClick={()=>handlePagination(page)} className={` ${currentPage === page ? 'bg-blue-500 text-white px-3 py-2' : 'bg-black text-white px-3 py-2'}`}>{page}</button>
						</div>)
					}
				</div>
				<button disabled={currentPage === numberOfPage} onClick={()=> handlePagination(currentPage + 1)} className="bg-black px-7 py-1 disabled:bg-gray-500">Next..</button>
			</div>
		</div>
    </div>
  )
}

export default Queries
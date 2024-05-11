import { Link, useLoaderData } from "react-router-dom"

const Home = () => {


  const loadData = useLoaderData()
  const sortedData = loadData.sort((a,b)=> new Date(b.currentDate) - new Date(a.currentDate))

  return (
    <div>

   
      <div className="mt-10 mb-10">

       {/* slider */}
      <div className="carousel w-full h-[550px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="/slider1.jpg" className="w-full rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="/slider2.jpg" className="w-full rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="/slider3.jpg" className="w-full rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
</div>
     
      {/* banner */}
    <div className="mt-10 ">
      <div className="relative">
      <img className="w-full h-[500px] rounded-lg" src="HomeBanner.jpg" alt="" />
      <div className="absolute flex justify-center items-center top-[47%] left-[45%]">
      <Link to="/queries" type="button" className="px-8 py-3 font-semibold border rounded text-white">All Queries</Link>
      </div>
      </div>
    </div>

      </div>


      <div className="mt-10">
        <h1 className="text-3xl text-black text-center font-bold">Recent Queries</h1>

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
		
	</div>
</div>
            </div>)
          }
        </div>
      </div>


   
    </div>
  )
}

export default Home
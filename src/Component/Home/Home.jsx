import { Link } from "react-router-dom"

const Home = () => {
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

   
    </div>
  )
}

export default Home
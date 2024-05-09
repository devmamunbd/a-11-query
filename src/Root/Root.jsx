import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'

const Root = () => {
  return (
    <div>
        <div className='w-[1180px] mx-auto mt-8'>
        <Navbar/>
        <Outlet></Outlet>
        </div>
        <div className='mt-10'>

        <Footer></Footer>
        </div>
    </div>
  )
}

export default Root
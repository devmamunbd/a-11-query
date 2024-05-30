/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"

const AllUser = () => {

    const {user} = useContext(AuthContext)
    const [users, setUsers] = useState()
    useEffect(()=> {
        fetch('http://localhost:9000/users')
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        })
      })

  return (
    <div>
        <h1 className="text-2xl text-black font-semibold">All User: {users?.length}</h1>

        <div className="mt-10">
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
   
      {
        users?.map((user, index)=> <tr key={user._id}>
        <th>{index+1}</th>
        <td>
          <img className="h-12 w-12 rounded-lg" src={user?.photo} alt="" />
        </td>
        <td>{user?.name}</td>
        <td>{user?.email}</td>
      </tr>)
      }
     
    </tbody>
  </table>
</div>
        </div>
    </div>
  )
}

export default AllUser
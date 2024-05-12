import { useContext } from "react"
import { useEffect, useState } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"

const MyReco = () => {
  const {user} = useContext(AuthContext)
  const [datas, setDatas] = useState([])
  useEffect(()=> {
    fetch(`http://localhost:9000/myreco/${user?.email}`)
    .then(res => res.json())
    .then(data => {
     setDatas(data)
    })
  })



  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">My Recommendation: {datas?.length}</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-24" />
			</colgroup>
			<thead className="dark:bg-gray-300">
				<tr className="text-left">
					<th className="p-3">Image</th>
					<th className="p-3">Name</th>
					<th className="p-3">Email</th>
					<th className="p-3">Date</th>
					{/* <th className="p-3 text-right">Amount</th> */}
					<th className="p-3">Delete</th>
				</tr>
			</thead>
			<tbody>
        {
          datas.map(data => 
            <tr key={data._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<img className="w-12 h-12 rounded-xl" src={data?.photo} alt="" />
					</td>
					<td className="p-3">
						<p>{data?.RecommenderName}</p>
					</td>
					<td className="p-3">
          <p>{data?.RecommenderEmail}</p>
					</td>
					<td className="p-3">
          <p>{data?.currentDate}</p>
					</td>
					<td className="p-3 ">
					<button className="bg-white px-4 py-2 border-1 border-">Delete</button>
					</td>
					
				</tr>
          )
        }
				
				
			</tbody>
		</table>
	</div>
</div>
    </div>
  )
}

export default MyReco
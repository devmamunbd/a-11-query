import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"

const RecoForMe = () => {

  const {user} = useContext(AuthContext)
  const [datas, setDatas] = useState([])

  useEffect(()=> {
    fetch(`https://assignment-eleven.vercel.app/recoforme/${user?.email}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setDatas(data)
    })
  })

  return (
    <div>
       <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Recommendation For Me: {datas?.length}</h2>
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
					<th className="p-3">Product Name</th>
					<th className="p-3">Product Title</th>
					<th className="p-3">Recommendad Reason</th>
					<th className="p-3">Date</th>
				</tr>
			</thead>
			<tbody>
        {
          datas.map(data => 
            <tr key={data._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<img className="w-12 h-12 rounded-xl" src={data?.recoimage} alt="" />
					</td>
					<td className="p-3">
						<p>{data?.recopname}</p>
					</td>
					<td className="p-3">
          <p>{data?.recotitle}</p>
					</td>
					<td className="p-3">
          <p>{data?.reason}</p>
					</td>
					<td className="p-3 ">
          <p>{data?.currentDate}</p>
					</td>
					
				</tr>
          )
        }
				
				
			</tbody>
		</table>
	</div>
</div>
    </div>
    </div>
  )
}

export default RecoForMe
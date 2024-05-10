/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom"

const ViewDetails = () => {

    const loadData = useLoaderData()
    const {_id, pname, brand, query, image, count, boycott} = loadData;
    console.log(loadData)

  return (
    <div>
        <section className="dark:bg-gray-100 bg-white shadow-md mt-10 dark:text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src={image} alt="" className="object-contain w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl">{pname}</h3>
				<span className="text-xl dark:text-gray-600">Brand: {brand}</span>
				<p className="text-xl dark:text-gray-600">{query}</p>
				<p className="text-xl dark:text-gray-600">Count: {count}</p>
			</div>
		</a>
		
	</div>
</section>
    </div>
  )
}

export default ViewDetails
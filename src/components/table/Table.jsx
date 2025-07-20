export default function Table({ col1 = "ID", col2 = "NAME", col3 = "JOB", col4 = "STATUS" }) {
	return (
		<>
			<section className="my-8 mx-5 sm:mx-0 lg:mx-10">
				<div className="relative overflow-x-auto rounded-lg shadow-md">
					<table className="w-full text-sm text-left text-gray-500">
						<thead className="text-xs text-gray-700 uppercase bg-gray-100">
							<tr>
								<th className="px-6 py-3">{col1}</th>
								<th className="px-6 py-3">{col2}</th>
								<th className="px-6 py-3">{col3}</th>
								<th className="px-6 py-3">{col4}</th>
							</tr>
						</thead>
						<tbody>
							<tr className="bg-white border-b hover:bg-gray-200 sm:text-sm">
								<td className="px-6 py-4">1</td>
								<td className="px-6 py-4 font-medium text-gray-900">Marcois</td>
								<td className="px-6 py-4">JoJo Helper</td>
								<td className="px-6 py-4">
									<span className="px-2 py-1 text-xs font-semibold text-red-800 bg-red-100 rounded-full">
										Deactive
									</span>
								</td>
							</tr>

							<tr className="bg-white border-b hover:bg-gray-200">
								<td className="px-6 ">2</td>
								<td className="px-6 py-4 font-medium text-gray-900">Padil</td>
								<td className="px-6 py-4">Chef</td>
								<td className="px-6 py-4">
									<span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
										Active
									</span>
								</td>
							</tr>

							<tr className="bg-white border-b hover:bg-gray-200">
								<td className="px-6 py-4 ">3</td>
								<td className="px-6 py-4 font-medium text-gray-900">Jonathan Joestar</td>
								<td className="px-6 py-4">Backend Developer</td>
								<td className="px-6 py-4">
									<span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
										Active
									</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</>
	);
}

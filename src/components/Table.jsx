import ButtonGroup from "./ButtonGroup";

export default function Table({ col1 = "ID", col2 = "NAME", col3 = "JOB" }) {

	return (
		<>
			<div className="relative overflow-x-auto rounded-lg shadow-md w-1/2">
				<table className="w-full text-sm text-left text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-200">
						<tr>
							<th className="px-6 py-3">{col1}</th>
							<th className="px-6 py-3">{col2}</th>
							<th className="px-6 py-3">{col3}</th>
							<th className="px-6 py-3 text-center">ACTION</th>
						</tr>
					</thead>
					<tbody>
						<Row name={"example"} job={"chef"} />
						<Row name={"example"} job={"chef"} />
						<Row name={"example"} job={"chef"} />
					</tbody>
				</table>
			</div>
		</>
	);
}

function Row({name, job}) {
	return (
		<tr className="bg-white border-b hover:bg-slate-100 sm:text-sm">
			<td className="px-6 py-4">1</td>
			<td className="px-6 py-4 font-medium text-gray-900">{name}</td>
			<td className="px-6 py-4">{job}</td>
			<td className="px-6 py-4 text-center">
				<ButtonGroup />
			</td>
		</tr>
	);
}

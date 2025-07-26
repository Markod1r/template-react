import { useSearchParams, useNavigate } from "react-router";
import { useState } from "react";

export default function ProjectSearch() {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	const [search, setSearch] = useState(searchParams.get("search") || "");

	const handleClick = () => {
		if (search) {
			navigate({
				pathname: "/projects/search",
				search: `?search=${search}`,
			});
		}
	};

	return (
		<div>
			<h1>Pencarian</h1>
			<input
				className="outline-2 outline-blue-600"
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button className="active:bg-amber-300 hover:bg-amber-200" onClick={handleClick}>Search</button>
			<p>project : {searchParams.get("search")}</p>
		</div>
	);
}

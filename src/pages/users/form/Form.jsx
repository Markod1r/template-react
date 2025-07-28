import { Link } from "react-router";

export default function Form() {
	return (
		<div className="flex gap-5">
			<Link
				className="hover:opacity-60 active:scale-90 lg:text-2xl text-base my-auto text-black cursor-pointer "
				to={"login"}
			>
				Login
			</Link>
			<Link
				className="hover:opacity-60 active:scale-90 lg:text-2xl text-base my-auto text-black cursor-pointer "
				to={"register"}
			>
				Register
			</Link>
		</div>
	);
}

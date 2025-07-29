import { Link } from "react-router";
import { TfiFaceSad } from "react-icons/tfi";

export default function NotFoundPage() {
	return (
		<div className="flex flex-col h-screen w-screen">
			<TfiFaceSad size={160} className="mx-auto mt-50 mb-10 text-black" />
			<Link to={"/"} className="text-4xl text-center text-black">
				Page Not Found
			</Link>
		</div>
	);
}

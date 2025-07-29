import { Link, NavLink } from "react-router";

export default function Navbar() {
	return (
		<>
			<header className="bg-white  lg:h-17 sm:h-12 h-13 flex justify-between">
				<Link
					className="hover:opacity-70 active:scale-90 lg:text-2xl text-base my-auto mx-10 text-black cursor-pointer "
					to={"/"}
				>
					Navbar
				</Link>
				<NavLink
					className="hover:opacity-70 active:scale-90 lg:text-xl text-base my-auto mx-10 text-black cursor-pointer "
					to="/login"
				>
					Login
				</NavLink>
			</header>
		</>
	);
}

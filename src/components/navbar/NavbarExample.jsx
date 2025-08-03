import { Link, NavLink } from "react-router";
import { useContext } from "react";
import { AppContext } from "../../Context/Context";


export default function NavbarExample() {
	const { logo } = useContext(AppContext);

	return (
		<>
			<header className="w-full sm:h-12 lg:h-17 h-13 bg-white sticky top-0 flex justify-between opacity-80" >
				<div className="flex my-auto gap-3">
					<img
						src={logo}
						alt="logo"
						className="lg:h-12 h-8 cursor-pointer active:rotate-180 duration-300 "
					/>
					<Link
						className="hover:opacity-70 active:scale-90 lg:text-2xl text-base my-auto text-black cursor-pointer "
						to={"/"}
					>
						Navbar
					</Link>
				</div>
				<ul className="lg:flex hidden lg:flex-row flex-col gap-5 my-auto text-black">
					<li className="hover:opacity-70 active:scale-80 lg:text-lg text-xs">
						<NavLink to="/dashboard">Dashboard</NavLink>
					</li>
					<li className="hover:opacity-70 active:scale-80 lg:text-lg text-xs">
						<NavLink to="/about">About</NavLink>
					</li>
					<li className="hover:opacity-70 active:scale-80 lg:text-lg text-xs">
						<NavLink to="/Profile">Profile</NavLink>
					</li>
					<li className="hover:opacity-70 active:scale-80 lg:text-lg text-xs">
						<NavLink to="/projects">Projects</NavLink>
					</li>
				</ul>
				<ul className="lg:flex hidden flex-row gap-5 my-auto mx-10 text-black">
					<li className="hover:opacity-70 active:scale-80 lg:text-xl text-xs">
						<NavLink to="/login">Login</NavLink>
					</li>
				</ul>
			</header>
		</>
	);
}

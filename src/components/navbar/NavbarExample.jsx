import { Link } from "react-router";
import { useContext } from "react";
import { AppContext } from "../../Context/Context";

export default function NavbarExample() {
	const { logo } = useContext(AppContext);
	return (
		<>
			<header className="w-full sm:h-12 lg:h-17 h-13 flex justify-between bg-blue-700">
				<div className="flex my-auto gap-3">
					<img src={logo} alt="logo" className="lg:h-12 h-8 cursor-pointer" />
					<Link className="lg:text-2xl text-base my-auto text-white cursor-pointer " to={"/"}>
						Navbar
					</Link>
				</div>

				<ul className="lg:flex hidden lg:flex-row flex-col gap-5 my-auto text-white">
					<li className="hover:opacity-70 active:scale-80 lg:text-lg text-xs">
						<Link to="/dashboard">Dashboard</Link>
					</li>
					<li className="hover:opacity-70 active:scale-80 lg:text-lg text-xs">
						<Link to="/about">About</Link>
					</li>
					<li className="hover:opacity-70 active:scale-80 lg:text-lg text-xs">
						<Link to="/Profile">Profile</Link>
					</li>
					<li className="hover:opacity-70 active:scale-80 lg:text-lg text-xs">
						<Link to="/projects">Projects</Link>
					</li>
					<li className="hover:opacity-70 active:scale-80 lg:text-lg text-xs">
						<Link to="/login">Sign In</Link> &nbsp;
					</li>
				</ul>
			</header>
		</>
	);
}

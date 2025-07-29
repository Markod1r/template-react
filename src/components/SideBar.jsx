import { NavLink } from "react-router";
import { MdDashboard } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { FcAbout } from "react-icons/fc";
import { FaReact } from "react-icons/fa";

export default function SideBar() {
	return (
		<>
			<div className="bg-linear-65 from-slate-800 to-slate-900 lg:w-150 md:w-70 w-50 h-screen sticky top-0  p-3 ">
				<div className="flex items-center gap-5">
					<FaReact size={50} className="text-white lg:text-3xl text-sm" />
					<h1 className="lg:text-3xl text-xl text-white">SideBar</h1>
				</div>
				<div className="bg-amber-50 h-0.5 rounded my-7"></div>
				<ul className="flex flex-col gap-5 text-white">
					<li className="hover:opacity-70 active:scale-80 lg:text-lg text-xs flex items-center gap-3">
						<MdDashboard />
						<NavLink to="/dashboard">Dashboard</NavLink>
					</li>
					<li className="hover:opacity-70 active:scale-80 lg:text-lg text-xs flex items-center gap-3">
						<FcAbout className="text-white" />
						<NavLink to="/about">About</NavLink>
					</li>
					<li className="hover:opacity-70 active:scale-80 lg:text-lg text-xs flex items-center gap-3">
						<RiProfileLine />
						<NavLink to="/Profile">Profile</NavLink>
					</li>
					<li className="hover:opacity-70 active:scale-80 lg:text-lg text-xs flex items-center gap-3">
						<GoProjectSymlink />
						<NavLink to="/projects">Projects</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
}

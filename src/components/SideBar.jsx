import { NavLink } from "react-router";
import { MdDashboard } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { TbTableShare } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

export default function SideBar() {
	return (
		<>
			<div className="bg-linear-65 from-slate-900 to-slate-950 lg:w-90 md:w-70 w-10 h-screen sticky top-0  p-3 ">
				<div className="flex items-center gap-5 mt-5">
					<FaReact size={45} className="text-white lg:text-3xl text-sm" />
					<h1 className="lg:text-3xl text-xl text-white">SideBar</h1>
				</div>
				<div className="bg-amber-50 h-0.5 rounded my-7" />
				<ul className="flex flex-col ml-5 gap-5 text-white">
					<li className="hover:opacity-70 active:scale-93 lg:text-lg text-xs flex items-center gap-5">
						<MdDashboard className="text-sky-500" />
						<NavLink to="/dashboard">Dashboard</NavLink>
					</li>
					<li className="hover:opacity-70 active:scale-93 lg:text-lg text-xs flex items-center gap-5">
						<TbTableShare className="text-yellow-500" />
						<NavLink to="/tables">Tables</NavLink>
					</li>
					<li className="hover:opacity-70 active:scale-93 lg:text-lg text-xs flex items-center gap-5">
						<RiProfileLine className="text-fuchsia-400" />
						<NavLink to="/Profile">Profile</NavLink>
					</li>
					<li className="hover:opacity-70 active:scale-93 lg:text-lg text-xs flex items-center gap-5">
						<GoProjectSymlink className="text-emerald-400" />
						<NavLink to="/projects">Projects</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
}

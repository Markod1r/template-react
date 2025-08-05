import { NavLink } from "react-router";
import { MdDashboard } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { TbTableShare } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from "react";

export default function SideBar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div
				className={`bg-linear-50 from-gray-900 to-gray-950 via-slate-800 lg:w-90 md:w-70 w-10 h-screen p-3 ${
					isOpen ? "lg:sticky top-0" : "lg:hidden"
				} lg:block hidden`}
			>
				<div className="flex items-center gap-5 mt-5">
					<FaReact size={40} className="text-white lg:text-3xl text-sm" />
					<h1 className="lg:text-2xl text-xl text-white">SideBar</h1>
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
			<IoReorderThreeOutline
				size={50}
				className={`text-center lg:my-2 md:my-0 active:scale-85 lg:block hidden ${
					isOpen ? "rotate-90" : "rotate-0"
				} transform transition-all cursor-pointer`}
				onClick={handleClick}
			/>
		</>
	);
}

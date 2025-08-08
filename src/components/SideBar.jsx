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
        className={`h-screen w-10 bg-linear-50 from-gray-900 via-slate-800 to-gray-950 p-3 md:w-70 lg:w-90 ${
          isOpen ? "top-0 lg:sticky" : "lg:hidden"
        } hidden lg:block`}
      >
        <div className="mt-5 flex items-center gap-5">
          <FaReact size={40} className="text-sm text-white lg:text-3xl" />
          <h1 className="text-xl text-white lg:text-2xl">SideBar</h1>
        </div>
        <div className="my-7 h-0.5 rounded bg-amber-50" />
        <ul className="ml-5 flex flex-col gap-5 text-white">
          <li className="flex items-center gap-5 text-xs hover:opacity-70 active:scale-93 lg:text-lg">
            <MdDashboard className="text-sky-500" />
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li className="flex items-center gap-5 text-xs hover:opacity-70 active:scale-93 lg:text-lg">
            <TbTableShare className="text-yellow-500" />
            <NavLink to="/tables">Tables</NavLink>
          </li>
          <li className="flex items-center gap-5 text-xs hover:opacity-70 active:scale-93 lg:text-lg">
            <RiProfileLine className="text-fuchsia-400" />
            <NavLink to="/Profile">Profile</NavLink>
          </li>
          <li className="flex items-center gap-5 text-xs hover:opacity-70 active:scale-93 lg:text-lg">
            <GoProjectSymlink className="text-emerald-400" />
            <NavLink to="/projects">Projects</NavLink>
          </li>
        </ul>
      </div>
      <IoReorderThreeOutline
        size={50}
        className={`hidden text-center active:scale-85 md:my-0 lg:my-2 lg:block ${
          isOpen ? "rotate-90" : "rotate-0"
        } transform cursor-pointer transition-all`}
        onClick={handleClick}
      />
    </>
  );
}

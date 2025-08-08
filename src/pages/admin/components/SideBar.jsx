import { NavLink } from "react-router";
import { MdDashboard } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { TbTableShare } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
export default function SideBar({ isOpen, col }) {
  return (
    <>
      <aside
        className={`h-screen w-10 bg-slate-100 p-3 md:w-70 lg:w-60 ${
          isOpen ? `${col}` : "lg:hidden"
        }`}
      >
        <div className="mt-3 mb-9 flex items-center gap-5">
          <CgProfile size={40} className="text-blue-950" />
          <h1 className="text-xl font-bold text-blue-900 lg:text-xl">Admin</h1>
        </div>

        <h1 className="my-5 text-xl font-semibold text-blue-900 lg:text-xl">
          Pages
        </h1>
        <ul className="ml-5 flex flex-col gap-5 text-blue-900">
          <Li>
            <MdDashboard className="text-sky-500" />
            <NavLink to="/admin">Dashboard</NavLink>
          </Li>
          <Li>
            <TbTableShare className="text-yellow-500" />
            <NavLink to="/admin/tables">Tables</NavLink>
          </Li>
          <Li>
            <RiProfileLine className="text-fuchsia-400" />
            <NavLink to="/Profile">Profile</NavLink>
          </Li>
          <Li>
            <GoProjectSymlink className="text-emerald-400" />
            <NavLink to="/projects">Projects</NavLink>
          </Li>
        </ul>
      </aside>
    </>
  );
}

function Li({ children }) {
  return (
    <li className="flex items-center gap-6 text-xs text-shadow-sm hover:opacity-70 active:scale-93 lg:text-lg">
      {children}
    </li>
  );
}

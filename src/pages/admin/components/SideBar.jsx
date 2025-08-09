import { NavLink, useNavigate } from "react-router";
import { MdDashboard } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { TbTableShare } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

export default function SideBar({ isOpen, col }) {
  const navigate = useNavigate();
  return (
    <>
      <aside
        className={`h-screen w-14 bg-slate-100 p-3 md:w-70 lg:w-60 ${
          isOpen ? `${col}` : "hidden"
        }`}
      >
        <div className="mt-3 mb-9 flex items-center gap-5">
          <CgProfile size={40} className="text-blue-950" />
          <h1 className="hidden text-xl font-bold text-blue-900 lg:flex lg:text-xl">
            Admin
          </h1>
        </div>

        <h1 className="my-5 hidden text-xl font-semibold text-blue-900 lg:static lg:text-xl">
          Pages
        </h1>
        <ul className="flex flex-col gap-5 text-blue-900">
          <Li>
            <MdDashboard
              size={31}
              onClick={() => navigate({ pathname: "/admin" })}
              className="text-sky-800"
            />
            <NavLink className={`hidden lg:flex`} to="/admin">
              Dashboard
            </NavLink>
          </Li>
          <Li>
            <TbTableShare
              size={31}
              onClick={() => navigate({ pathname: "/admin/tables" })}
              className="text-yellow-800"
            />
            <NavLink className={`hidden lg:flex`} to="/admin/tables">
              Tables
            </NavLink>
          </Li>
          <Li>
            <RiProfileLine
              size={31}
              onClick={() => navigate({ pathname: "/admin/profile" })}
              className="text-fuchsia-800"
            />
            <NavLink className={`hidden lg:flex`} to="/admin/profile">
              Profile
            </NavLink>
          </Li>
          <Li>
            <GoProjectSymlink
              size={31}
              onClick={() => navigate({ pathname: "/admin/projects" })}
              className="text-emerald-700"
            />
            <NavLink className={`hidden lg:flex`} to="admin//projects">
              Projects
            </NavLink>
          </Li>
        </ul>
      </aside>
    </>
  );
}

function Li({ children }) {
  return (
    <li className="flex items-center gap-6 text-xs text-shadow-sm hover:opacity-70 lg:text-lg">
      {children}
    </li>
  );
}

import { Link, NavLink, useNavigate } from "react-router";
import SecondaryButton from "./SecondaryButton";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <header
        className={`sticky top-0 z-50 flex w-full justify-between p-3 text-slate-100 transition-colors duration-300 sm:p-4 lg:p-5`}
      >
        <Link
          className="mx-5 my-auto cursor-pointer text-base font-semibold text-shadow-lg hover:opacity-70 active:scale-90 lg:text-2xl"
          to={"/"}
        >
          Navbar
        </Link>
        <ul className="flex items-center gap-10 text-lg">
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>Profile</NavLink>
          </li>
          <li>
            <NavLink>About</NavLink>
          </li>
        </ul>
        <SecondaryButton
          color="white"
          text={"Login"}
          onClick={() => navigate({ pathname: "/login" })}
        />
      </header>
    </>
  );
}

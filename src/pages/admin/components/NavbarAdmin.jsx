import { Link, NavLink, useNavigate } from "react-router";
import SecondaryButton from "../../../components/SecondaryButton";
import { IoReorderThreeOutline } from "react-icons/io5";

export default function NavbarAdmin({ setIsOpen, isOpen, col }) {
  const navigate = useNavigate();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header
        className={`${col} sticky top-0 z-50 flex h-20 w-full items-center justify-between bg-blue-800 p-3 text-slate-100 shadow-lg transition-colors duration-300 sm:p-4 lg:p-5`}
      >
        <div className="flex items-center">
          <IoReorderThreeOutline
            size={50}
            onClick={handleClick}
            className={`transform cursor-pointer transition-all active:scale-85 md:my-0 lg:my-2 lg:block`}
          />
          <Link
            className="mx-4 my-auto cursor-pointer text-base font-semibold text-shadow-lg hover:opacity-70 active:scale-90 lg:text-2xl"
            to={"/admin"}
          >
            Navbar
          </Link>
        </div>
        <SecondaryButton
          color="white"
          text={"Log Out"}
          onClick={() => navigate({ pathname: "/" })}
        />
      </header>
    </>
  );
}

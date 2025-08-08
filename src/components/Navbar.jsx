import { Link, useNavigate } from "react-router";
import SecondaryButton from "./SecondaryButton";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <header
        className={`sticky top-0 z-50 flex w-full justify-between p-3 text-slate-100 transition-colors duration-300 sm:p-4 lg:p-5`}
      >
        <Link
          className="mx-5 my-auto cursor-pointer text-base font-semibold hover:opacity-70 active:scale-90 lg:text-2xl"
          to={"/"}
        >
          Navbar
        </Link>
        <SecondaryButton
          color="white"
          text={"Login"}
          onClick={() => navigate({ pathname: "/login" })}
        />
      </header>
    </>
  );
}

import PrimaryButton from "../../components/PrimaryButton";
import { Link, useNavigate } from "react-router";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppContext } from "../../contexts/context";

export default function Login() {
  const { image } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1050,
    });
  }, []);

  return (
    <div className="flex">
      <section className="my-auto flex-1 p-10 lg:p-15" data-aos="fade-right">
        <button
          className="cursor-pointer"
          onClick={() => navigate({ pathname: "/" })}
        >
          <IoArrowBackCircleSharp size={"45"} className="active:scale-90 hover:scale-108" />
        </button>
        <h1 className="mb-7 text-center text-2xl lg:text-3xl">Sign In</h1>
        <form action="" className="mx-auto flex w-auto flex-col lg:w-120">
          <Input
            label={"Username"}
            id={"username"}
            type={"text"}
            placeholder={"username"}
          />
          <Input
            label={"Password"}
            id={"password"}
            type={"text"}
            placeholder={"password"}
          />

          <br />
          <PrimaryButton text={"Login"} color="blue" />
          <p className="mt-10 text-center text-lg">
            don't have an account?{" "}
            <Link to={"/register"} className="font-bold">
              Sign Up
            </Link>
          </p>
        </form>
      </section>
      <section className="flex-1">
        <img src={image} alt="gambar" className="h-screen" />
      </section>
    </div>
  );
}

function Input({ label, id, type, placeholder }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="my-3 transform rounded-full px-5 py-2 text-xl outline-2 transition-all focus:outline-3"
      />
    </>
  );
}

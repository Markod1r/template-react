import PrimaryButton from "../../components/PrimaryButton";
import { useContext} from "react";
import { AppContext } from "../../contexts/context";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router";

export default function Register() {
  const { image } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="flex">
      <section
        className="my-auto grid flex-1 grid-cols-2 overflow-x-hidden p-8 lg:p-20"
      >
        <button className="w-0 cursor-pointer" onClick={() => navigate(-1)}>
          <IoArrowBackCircleSharp
            size={"45"}
            className="hover:scale-108 active:scale-90"
          />
        </button>
        <h1 className="col-span-2 mt-7 mb-11 text-center text-2xl lg:text-3xl">
          Sign Up
        </h1>

        <form action="" className="col-span-2 grid text-lg">
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col">
              <Input
                className="bg-amber-500"
                label={"First Name"}
                placeholder={"first name"}
                type={"text"}
                id={"fname"}
              />
            </div>
            <div className="flex flex-col">
              <Input
                label={"Last Name"}
                placeholder={"last name"}
                type={"text"}
                id={"lname"}
              />
            </div>
          </div>
          <Input
            label={"Email"}
            placeholder={"email"}
            type={"text"}
            id={"email"}
          />
          <Input
            label={"Password"}
            placeholder={"password"}
            type={"password"}
            id={"password"}
          />
          <div className="my-1 flex flex-nowrap justify-center">
            <input type="checkbox" />
            <span> I agree to terms & conditions</span>
          </div>
          <PrimaryButton text={"Register"} color="blue" />
        </form>
      </section>
      <section className="flex-0 lg:flex-1">
        <img
          src={image}
          alt="gambar"
          className="mx-auto h-screen object-cover"
        />
      </section>
    </div>
  );
}

const Input = ({ label, type, id, placeholder }) => {
  return (
    <>
      <label htmlFor={id} className="mt-1 mb-1">
        {label}
      </label>
      <input
        className="mb-3 transform rounded-xl p-2 outline-2 transition-all focus:outline-3"
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </>
  );
};

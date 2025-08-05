import PrimaryButton from "../../../components/PrimaryButton";
import { useContext } from "react";
import { AppContext } from "../../../contexts/context";
import { Link } from "react-router";
import { IoArrowBackCircleSharp } from "react-icons/io5";

export default function Register() {
	const { image } = useContext(AppContext);
	return (
		<div className="flex">
			<section className="lg:flex-1 flex-0 ">
				<img src={image} alt="gambar" className="h-screen object-cover mx-auto" />
			</section>
			<section className="flex-1 lg:p-20 p-8 my-auto overflow-x-hidden">
				<Link to={"/"}>
					<IoArrowBackCircleSharp size={"45"} className="active:scale-90" />
				</Link>
				<h1 className="lg:text-3xl text-center text-2xl mb-11 mt-7">Sign Up</h1>

				<form action="" className="flex flex-col text-lg">
					<div className="flex gap-5">
						<div className="flex flex-col flex-1">
							<Input label={"First Name"} placeholder={"first name"} type={"text"} id={"fname"} />
						</div>
						<div className="flex flex-col flex-1">
							<Input label={"Last Name"} placeholder={"last name"} type={"text"} id={"lname"} />
						</div>
					</div>
					<Input label={"Email"} placeholder={"email"} type={"text"} id={"email"} />
					<Input label={"Password"} placeholder={"password"} type={"password"} id={"password"} />
					<div className="flex flex-nowrap justify-center my-1">
						<input type="checkbox" />
						<span> I agree to terms & conditions</span>
					</div>
					<PrimaryButton text={"Register"} color="blue" />
				</form>
			</section>
		</div>
	);
}

const Input = ({ label, type, id, placeholder }) => {
	return (
		<>
			<label htmlFor={id} className="mb-1 mt-1">
				{label}
			</label>
			<input
				className="p-2 outline-2 rounded-xl focus:outline-3 transform transition-all mb-3"
				type={type}
				id={id}
				placeholder={placeholder}
			/>
		</>
	);
};

import PrimaryButton from "../../components/PrimaryButton";
import { Link } from "react-router";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppContext } from "../../contexts/context";

export default function Login() {
	const { image } = useContext(AppContext);
	useEffect(() => {
		AOS.init({
			duration: 1050,
		});
	}, []);

	return (
		<div className="flex ">
			<section className="flex-1 lg:p-15 p-10 my-auto " data-aos="fade-right">
				<Link to={"/"}>
					<IoArrowBackCircleSharp size={"45"} className="active:scale-90" />
				</Link>
				<h1 className="lg:text-3xl text-2xl text-center mb-7">Sign In</h1>
				<form action="" className="flex flex-col lg:w-120 w-auto mx-auto">
					<Input label={"Username"} id={"username"} type={"text"} placeholder={"username"} />
					<Input label={"Password"} id={"password"} type={"text"} placeholder={"password"} />

					<br />
					<PrimaryButton text={"Login"} color="blue" />
					<p className="text-lg text-center mt-10">
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
				className="text-xl outline-2 focus:outline-3 rounded transform transition-all  my-3 py-1 px-2"
			/>
		</>
	);
}

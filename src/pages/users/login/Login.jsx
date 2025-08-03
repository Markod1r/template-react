<<<<<<< HEAD
import PrimaryButton from "../../../components/button/PrimaryButton";

export default function Login() {
	return (
		<>
			<section className="m-auto lg:h-120 h-100 lg:w-120 w-85 rounded-2xl lg:p-15 p-10 my-20 shadow-2xl/30 bg-blue-100">
				<h1 className="lg:text-3xl  text-2xl mb-11 mt-7">Sign In</h1>
				<form action="" className="flex flex-col">
=======
import PrimaryButton from "../../../components/PrimaryButton";
import { Link } from "react-router";
import { useContext } from "react";
import { AppContext } from "../../../contexts/context";

import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Login() {
	const { image } = useContext(AppContext);
	useEffect(() => {
		AOS.init({
			duration: 1050,
		});
	}, []);

	return (
		<>
			<section className="flex-1 lg:p-15 p-10 my-auto " data-aos="fade-right">
				<Link to={"/"}>
					<IoArrowBackCircleSharp size={"45"} className="active:scale-90" />
				</Link>
				<h1 className="lg:text-3xl text-2xl text-center mb-7">Sign In</h1>
				<form action="" className="flex flex-col lg:w-120 w-auto mx-auto">
					<label htmlFor="username">Username</label>
>>>>>>> selamatin-edit
					<input
						type="text"
						placeholder="username"
						className="text-xl focus:outline-0 focus:border-zinc-900 border-b-3 border-zinc-400 my-3"
					/>
					<input
						type="password"
						placeholder="password"
						className="text-xl focus:outline-0 focus:border-zinc-900 border-b-3 border-zinc-400 my-3"
					/>
					<br />
					<PrimaryButton text={"Login"} color="blue" />
				</form>
			</section>
		</>
	);
}

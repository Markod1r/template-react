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
					<input
						id="username"
						type="text"
						placeholder="username"
						className="text-md outline-2 focus:outline-3 rounded-md px-3 py-2 outline-zinc-400 focus:outline-zinc-900 my-3 transform duration-100 ease-linear"
					/>
					<br />
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						placeholder="********"
						className="text-md outline-2 focus:outline-3 rounded-md px-3 py-2 outline-zinc-400 focus:outline-zinc-900 my-3 transform duration-100 ease-linear"
					/>
					<br />
					<PrimaryButton text={"Login"} color="blue" />

					<h1 className="text-lg m-auto mt-10 ">
						Not registered?{" "}
						<Link className="font-bold" to={"register"}>
							Create account
						</Link>
					</h1>
				</form>
			</section>
			<section className="lg:flex-1 flex-0">
				<img src={image} alt="gambar" className=" h-full object-cover mx-auto" />
			</section>
		</>
	);
}

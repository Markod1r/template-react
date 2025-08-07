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
					<label htmlFor="username">Username</label>
					<input
						type="text"
						placeholder="username"
						className="text-xl focus:outline-0 focus:border-zinc-900 border-b-3 border-zinc-400 my-3"
					/>
					<label htmlFor="password">password</label>
					<input
						type="password"
						placeholder="password"
						className="text-xl focus:outline-0 focus:border-zinc-900 border-b-3 border-zinc-400 my-3"
					/>
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

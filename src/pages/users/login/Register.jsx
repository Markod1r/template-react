import PrimaryButton from "../../../components/button/PrimaryButton";
import { useContext } from "react";
import { AppContext } from "../../../Context/Context";
import { Link } from "react-router";
import { IoArrowBackCircleSharp } from "react-icons/io5";

export default function Register() {
	const { image } = useContext(AppContext);
	return (
		<>
			<section className="lg:flex-1 flex-0">
				<img src={image} alt="gambar" className=" h-full object-cover mx-auto" />
			</section>
			<section className="flex-1 lg:p-10 p-8 my-auto overflow-x-hidden" data-aos="fade-left">
				<Link to={"/"}>
					<IoArrowBackCircleSharp size={"45"} />
				</Link>
				<h1 className="lg:text-3xl text-center text-2xl mb-11 mt-7">Sign Up</h1>

				<form action={""} className="flex flex-col">
					<div className="flex lg:flex-row flex-col lg:gap-10 gap-0">
						<div className="flex-1">
							<label htmlFor="fname">First Name</label>
							<br />
							<input
								id="fname"
								type="text"
								placeholder="first name"
								className="w-full text-md outline-2 focus:outline-3 rounded-md px-3 py-2 outline-zinc-400 focus:outline-zinc-900 my-3 transform duration-100 ease-linear"
							/>
						</div>
						<div className="flex-1">
							<label htmlFor="lname">Last Name</label>
							<br />
							<input
								id="lname"
								type="text"
								placeholder="last name"
								className="w-full text-md outline-2 focus:outline-3 rounded-md px-3 py-2 outline-zinc-400 focus:outline-zinc-900 my-3 transform duration-100 ease-linear"
							/>
						</div>
					</div>
					<div className="flex flex-col">
						<label htmlFor="email">Email</label>
						<input
							id="email"
							type="text"
							placeholder="Email"
							className="text-md outline-2 focus:outline-3 rounded-md px-3 py-2 outline-zinc-400 focus:outline-zinc-900 my-3 transform duration-100 ease-linear"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="password">Password</label>
						<input
							id="password"
							type="password"
							placeholder="Password"
							className="text-md outline-2 focus:outline-3 rounded-md px-3 py-2 outline-zinc-400 focus:outline-zinc-900 my-3 transform duration-100 ease-linear"
						/>
					</div>
					<br />
					<PrimaryButton text={"Register"} color="blue" />
				</form>
			</section>
		</>
	);
}

import PrimaryButton from "../../../components/PrimaryButton";
import { useContext } from "react";
import { AppContext } from "../../../contexts/context";
import { Link } from "react-router";
import { IoArrowBackCircleSharp } from "react-icons/io5";

export default function Register() {
	const { image } = useContext(AppContext);
	return (
		<div className="flex">
			<section className="lg:flex-1 flex-0 overflow-x-hidden">
				<img src={image} alt="gambar" className="h-screen object-cover mx-auto" />
			</section>
			<section className="flex-1 lg:p-10 p-8 my-auto " data-aos="fade-left">
				<Link to={"/"}>
					<IoArrowBackCircleSharp size={"45"} className="active:scale-90" />
				</Link>
				<h1 className="lg:text-3xl text-center text-2xl mb-11 mt-7">Sign Up</h1>

				<form action={""} className="flex flex-col">
					<div className="flex lg:flex-row flex-col lg:gap-10 gap-0">
						<div className="flex-1">
							<label htmlFor="fname">First Name</label>
							<br />
							<input
								type="text"
								placeholder="first name"
								className="lg:text-xl text-lg lg:outline-3 outline-2 focus:outline-4 lg:p-3 py-1 px-3 lg:rounded-3xl rounded-xl w-70"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor=""> &nbsp; &nbsp; Last Name</label>
							<input
								type="text"
								placeholder="last name"
								className="lg:text-xl text-lg lg:outline-3 outline-2 focus:outline-4 lg:p-3 py-1 px-3 lg:rounded-3xl rounded-xl w-70"
							/>
						</div>
					</div>
					<div className="flex mx-auto lg:my-5 my-4">
						<div className="flex flex-col gap-2">
							<label htmlFor=""> &nbsp; &nbsp; Email</label>
							<input
								type="text"
								placeholder="Email"
								className="lg:text-xl text-lg lg:outline-3 outline-2 focus:outline-4 lg:p-3 py-1 px-3 lg:rounded-3xl rounded-xl lg:w-150 w-70"
							/>
						</div>
					</div>
					<div className="flex mx-auto">
						<div className="flex flex-col gap-2">
							<label htmlFor=""> &nbsp; &nbsp; Password</label>
							<input
								type="password"
								placeholder="Password"
								className="lg:text-xl text-lg lg:outline-3 outline-2 focus:outline-4 lg:p-3 py-1 px-3 lg:rounded-3xl rounded-xl lg:w-150 w-70"
							/>
						</div>
					</div>
					<br />
					<PrimaryButton text={"Register"} color="blue" />
				</form>
			</section>
		</div>
	);
}

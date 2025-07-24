import Button from "../../components/button/Button";

export default function Register() {
	return (
		<>
			<section className="m-auto lg:h-155 h-160 lg:w-185 w-85 rounded-2xl lg:p-10 p-8 my-18 shadow-2xl/30 bg-blue-100">
				<h1 className="lg:text-3xl  text-2xl mb-11 mt-7">Sign Up</h1>
				<form action="" className="flex flex-col">
					<div className="flex lg:flex-row flex-col lg:gap-10 gap-4 m-auto">
						<div className="flex flex-col gap-2">
							<label for=""> &nbsp; &nbsp; First Name</label>
							<input
								type="text"
								placeholder="first name"
								className="lg:text-xl text-lg lg:outline-3 outline-2 focus:outline-4 lg:p-3 py-1 px-3 lg:rounded-3xl rounded-xl w-70"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label for=""> &nbsp; &nbsp; Last Name</label>
							<input
								type="text"
								placeholder="last name"
								className="lg:text-xl text-lg lg:outline-3 outline-2 focus:outline-4 lg:p-3 py-1 px-3 lg:rounded-3xl rounded-xl w-70"
							/>
						</div>
					</div>
					<div className="flex mx-auto lg:my-5 my-4">
						<div className="flex flex-col gap-2">
							<label for=""> &nbsp; &nbsp; Email</label>
							<input
								type="text"
								placeholder="Email"
								className="lg:text-xl text-lg lg:outline-3 outline-2 focus:outline-4 lg:p-3 py-1 px-3 lg:rounded-3xl rounded-xl lg:w-150 w-70"
							/>
						</div>
					</div>
					<div className="flex mx-auto">
						<div className="flex flex-col gap-2">
							<label for=""> &nbsp; &nbsp; Password</label>
							<input
								type="password"
								placeholder="Password"
								className="lg:text-xl text-lg lg:outline-3 outline-2 focus:outline-4 lg:p-3 py-1 px-3 lg:rounded-3xl rounded-xl lg:w-150 w-70"
							/>
						</div>
					</div>
					<br />
					<Button text={"Register"} color="blue" />
				</form>
			</section>
		</>
	);
}

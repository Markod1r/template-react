import PrimaryButton from "../../../components/button/PrimaryButton";

export default function Login() {
	return (
		<>
			<section className="m-auto lg:h-120 h-100 lg:w-120 w-85 rounded-2xl lg:p-15 p-10 my-20 shadow-2xl/30 bg-blue-100">
				<h1 className="lg:text-3xl  text-2xl mb-11 mt-7">Sign In</h1>
				<form action="" className="flex flex-col">
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

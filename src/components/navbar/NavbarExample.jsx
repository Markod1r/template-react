export default function NavbarExample({ logo }) {
	return (
		<>
			<header className="w-full sm:h-12 lg:h-17 h-13 flex justify-between bg-blue-700">
				<div className="flex my-auto gap-3">
					<img src={logo} alt="logo" className="lg:h-12 h-8 cursor-pointer" />
					<a className="lg:text-2xl text-base my-auto text-white cursor-pointer ">Navbar</a>
				</div>

				<ul className="flex gap-5 my-auto text-white">
					<li className="hover:opacity-70 active:scale-80 lg:text-lg text-xs">
						<a href="#">Dashboard</a>
					</li>
					<li className="hover:opacity-70 active:scale-80 lg:text-lg text-xs">
						<a href="#">About</a>
					</li>
					<li className="hover:opacity-70 active:scale-80 lg:text-lg text-xs">
						<a href="#">Profile</a>
					</li>
					<li className="hover:opacity-70 active:scale-80 lg:text-lg text-xs">
						<a href="#">Projects</a> &nbsp;
					</li>
				</ul>
			</header>
		</>
	);
}

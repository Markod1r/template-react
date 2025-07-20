export default function Navbar({ logo }) {
	return (
		/*<header className="flex flex-nowrap  mb-10 h-16 bg-blue-900">
			<div className="basis-lg flex flex-none">
				<img src={logo} alt="logo" className="m-2 h-6 sm:h-11 my-auto" />
				<a className="basis-sm text-2xl sm:text-3xl text-sky-300 my-auto cursor-pointer">Website</a>
			</div>
			<nav className=" basis-lg text-sky-300 text-lg my-auto gap-10 flex">
				<a className="hover:opacity-70 active:scale-90" id="#" href="">
					Beranda
				</a>
				<a className="hover:opacity-70 active:scale-90" id="#" href="">
					Proyek
				</a>
				<a className="hover:opacity-70 active:scale-90" id="#" href="">
					Kontak
				</a>
			</nav>
			<nav className="basis-lg text-sm sm:text-lg text-sky-300 my-auto flex justify-end">
				<a className="hover:opacity-70 active:scale-90" href="">
					Sign in &nbsp;
				</a>
			</nav>
		</header>*/

		<header class="ic-navbar sticky left-0 top-0 z-40 flex w-full items-center bg-white">
			<div class="container">
				<div class="ic-navbar-container relative -mx-5 flex items-center justify-between">
					<div class="w-60 lg:w-56 max-w-full px-5 inline-flex gap-5">
						<img src={logo} alt="" className="h-12" />
						<h1 className="text-2xl my-auto">Hello</h1>
					</div>
					<div class="flex w-full items-center justify-between px-5">
						<div>
							<nav
								id="navbarMenu"
								class="ic-navbar-collapse absolute right-4 top-[80px] w-full max-w-[250px] rounded-lg hidden bg-primary-light-1 py-5 shadow-lg dark:bg-primary-dark-1 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6"
							>
								<ul class="block lg:flex" role="menu" aria-label="Navigation menu">
									<li class="relative">
										<a
											href="#home"
											className="ic-page-scroll mx-8 flex py-2 text-base font-medium text-body-light-12 group-hover:text-primary dark:text-body-dark-12 lg:mx-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-primary-color lg:dark:text-primary-color lg:group-hover:text-primary-color lg:group-hover:opacity-70 active:scale-90"
										>
											Dashboard
										</a>
									</li>

									<li class="group relative">
										<a
											href="#services"
											className="ic-page-scroll mx-8 flex py-2 text-base font-medium text-body-light-12 group-hover:text-primary dark:text-body-dark-12 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-primary-color lg:dark:text-primary-color lg:group-hover:text-primary-color lg:group-hover:opacity-70 active:scale-90"
										>
											About
										</a>
									</li>
									<li class="group relative">
										<a
											href="#pricing"
											className="ic-page-scroll mx-8 flex py-2 text-base font-medium text-body-light-12 group-hover:text-primary dark:text-body-dark-12 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-primary-color lg:dark:text-primary-color lg:group-hover:text-primary-color lg:group-hover:opacity-70 active:scale-90"
										>
											Unkown
										</a>
									</li>
								</ul>
							</nav>
						</div>
						<div class="flex items-center justify-end">
							<div class="hidden sm:flex">
								<a
									href="#sign"
									class="btn-navbar ml-5 px-6 py-3 text-base font-medium active:scale-90"
								>
									Sign In
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

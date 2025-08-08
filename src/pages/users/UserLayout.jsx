import Navbar from "./../../components/Navbar";
import SideBar from "./../../components/SideBar";
import { Outlet } from "react-router";
import Footer from "./../../components/Footer";
import { Wave } from "./../../components/Wave";

export default function FormLayout() {
	return (
		<>
			<div className="flex">
				<SideBar />
				<section className=" w-full">
					<Navbar />
					<div className="p-5">
						<Outlet />
					</div>
				</section>
			</div>
			<div>
				<Footer />
			</div>
		</>
	);
}

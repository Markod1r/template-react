import Navbar from "../../../components/Navbar";
import { Outlet } from "react-router";
import SideBar from "../../../components/SideBar";
import Footer from "../../../components/Footer";

export default function TablesLayout() {
	return (
		<>
			<div className="flex">
				<SideBar />
				<section className="w-full">
					<Navbar />
					<div className="p-5">
						<Outlet />
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
}

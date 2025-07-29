import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { Outlet } from "react-router";
import SideBar from "../../../components/SideBar";

export default function HomeLayout() {
	return (
		<>
			<div className="flex">
				<SideBar />
				<section>
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

import NavbarExample from "../../../components/navbar/NavbarExample";
import Footer from "../../../components/footer/Footer";
import { Outlet } from "react-router";

export default function HomeLayout() {
	return (
		<>
			<NavbarExample />
			<div className="p-5">
				<Outlet />
			</div>
			<Footer />
		</>
	);
}

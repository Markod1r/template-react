import { Outlet } from "react-router";
import NavbarExample from "../../../components/navbar/NavbarExample";
import Footer from "../../../components/footer/Footer";

export default function FormLayout() {
	return (
		<>
			<NavbarExample />
			<Outlet />
			<Footer />
		</>
	);
}

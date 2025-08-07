import { useEffect } from "react";
import AOS from "aos";
import { useContext } from "react";
import { AppContext } from "../../contexts/context";
import SecondaryButton from "./../../components/SecondaryButton";
import Card from "./../../components/Card";
import Navbar from "../../components/Navbar";
import Footer from "./../../components/Footer";

export default function HomePage() {
	useEffect(() => {
		AOS.init({
			duration: 1050,
		});
	}, []);

	const { car } = useContext(AppContext);

	return (
		<>
			<Navbar />
			<section className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 gap-5 lg:mx-35 md:mx-15 mx-10 lg:my-25 my-10">
				<div className="bg-gray-800 rounded-2xl w-full h-100 my-auto md:col-span-2 col-span-1"></div>
				<div className="bg-gray-800 rounded-2xl w-full h-100 my-auto"></div>
			</section>
			<section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-10 gap-5 lg:mx-35 md:mx-15 mx-10 lg:my-25 my-10">
				<div className="bg-gray-800 rounded-2xl w-full h-100 my-auto col-span-2"></div>
				<div className=" h-100 my-auto col-span-2 grid grid-cols-2 lg:gap-10 gap-5">
					<div className="bg-gray-800 rounded-2xl w-full h-full col-span-2"></div>
					<div className="bg-gray-800 rounded-2xl "></div>
					<div className="bg-gray-800 rounded-2xl "></div>
				</div>
			</section>
			<Footer />
		</>
	);
}

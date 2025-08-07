import { useEffect } from "react";
import AOS from "aos";
import { useContext } from "react";
import { AppContext } from "../../contexts/context";
import SecondaryButton from "./../../components/SecondaryButton";
import Card from "./../../components/Card";

export default function HomePage() {
	useEffect(() => {
		AOS.init({
			duration: 1050,
		});
	}, []);

	const { car } = useContext(AppContext);

	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-2 p-10">
				<section className="my-auto p-2" data-aos="fade-right">
					<h2 className="lg:text-5xl text-3xl my-5 transform hover:rotate-2 transition-all flex">
						Marcois
						<span className="text-rose-500"> Ganteng</span>
					</h2>
					<p className="lg:text-xl text-lg text-justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum ut tempore et
						facilis natus dignissimos recusandae provident! Id nisi cupiditate, molestias vitae
						repudiandae est nesciunt assumenda? Molestiae, laboriosam nostrum!
					</p>
					<SecondaryButton text={"Visit"} color="red" />
				</section>
				<section className="mx-auto my-5" data-aos="zoom-in">
					<Card
						title="My Car"
						paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores vero quas rerum dolor,
						corporis maxime reprehenderit magnam consequatur nisi earum!"
						image={car}
					/>
				</section>
			</div>
		</>
	);
}

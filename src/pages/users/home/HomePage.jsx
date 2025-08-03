import { useEffect } from "react";
import Card from "../../../components/Card";
import AOS from "aos";
import "aos/dist/aos.css";
<<<<<<< HEAD
=======
import SecondaryButton from "../../../components/SecondaryButton";
import { useContext } from "react";
import { AppContext } from "../../../contexts/context";
>>>>>>> selamatin-edit

export default function HomePage() {
	useEffect(() => {
		AOS.init({
			duration: 1050,
		});
	}, []);

	const { car } = useContext(AppContext);

	return (
		<>
			<div className="flex lg:flex-row md:flex-row flex-col p-10">
				<section className="flex-1 my-auto p-2" data-aos="fade-right">
					<h2 className="lg:text-5xl text-3xl my-5 transform hover:rotate-2 transition-all">
						Marcois <span className=" text-red-600">Ganteng</span>
					</h2>
					<p className="lg:text-xl text-lg text-justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum ut tempore et
						facilis natus dignissimos recusandae provident! Id nisi cupiditate, molestias vitae
						repudiandae est nesciunt assumenda? Molestiae, laboriosam nostrum!
					</p>
					<SecondaryButton text={"Visit"} color="red" />
				</section>
<<<<<<< HEAD
				<section className="lg:flex-1 lg:m-0 m-10 " data-aos="zoom-in">
=======
				<section className="lg:flex-1 lg:m-0 mx-auto my-5" data-aos="zoom-in">
>>>>>>> selamatin-edit
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

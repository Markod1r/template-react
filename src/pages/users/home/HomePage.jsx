import { useContext, useEffect } from "react";
import { AppContext } from "../../../Context/Context";
import Card from "../../../components/card/Card";
import SecondaryButton from "../../../components/button/SecondaryButton";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
	const { car } = useContext(AppContext);
	useEffect(() => {
		AOS.init({
			duration: 1050,
		});
	}, []);
	return (
		<>
			<div className="flex lg:flex-row md:flex-row flex-col h-130 w-full p-10">
				<section className="flex-1 my-auto p-2" data-aos="fade-right">
					<h2 className="lg:text-5xl text-3xl text-nowrap my-5 transform hover:rotate-2 transition-all">
						Marcois <span className=" text-red-600">Ganteng</span>
					</h2>
					<p className="lg:text-xl text-base text-justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum ut tempore et
						facilis natus dignissimos recusandae provident! Id nisi cupiditate, molestias vitae
						repudiandae est nesciunt assumenda? Molestiae, laboriosam nostrum!
					</p>
					<SecondaryButton text={"Visit"} color="red" />
				</section>
				<section className="lg:flex-1 lg:m-0 mx-auto my-5" data-aos="zoom-in">
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

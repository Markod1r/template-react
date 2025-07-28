import { BiParagraph } from "react-icons/bi";
import Card from "../../../components/card/Card";
import Carousel from "../../../components/carousel/Carousel";
import { useContext } from "react";
import { AppContext } from "../../../Context/Context";

export const SecondaryHome = () => {
	const { image } = useContext(AppContext);

	const cards = [
		{
			image: image,
			title: "kartu satu",
		},
		{
			image: image,
			title: "kartu dua",
		},
		{
			image: image,
			title: "kartu tiga",
		},
		{
			image: image,
			title: "kartu empat",
		},
		{
			image: image,
			title: "kartu lima",
		},
	];

	return (
		<>
			<Carousel>
				{cards.map((data, index) => (
                    <Card image={data.image} key={index} title={data.title} />
				))}
			</Carousel>
		</>
	);
};

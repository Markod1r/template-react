import Card from "../components/card/Card";
import { useContext } from "react";
import { AppContext } from "../Context/Context";

export default function ProjectsPage() {
	const { image } = useContext(AppContext);
	return (
		<>
			<div className="flex flex-col gap-10">
				<section className="grid lg:grid-cols-3 grid-cols-1 m-auto lg:gap-20 gap-10">
					<Card cardPict={image} />
					<Card cardPict={image} />
					<Card cardPict={image} />
					<Card cardPict={image} />
					<Card cardPict={image} />
				</section>
			</div>
		</>
	);
}

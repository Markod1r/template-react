import Card from "../../components/card/Card";
import { useContext } from "react";
import { AppContext } from "../../Context/Context";

export default function Projects() {
	const { image } = useContext(AppContext);
	return (
		<>
			<Card cardPict={image} />
			<Card cardPict={image} />
			<Card cardPict={image} />
			<Card cardPict={image} />
			<Card cardPict={image} />
		</>
	);
}

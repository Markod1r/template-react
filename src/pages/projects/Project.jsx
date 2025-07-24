import { useContext } from "react";
import { AppContext } from "../../Context/Context";
import Card from "../../components/card/Card";

export default function Project() {
	const { image } = useContext(AppContext);
	return (
		<>
			<Card cardPict={image} />
		</>
	);
}

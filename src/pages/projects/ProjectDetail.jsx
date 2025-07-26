import { useContext } from "react";
import { AppContext } from "../../Context/Context";
import Card from "../../components/card/Card";
import { useParams } from "react-router";

export default function ProjectDetail() {
	const { image } = useContext(AppContext);
	const params = useParams();
	return (
		<>
			<h1 className="text-3xl"> Project {params.id }</h1>
			<Card cardPict={image} />
		</>
	);
}

import { useEffect } from "react";
import Card from "../../components/card/Card";
import { useImmer } from "use-immer";

export default function Projects() {
	const [projects, setProjects] = useImmer([]);

	useEffect(() => {
		fetch("/projects.json")
			.then((response) => response.json())
			.then((data) => {
				setProjects(data);
			});
	}, [setProjects]);
	return (
		<>
			{projects.map((data, index) => (
				<Card
					image={data.image}
					key={index}
					title={data.title}
					paragraph={data.paragraph}
				/>
			))}
		</>
	);
}

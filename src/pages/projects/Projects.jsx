import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import { useImmer } from "use-immer";

export default function Projects() {
	const [load, setLoad] = useState(true);
	const [projects, setProjects] = useImmer([]);

	useEffect(() => {
		if (load) {
			fetch("/projects.json")
				.then((response) => response.json())
				.then((data) => {
					setProjects(data);
					setLoad(false);
				});
		}
	}, []);
	console.log(projects);
	return (
		<>
			{projects.map((data, index) => {
				return <Card key={index} title={data.title} paragraph={data.paragraph} />;
			})}
		</>
	);
}

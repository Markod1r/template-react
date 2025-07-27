import Button from "../button/Button";

export default function Card({
	image,
	title = "Title",
	paragraph = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, similique.",
}) {
	return (
		<div className="bg-gray-700 rounded-xl lg:w-85 w-65 lg:h-auto h-auto shadow-xl/30 lg:m-2 m-auto text-white text-shadow-md">
			<img src={image} alt="" className="w-auto rounded-t-lg" />
			<div className="m-6">
				<h1 className="lg:text-3xl text-2xl mb-3">{title}</h1>
				<p className="lg:text-base text-sm">{paragraph}</p>
				<Button text={"visit"} />
			</div>
		</div>
	);
}

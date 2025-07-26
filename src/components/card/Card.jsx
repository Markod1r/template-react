import Button from "../button/Button";

export default function Card({
	image,
	title = "Title",
	paragraph = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, similique.",
}) {
	return (
		<div className="bg-sky-700 rounded-xl lg:w-85 w-70 lg:h-full h-120 shadow-xl/30 lg:m-2 m-auto text-white  text-shadow-md">
			<img src={image} alt="" className="w-auto" />
			<div className="m-6">
				<h1 className="text-2xl">{title}</h1>
				<p className="text-base">{paragraph}</p>
				<Button text={"visit"} />
			</div>
		</div>
	);
}

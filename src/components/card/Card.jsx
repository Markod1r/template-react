import Button from "../button/Button";

export default function Card({ cardPict }) {
	return (
		<div className="bg-sky-600 rounded-xl lg:w-90 w-70 lg:h-full h-120 shadow-xl/20 lg:m-2 m-auto text-white">
			<img src={cardPict} alt="" className="w-auto" />
			<div className="m-6">
				<h1 className="text-2xl">Title</h1>
				<p className="text-base">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, similique.
				</p>
					<Button text={"visit"} />
			</div>
		</div>
	);
}

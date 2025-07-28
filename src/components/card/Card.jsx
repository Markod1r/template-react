import Button from "../button/PrimaryButton";

export default function Card({ image, title = "T", paragraph = "p" }) {
	return (
		<div
			className={
				"bg-white rounded-xl lg:w-85 w-65 lg:h-auto h-auto shadow-xl/30 m-auto p-3 text-black text-shadow-md"
			}
		>
			<img
				src={image}
				alt="gambar"
				className="lg:w-78 w-68 lg:h-55 h-40 object-cover mx-auto rounded-xl hover:rotate-3 transition-all "
			/>
			<div className="mx-5">
				<h1 className="lg:text-4xl text-2xl my-4 hover:rotate-5 transform transition-all">
					{title}
				</h1>
				<p className="lg:text-base text-sm mb-3">{paragraph}</p>
			</div>
		</div>
	);
}

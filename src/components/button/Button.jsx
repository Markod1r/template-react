export default function Button({ text, onClick, color = "green" }) {
	let buttonColor = "";

	switch (color) {
		case "green":
			buttonColor =
				"lg:w-25 w-18 lg:h-10 h-10 bg-green-600 hover:bg-green-700 active:scale-90 text-white lg:text-base text-xs my-4 rounded-md";
			break;
		case "red":
			buttonColor =
				"lg:w-25 w-18 lg:h-10 h-10 bg-red-500 hover:bg-red-600 active:scale-90 text-white lg:text-base text-xs my-4 rounded-md";
			break;
		case "blue":
			buttonColor =
				"lg:w-25 w-18 lg:h-10 h-10 bg-blue-500 hover:bg-blue-600 active:scale-90 text-white lg:text-base text-xs my-4 rounded-md";
			break;
	}
	return (
		<button href="#" className={buttonColor} onClick={onClick}>
			<b>{text}</b>
		</button>
	);
}

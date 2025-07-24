export default function Button({ text, onClick, color = "green" }) {
	let buttonColor = "";

	switch (color) {
		case "green":
			buttonColor =
				"lg:w-25 w-18 lg:h-10 h-11 bg-green-600 hover:bg-green-700 active:scale-90 active:bg-green-800 text-white lg:text-base text-xs text-shadow-md my-4 rounded-md shadow-lg";
			break;
		case "red":
			buttonColor =
				"lg:w-25 w-18 lg:h-10 h-11 bg-red-600 hover:bg-red-700 active:scale-90 active:bg-red-800 text-white lg:text-base text-xs text-shadow-md my-4 rounded-md shadow-lg";
			break;
		case "blue":
			buttonColor =
				"lg:w-25 w-18 lg:h-10 h-11 bg-blue-600 hover:bg-blue-700 active:scale-90 active:bg-blue-800 text-white lg:text-base text-xs text-shadow-md my-4 rounded-md shadow-lg";
			break;
	}
	return (
		<button href="#" className={buttonColor} onClick={onClick}>
			<b>{text}</b>
		</button>
	);
}

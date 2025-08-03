export default function PrimaryButton({ text, onClick, color = "green" }) {
	let variant = "";
	switch (color) {
		case "blue":
			variant =
				"lg:w-25 w-18 lg:h-10 h-11 bg-blue-600 hover:bg-blue-700 active:scale-93 active:bg-blue-800 text-white lg:text-base text-xs text-shadow-md mt-5 rounded-md shadow-lg";
			break;
		case "red":
			variant =
				"lg:w-25 w-18 lg:h-10 h-11 bg-red-600 hover:bg-red-700 active:scale-93 active:bg-blue-800 text-white lg:text-base text-xs text-shadow-md mt-5 rounded-md shadow-lg";
			break;
		default:
			variant =
				"lg:w-25 w-18 lg:h-10 h-11 bg-green-600 hover:bg-green-700 active:scale-93 active:bg-green-800 text-white lg:text-base text-xs text-shadow-md mt-5 rounded-md shadow-lg";
	}
	return (
		<button className={variant} onClick={onClick}>
			<b>{text}</b>
		</button>
	);
}

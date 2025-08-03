export default function SecondaryButton({ text, onClick, color = "green" }) {
	let variant = "";
	switch (color) {
		case "blue":
			variant =
				"lg:w-25 w-18 lg:h-10 h-11 outline-3 outline-blue-400 hover:outline-0 hover:bg-blue-500 hover:text-white  active:scale-93 text-blue-400 lg:text-lg text-xs mt-5 rounded-md";
			break;
		case "red":
			variant =
				"lg:w-25 w-18 lg:h-10 h-11 outline-3 outline-red-400 hover:outline-0 hover:bg-red-500 hover:text-white  active:scale-93 text-red-400 lg:text-lg text-xs mt-5 rounded-md";
			break;
		default:
			variant =
				"lg:w-25 w-18 lg:h-10 h-11 outline-3 outline-green-500 hover:outline-0 hover:bg-green-600 hover:text-white  active:scale-93 text-green-500 lg:text-lg text-xs mt-5 rounded-md";
	}
	return (
		<button className={variant} onClick={onClick}>
			<b>{text}</b>
		</button>
	);
}

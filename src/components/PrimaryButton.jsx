export default function PrimaryButton({ text, onClick, color = "green" }) {
  let variant = "";
  switch (color) {
    case "blue":
      variant =
        "py-2 px-2 bg-blue-600 hover:bg-blue-700 active:scale-93 active:bg-blue-800 text-white lg:text-base text-xs text-shadow-md mt-5 rounded-full shadow-lg";
      break;
    case "red":
      variant =
        "py-2 px-2 bg-red-600 hover:bg-red-700 active:scale-93 active:bg-blue-800 text-white lg:text-base text-xs text-shadow-md mt-5 rounded-full shadow-lg";
      break;
    default:
      variant =
        "py-2 px-2 bg-green-600 hover:bg-green-700 active:scale-93 active:bg-green-800 text-white lg:text-base text-xs text-shadow-full mt-5 rounded-full shadow-lg";
  }
  return (
    <button className={variant} onClick={onClick}>
      <b>{text}</b>
    </button>
  );
}

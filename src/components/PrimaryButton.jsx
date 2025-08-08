export default function PrimaryButton({ text, onClick, color = "green" }) {
  let variant = "";
  switch (color) {
    case "blue":
      variant = "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 ";
      break;
    case "red":
      variant = "bg-red-600 hover:bg-red-700 active:bg-blue-800 ";
      break;
    default:
      variant = "bg-green-600 hover:bg-green-700 active:bg-green-800 ";
  }
  return (
    <button
      className={`${variant} lg:text-base mt-5 cursor-pointer rounded-full px-2 h-10 text-xs text-white shadow-lg text-shadow-md active:scale-93`}
      onClick={onClick}
    >
      <b>{text}</b>
    </button>
  );
}

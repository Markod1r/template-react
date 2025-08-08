export default function SecondaryButton({ text, onClick, color }) {
  let variant = "";
  switch (color) {
    case "white":
      variant =
        "px-6 py-2 outline-2 outline-slate-100 hover:outline-0 hover:bg-slate-100 hover:text-black active:scale-93 text-slate-100 lg:text-base text-xs rounded-md";
      break;
    case "blue":
      variant =
        "px-6 py-2 outline-2 outline-blue-600 hover:outline-0 hover:bg-blue-600 hover:text-slate-100 active:scale-93 text-blue-600 lg:text-base text-xs rounded-md";
      break;

    case "red":
      variant =
        "px-6 py-2 outline-2 outline-red-600 hover:outline-0 hover:bg-red-600 hover:text-slate-100 active:scale-93 text-red-600 lg:text-base text-xs rounded-md";
      break;
    default:
      variant =
        "px-6 py-2 outline-2 outline-green-600 hover:outline-0 hover:bg-green-600 hover:text-slate-100 active:scale-93 text-green-600 lg:text-base text-xs rounded-md";
  }
  return (
    <button className={variant} onClick={onClick}>
      <b>{text}</b>
    </button>
  );
}

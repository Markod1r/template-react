export default function SecondaryButton({ text, onClick, color }) {
  let variant = "";
  switch (color) {
    case "white":
      variant =
        "outline-slate-100 hover:bg-slate-100 hover:text-black text-slate-100";
      break;
    case "blue":
      variant =
        "outline-blue-600 hover:bg-blue-600 hover:text-slate-100 text-blue-600";
      break;

    case "red":
      variant =
        "outline-red-600 hover:bg-red-600 hover:text-slate-100 text-red-600";
      break;
    default:
      variant =
        "outline-green-600  hover:bg-green-600 hover:text-slate-100 text-green-600";
  }
  return (
    <button
      className={`${variant} h-9 cursor-pointer rounded-md px-6 text-xs outline-2 hover:outline-0 active:scale-93 lg:text-base`}
      onClick={onClick}
    >
      <b>{text}</b>
    </button>
  );
}

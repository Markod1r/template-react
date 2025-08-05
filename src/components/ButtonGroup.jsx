import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function ButtonGroup({ onEdit, onDelete }) {
	return (
		<>
			<div class="inline-flex rounded-md shadow-xs gap-5">
				<button type="button" onClick={onEdit}>
					<FaRegEdit size={24} className="text-sky-500 active:scale-85 cursor-pointer" />
				</button>
				<button type="button" onClick={onDelete}>
					<MdDelete size={24} className="text-rose-500 active:scale-85 cursor-pointer" />
				</button>
			</div>
		</>
	);
}

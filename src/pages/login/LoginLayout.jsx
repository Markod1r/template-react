import { Outlet } from "react-router";
import { Link } from "react-router";
export default function FormLayout() {
	return (
		<div className="flex flex-col">
			<div>
				<Outlet />
			</div>
		</div>
	);
}

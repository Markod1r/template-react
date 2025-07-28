import { Outlet } from "react-router";

export default function LoginLayout() {
	return (
		<div className="flex h-screen">
			<Outlet />
		</div>
	);
}

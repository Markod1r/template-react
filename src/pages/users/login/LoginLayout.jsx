import { Outlet } from "react-router";

export default function LoginLayout() {
	return (
		<div className="flex flex-col">
            <div> 
                <Link className="text-red">Back</Link>
            </div>
			<div>
				<Outlet />
			</div>
		</div>
	);
}

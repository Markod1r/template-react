import { Outlet } from "react-router";

export default function ProjectLayout() {
	return (
		<>
			<div className="flex flex-col gap-10">
				<section className="grid lg:grid-cols-3 grid-cols-1 m-auto lg:gap-20 gap-10">
					<Outlet />
				</section>
			</div>
		</>
	);
}

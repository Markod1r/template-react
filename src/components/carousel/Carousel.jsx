import { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function Carousel({ children }) {
	const [curr, setCurr] = useState(0);

	useEffect(() => console.log(children));
	function next() {
		setCurr((curr) => (curr == 0 ? children.length - 1 : curr - 1));
	}

	function prev() {
		setCurr((curr) => (curr == children.length - 1 ? 0 : curr + 1));
	}

	return (
		<>
			<div className="overflow-hidden relative w-84 h-full mx-auto">
				<div
					className="flex w-[300px] flex-shrink-0 transition-transform ease-out duration-500"
					style={{ transform: `translateX(-${curr * 100}%)` }}
				>
					{children}
				</div>
				<div className="absolute inset-0 flex items-center justify-between">
					<button onClick={next}>
						<BiChevronLeft size={40} className="text-cyan-500" />
					</button>
					<button onClick={prev}>
						<BiChevronRight size={40} className="text-cyan-500" />
					</button>
				</div>
			</div>
		</>
	);
}

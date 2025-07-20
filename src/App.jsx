import Button from "./components/button/Button";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/card";

import reactLogo from "./assets/react.svg";
import image from "./assets/example.jpg";
import Table from "./components/table/Table";
import Br from "./Br";
import NavbarExample from "./components/navbar/NavbarExample";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<>
			<NavbarExample logo={reactLogo} />
			<h1 className="text-2xl text-center mt-5">Components Button</h1>
			<section className="flex gap-5 justify-center">
				<Button text={"submit"} />
				<Button text={"delete"} color="red" />
				<Button text={"click"} color="blue" />
			</section>
			<div className="flex flex-col gap-10">
				<section className="grid lg:grid-cols-3 grid-cols-1 m-auto lg:gap-20 gap-10">
					<Card cardPict={image} />
					<Card cardPict={image} />
					<Card cardPict={image} />
					<Card cardPict={image} />
					<Card cardPict={image} />
				</section>
				<section>
					<Table />
				</section>
			</div>

			<div>
				<section></section>
			</div>
			<Br />
			<Footer />
		</>
	);
}

export default App;

//Hooks
import { Routes, Route } from "react-router";
import { AppContext } from "./Context/Context";

//assests
import reactLogo from "./assets/react.svg";
import Image from "./assets/example.jpg";
import car from "./assets/car.jpg";

//Layouts
import HomeLayout from "./pages/users/home/HomeLayout";
import LoginLayout from "./pages/users/login/LoginLayout";

// Pages
import HomePage from "./pages/users/home/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/users/login/Login";
import Register from "./pages/users/login/Register";

function App() {
	const dataContext = {
		logo: reactLogo,
		image: Image,
		car: car,
	};

	return (
		<>
			<AppContext.Provider value={dataContext}>
					<Routes>
						<Route path="/" element={<HomeLayout />}>
							<Route index element={<HomePage />}></Route>
						</Route>
						<Route path="/login" element={<LoginLayout />}>
							<Route index element={<Login />} />
							<Route path="register" element={<Register />} />
						</Route>
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
			</AppContext.Provider>
		</>
	);
}

export default App;

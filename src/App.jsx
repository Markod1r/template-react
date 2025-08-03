//Hooks
import { Routes, Route } from "react-router";
import { AppContext } from "./contexts/context";

//assests
import reactLogo from "./assets/react.svg";
import Image from "./assets/example.jpg";
import car from "./assets/car.jpg";

//Layouts
import HomeLayout from "./pages/users/home/HomeLayout";
import LoginLayout from "./pages/users/login/LoginLayout";
import TablesLayout from "./pages/users/tables/TablesLayout";

// Pages
import HomePage from "./pages/users/home/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/users/login/Login";
import Register from "./pages/users/login/Register";
import TablesPage from "./pages/users/tables/TablesPage";

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
						<Route index element={<HomePage />} />
					</Route>
					<Route path="/tables" element={<TablesLayout />}>
						<Route index element={<TablesPage />} />
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

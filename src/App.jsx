import { Routes, Route } from "react-router";

//assests
import reactLogo from "./assets/react.svg";
import ImageExample from "./assets/example.jpg"

//components
import NavbarExample from "./components/navbar/NavbarExample";
import Footer from "./components/footer/Footer";

// Pages
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
	return (
		<>
			<NavbarExample logo={reactLogo} />
			<div className="min-h-142 lg:p-20 p-10 ">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/dashboard" element={<DashboardPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/projects" element={<ProjectsPage image={ImageExample} />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</div>

			<Footer />
		</>
	);
}

export default App;

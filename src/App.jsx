//Hooks
import { Routes, Route } from "react-router";
import { AppContext } from "./Context/Context";

//assests
import reactLogo from "./assets/react.svg";
import ImageExample from "./assets/example.jpg";

//components
import NavbarExample from "./components/navbar/NavbarExample";
import Footer from "./components/footer/Footer";

// Pages
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Projects from "./pages/projects/Projects";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Project from "./pages/projects/Project";
import ProjectLayout from "./pages/projects/ProjectLayout";

function App() {
	const dataContext = {
		logo: reactLogo,
		image: ImageExample,
	};

	return (
		<>
			<AppContext.Provider value={dataContext}>
				<NavbarExample logo={reactLogo} />
				<div className="min-h-142 lg:p-20 p-10 ">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/dashboard" element={<DashboardPage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/form" element={<FormLayout />}>
							<Route index element={<LoginPage />} />
							<Route path="login" element={<Login />} />
							<Route path="register" element={<Register />} />
						</Route>
						<Route path="/profile" element={<ProfilePage />} />
						<Route path="/projects" element={<ProjectLayout />}>
							<Route index element={<Projects />} />
							<Route path="project" element={<Project />} />
						</Route>
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</div>

				<Footer />
			</AppContext.Provider>
		</>
	);
}

export default App;

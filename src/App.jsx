//Hooks
import { Routes, Route } from "react-router";
import { AppContext } from "./contexts/context";

//assests
import reactLogo from "./assets/react.svg";
import Image from "./assets/example.jpg";
import car from "./assets/car.jpg";

//Layouts
import LoginLayout from "./pages/login/LoginLayout";
import TablesLayout from "./pages/users/tables/TablesLayout";
import FormLayout from "./pages/login/LoginLayout";

// Pages
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import TablesPage from "./pages/users/tables/TablesPage";
import UserLayout from "./pages/users/UserLayout";
import Table from "./components/Table";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

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
          <Route path="/" element={<HomePage />} />
          <Route path="user" element={<UserLayout />}>
            <Route path="Table" element={<Table />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;

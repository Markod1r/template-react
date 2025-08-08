//Hooks
import { Routes, Route } from "react-router";
import { AppContext } from "./contexts/context";

//assests
import reactLogo from "./assets/react.svg";
import Image from "./assets/example.jpg";
import car from "./assets/car.jpg";

//Layouts
import AdminLayout from "./pages/admin/AdminLayout";
import UserLayout from "./pages/users/UserLayout";

// Pages
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import HomeAdmin from "./pages/admin/HomeAdmin";

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
          <Route path="user" element={<UserLayout />}></Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<HomeAdmin />} />
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

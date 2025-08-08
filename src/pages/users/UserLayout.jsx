import Navbar from "./../../components/Navbar";
import { Outlet } from "react-router";
import Footer from "./../../components/Footer";

export default function FormLayout() {
  return (
    <>
      <div className="flex">
        <section className="w-full">
          <Navbar />
          <div className="p-5">
            <Outlet />
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

import { Outlet } from "react-router";
import NavbarAdmin from "./components/NavbarAdmin";
import { Wave } from "../../components/Wave";
import SideBar from "./components/SideBar";
import { useState } from "react";

export default function AdminLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex">
        <div>
          <SideBar isOpen={isOpen} />
        </div>
        <section className="w-full">
          <NavbarAdmin setIsOpen={setIsOpen} isOpen={isOpen} />
          <Outlet />
        </section>
      </div>
      <Wave />
    </>
  );
}

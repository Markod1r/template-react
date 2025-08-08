import { Outlet } from "react-router";
import NavbarAdmin from "./components/NavbarAdmin";
import { Wave } from "../../components/Wave";
import SideBar from "./components/SideBar";
import { useState } from "react";

export default function AdminLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-12">
        <NavbarAdmin
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          col={"col-span-12"}
        />
        <SideBar isOpen={isOpen} col={"col-span-2"} />
        <div className="col-span-10">
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

import { useContext, useEffect } from "react";
import AOS from "aos";
import SecondaryButton from "./../../components/SecondaryButton";
import Card from "./../../components/Card";
import Navbar from "../../components/Navbar";
import Footer from "./../../components/Footer";
import { Wave } from "./../../components/Wave";
import { AppContext } from "../../contexts/context";

export default function HomePage() {
  const { car } = useContext(AppContext);
  useEffect(() => {
    AOS.init({
      duration: 1050,
    });
  }, []);

  return (
    <>
      <Navbar />
      <section className="mx-10 my-10 grid grid-cols-1 gap-5 md:mx-15 lg:mx-35 lg:my-5 lg:grid-cols-3 lg:gap-10">
        <div className="text-shadow-xl col-span-1 my-auto h-100 w-full rounded-2xl p-20 text-slate-100 text-shadow-lg/20 md:col-span-2">
          <h1 className="my-5 text-5xl text-shadow-lg/20">
            Marcois <span className="">Makalew </span>
          </h1>
          <p className="text-lg text-shadow-lg/20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            expedita recusandae officiis ad fugit quibusdam eos impedit
            veritatis reiciendis sapiente nulla pariatur accusamus esse minus
            nesciunt ullam ipsum, possimus error.
          </p>
        </div>
        <div className="my-auto h-100 w-100" data-aos="zoom-in-up">
          <img
            src={car}
            alt=""
            className={`h-full w-full rounded-full object-cover object-[center_60%] shadow-2xl`}
          />
        </div>
      </section>
      <Wave />

      {/* <section className="mx-10 my-10 grid grid-cols-1 gap-5 md:mx-15 lg:mx-35 lg:my-25 lg:grid-cols-4 lg:gap-10">
        <div className="col-span-2 my-auto h-100 w-full rounded-2xl bg-gray-800"></div>
        <div className="col-span-2 my-auto grid h-100 grid-cols-2 gap-5 lg:gap-10">
          <div className="col-span-2 h-full w-full rounded-2xl bg-gray-800"></div>
          <div className="rounded-2xl bg-gray-800"></div>
          <div className="rounded-2xl bg-gray-800"></div>
        </div>
      </section> */}
    </>
  );
}

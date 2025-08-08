import { Wave } from "../../components/Wave";

export default function DashboardAdmin() {
  return (
    <>
      <main className="grid grid-cols-8 h-100 items-center p-10">
        <Wave/>
        <h1 className="text-5xl col-span-8 text-slate-100 text-shadow-lg">
          Welcome to Admin Dashboard
        </h1>
      </main>
    </>
  );
}

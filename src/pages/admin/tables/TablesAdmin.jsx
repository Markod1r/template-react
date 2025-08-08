import ButtonGroup from "./../../../components/ButtonGroup";

export default function TablesAdmin({
  col1 = "ID",
  col2 = "NAME",
  col3 = "JOB",
}) {
  return (
    <>
      <main className="h-full items-center p-10">
        <div className="w-1/2 overflow-x-auto rounded-lg shadow-lg/10">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-200 text-xs text-gray-700 uppercase">
              <tr>
                <th className="px-6 py-3">{col1}</th>
                <th className="px-6 py-3">{col2}</th>
                <th className="px-6 py-3">{col3}</th>
                <th className="px-6 py-3 text-center">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <Row name={"example"} job={"chef"} />
              <Row name={"example"} job={"chef"} />
              <Row name={"example"} job={"chef"} />
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

function Row({ name, job }) {
  return (
    <tr className="border-b bg-white hover:bg-slate-100 sm:text-sm">
      <td className="px-6 py-4">1</td>
      <td className="px-6 py-4 font-medium text-gray-900">{name}</td>
      <td className="px-6 py-4">{job}</td>
      <td className="px-6 py-4 text-center">
        <ButtonGroup />
      </td>
    </tr>
  );
}

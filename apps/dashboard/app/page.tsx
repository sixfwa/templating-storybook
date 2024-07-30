import Navigation from "@repo/ui/navigation";
import { Table, TableHead, TableRow } from "@repo/ui/table";

async function getData() {
  return {
    columnNames: ["ID", "Name", "Company", "Invoice ID"],
    data: [
      {
        heading: 1,
        columns: ["John Doe", "Company A", "492-323"],
      },
      {
        heading: 2,
        columns: ["Harry Potter", "Company B", "213-495"],
      },
      {
        heading: 3,
        columns: ["Jane Doe", "Company C", "831-203"],
      },
      {
        heading: 4,
        columns: ["Frodo Baggins", "Company D", "284-304"],
      },
      {
        heading: 5,
        columns: ["Ned Stark", "Company D", "939-384"],
      },
    ],
  };
}

export default async function Home() {
  const data = await getData();
  return (
    <main>
      <Navigation
        theme="dark"
        buttonLabel="Logout"
        navLinks={["Dashboard", "Projects"]}
        logo="Internal Software"
      />
      <div className="p-10">
        <Table theme="dark">
          <TableHead columnNames={data.columnNames} />
          {data.data.map((row) => (
            <TableRow
              heading={row.heading}
              columns={row.columns}
              key={row.heading}
            />
          ))}
        </Table>
      </div>
    </main>
  );
}

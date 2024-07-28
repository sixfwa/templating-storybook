import { TableHead, TableRow, Table as TableContainer } from "@repo/ui/table";

interface TableProps {
  columnNames: string[] | number[];
  theme: "light" | "dark" | "business" | "corporate";
}

export const Table = ({ columnNames, theme }: TableProps) => {
  return (
    <TableContainer theme={theme}>
      <TableHead columnNames={columnNames} />
      <tbody>
        <TableRow heading={1} columns={["John Doe", "12403", "Ordered"]} />
        <TableRow heading={2} columns={["Jane Doe", "96375", "Delivered"]} />
        <TableRow
          heading={3}
          columns={["Michael Jackson", "48592", "Delivered"]}
        />
      </tbody>
    </TableContainer>
  );
};

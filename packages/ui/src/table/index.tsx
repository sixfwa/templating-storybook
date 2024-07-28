import "./table.css";

interface TableRowProps {
  heading: string | number;
  columns: string[] | number[];
}

interface TableHeadProps {
  columnNames: string[] | number[];
}

interface TableProps {
  children: React.ReactNode;
  theme: "light" | "dark" | "business" | "corporate";
}

export const TableHead = ({ columnNames }: TableHeadProps) => {
  return (
    <thead className="table-head">
      <tr className="table-head-row">
        {columnNames.map((col) => (
          <th key={col} className="table-head-column">
            {col}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export const TableRow = ({ heading, columns }: TableRowProps) => {
  return (
    <tr className="table-row">
      <th className="th">{heading}</th>
      {columns.map((item) => (
        <td key={item} className="td">
          {item}
        </td>
      ))}
    </tr>
  );
};

export const Table = ({ children, theme }: TableProps) => {
  return (
    <table className={["table", `table--${theme}`].join(" ")}>{children}</table>
  );
};

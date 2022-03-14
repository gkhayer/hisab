import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

type DataTableProps = {
  columns: {
    field: string;
    header: string;
    sortable?: boolean;
  }[];
  data: any;
};

const DataTableComponent = ({ columns, data }: DataTableProps) => {
  const dynamicColumns = columns.map((col, i) => {
    return (
      <Column
        key={col.field}
        field={col.field}
        header={col.header}
        sortable={col.sortable}
      />
    );
  });

  return (
    <div>
      <DataTable value={data}>{dynamicColumns}</DataTable>
    </div>
  );
};

export default DataTableComponent;

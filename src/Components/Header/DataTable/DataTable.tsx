import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

type Props = {
  columns: {
    field: string;
    header: string;
  }[];
  data: any
};

const DataTableComponent = (props: Props) => {
  const dynamicColumns = props.columns.map((col, i) => {
    return <Column key={col.field} field={col.field} header={col.header} />;
  });

  return (
    <div>
      <DataTable value={props.data} >
        {dynamicColumns}
      </DataTable>
    </div>
  );
};

export default DataTableComponent;

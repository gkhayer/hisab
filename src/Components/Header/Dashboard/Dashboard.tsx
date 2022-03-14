import React from "react";
import DataTableComponent from "../DataTable/DataTable";
import data from "../../../data.json";

type Props = {};

const Dashboard = (props: Props) => {
  const columns = [
    { field: "code", header: "Code", sortable: true},
    { field: "name", header: "Name" },
    { field: "category", header: "Category" },
    { field: "quantity", header: "Quantity" },
  ];

  return (
    <div className="grid dashboard">
      <div className="col-10 col-offset-1">
        <DataTableComponent columns={columns} data={data.data} />
      </div>
    </div>
  );
};

export default Dashboard;

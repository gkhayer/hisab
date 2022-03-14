import React from "react";
import DataTableComponent from "../DataTable/DataTable";
import data from "../../../data.json";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";

type Props = {};

const Dashboard = (props: Props) => {
  const imageBodyTemplate = (rowData: { image: string | undefined }) => {
    return (
      <img
        src={`images/product/${rowData.image}`}
        onError={(e) =>
          (e.currentTarget.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={rowData.image}
        className="product-image"
      />
    );
  };

  const formatCurrency = (value: {
    toLocaleString: (
      arg0: string,
      arg1: { style: string; currency: string }
    ) => any;
  }) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const priceBodyTemplate = (rowData: { price: any }) => {
    return formatCurrency(rowData.price);
  };

  const ratingBodyTemplate = (rowData: { rating: any }) => {
    return <Rating value={rowData.rating} readOnly cancel={false} />;
  };

  const statusBodyTemplate = (rowData: {
    inventoryStatus: {} | null | undefined;
  }) => {
    return (
      <span className={`product-badge status-${rowData.inventoryStatus}`}>
        {rowData.inventoryStatus}
      </span>
    );
  };

  // const editProduct = (product) => {
  //   setProduct({...product});
  //   setProductDialog(true);
  // }

  // const actionBodyTemplate = (rowData: any) => {
  //   return (
  //       <React.Fragment>
  //           <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editProduct(rowData)} />
  //           <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => confirmDeleteProduct(rowData)} />
  //       </React.Fragment>
  //   );
  // }
  const columns = [
    { field: "code", header: "Code", sortable: true },
    { field: "name", header: "Name", sortable: true },
    { field: "image", header: "Image", body: imageBodyTemplate },
    {
      field: "price",
      header: "Price",
      body: priceBodyTemplate,
      sortable: true,
    },
    { field: "category", header: "Category", sortable: true },
    {
      field: "rating",
      header: "Reviews",
      body: ratingBodyTemplate,
      sortable: true,
    },
    {
      field: "inventoryStatus",
      header: "Status",
      body: statusBodyTemplate,
      sortable: true,
    },
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

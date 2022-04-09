import React, { useRef, useState } from "react";
import { classNames } from 'primereact/utils';
import DataTableComponent from '../DataTable/DataTable'
import data from "../../data.json";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Toolbar } from "primereact/toolbar";


type Props = {};

const Dashboard = (props: Props) => {
  let emptyProduct = {
    id: null,
    name: "",
    image: null,
    description: "",
    category: null,
    price: 0,
    quantity: 0,
    rating: 0,
    inventoryStatus: "INSTOCK",
  };

  const [products, setProducts] = useState(data);
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState(emptyProduct);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  const openNew = () => {
    setProduct(emptyProduct);
    setSubmitted(false);
    setProductDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
}

const hideDeleteProductDialog = () => {
  setDeleteProductDialog(false);
}

const hideDeleteProductsDialog = () => {
  setDeleteProductsDialog(false);
}

const saveProduct = () => {
  setSubmitted(true);
}


  const confirmDeleteProduct = (product: any) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  



  const confirmDeleteSelected = () => {
    setDeleteProductsDialog(true);
  };


  const leftToolbarTemplate = () => {
    return (
      <React.Fragment>
        <Button
          label="New"
          icon="pi pi-plus"
          className="p-button-success mr-2"
          onClick={openNew}
        />
        <Button
          label="Delete"
          icon="pi pi-trash"
          className="p-button-danger"
          onClick={confirmDeleteSelected}
          disabled={!selectedProducts}
        />
        {/* //|| !selectedProducts?.length */}
      </React.Fragment>
    );
  };

  const rightToolbarTemplate = () => {
    return (
      <React.Fragment>
        {/* <FileUpload mode="basic" name="demo[]" auto url="https://primefaces.org/primereact/showcase/upload.php" accept=".csv" chooseLabel="Import" className="mr-2 inline-block" onUpload={importCSV} />
                <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} /> */}
      </React.Fragment>
    );
  };

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

  const editProduct = (product: any) => {
    setProduct({ ...product });
    setProductDialog(true);
  };

  const actionBodyTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success mr-2"
          onClick={() => editProduct(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          onClick={() => confirmDeleteProduct(rowData)}
        />
      </React.Fragment>
    );
  };

  const productDialogFooter = (
    <React.Fragment>
        <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
        <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
    </React.Fragment>
);
const deleteProductDialogFooter = (
    <React.Fragment>
        <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
        {/* <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteProduct} /> */}
    </React.Fragment>
);
const deleteProductsDialogFooter = (
    <React.Fragment>
        <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductsDialog} />
        {/* <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteSelectedProducts} /> */}
    </React.Fragment>
);

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
        <div className="card">
          <Toolbar
            className="mb-4"
            left={leftToolbarTemplate}
            right={rightToolbarTemplate}
          ></Toolbar>
          <DataTableComponent columns={columns} data={data.data} />
        </div>
       
      </div>
    </div>
  );
};

export default Dashboard;

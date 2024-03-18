import React from "react";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

const Table = () => {
  const data = [
    { name: "Guan", age: 20 },
    { name: "Max", age: 22 },
    { name: "Davil", age: 23 },
    { name: "Guan", age: 25 },
  ];

  const columns = [
    {
      headerName: "Name",
      field: "name",
      checkboxSelection: true,
    },
    {
      headerName: "Age",
      field: "age",
    },
  ];

  const defaultColDef = {
    editable: true,
    filter: true,
  };

  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact
        rowData={data}
        columnDefs={columns}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default Table;

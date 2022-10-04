import React from "react";

import axios from "axios";
import styled from "@emotion/styled";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
const List = () => {
  const [data, setData] = React.useState([]);
  const [columnDefs] = React.useState([
    { field: "id" },
    { field: "title" },
    { field: "price" },
  ]);

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    console.log(token);
    axios
      .get("https://dummyjson.com/auth/products", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setData(res.data.products);
      })
      .catch()
      .finally();
  }, []);

  return (
    <Container>
      <h1>لیست محصولات</h1>
      <div className="ag-theme-alpine">
        <AgGridReact
          columnDefs={columnDefs}
          rowData={data}
          rowSelection="multiple"
        />
      </div>
    </Container>
  );
};

export default List;

const Container = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  "& .ag-theme-alpine": {
    width: "600px",
    height: "500px",
    overflow: "auto",
  },
}));

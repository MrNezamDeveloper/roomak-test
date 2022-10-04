import React from "react";

import axios from "axios";
import styled from "@emotion/styled";

const List = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    console.log(token);
    axios
      .get("https://dummyjson.com/auth/products", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setData(res.data.products))
      .catch()
      .finally();
  }, []);

  return (
    <Container>
      {" "}
      <h1>لیست محصولات</h1>
      {data.map((list) => (
        <div>{list.brand}</div>
      ))}
    </Container>
  );
};

export default List;

const Container = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

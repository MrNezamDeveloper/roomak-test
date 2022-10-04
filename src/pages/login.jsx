import React from "react";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const [data, setData] = React.useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleUsarname = (e) => {
    console.log(e.target.value);
    setData((data) => ({ ...data, username: e.target.value }));
  };
  const handlePassword = (e) => {
    console.log(e.target.value);
    setData((data) => ({ ...data, password: e.target.value }));
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    setLoading(true);
    axios
      .post("https://dummyjson.com/auth/login", data)
      .then((res) => {
        toast("ورود موفقیت آمیز بود");
        window.localStorage.setItem("token", `${res.data.token}`);
        navigate("/list");
      })
      .catch(() => {
        toast("نام کاربری یا رمز عبور صحیح نمی باشد");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container>
      <Box component="form" onSubmit={handleSubmitLogin} className="form">
        <TextField
          required
          id="outlined-basic"
          label="نام کاربری"
          variant="outlined"
          onChange={handleUsarname}
        />
        <TextField
          required
          id="outlined-basic"
          label="رمز عبور"
          variant="outlined"
          onChange={handlePassword}
        />
        <Button
          className="button"
          type="submit"
          variant={`${loading ? "outlined" : "contained"}`}
        >
          {loading ? <CircularProgress /> : "ورود به حساب کاربری"}
        </Button>
      </Box>
    </Container>
  );
};

export default Login;

const Container = styled.div(() => ({
  height: "100vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "&>.form": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    height: "200px",
    "& .button": {
      height: "50px",
      width: "200px",
    },
  },
}));

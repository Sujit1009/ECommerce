import React from "react";
import { Stack, Avatar, Paper, TextField, Button } from "@mui/material";
import logo from "../images.jpeg";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/register");
  };
  return (
    <div
      style={{
        padding: "16vh",
        marginLeft: "65vh",
      }}
    >
      <Paper
        elevation={12}
        sx={{
          height: "55vh",
          width: "35vh",
          padding: "16px",
          border: "2px solid #32DBC6",
        }}
      >
        <Stack spacing={4} justifyContent="center">
          <Avatar
            alt="lgog"
            className=""
            component="div"
            sizes=""
            src={logo}
            sx={{
              height: "60px",
              width: "60px",

              border: "3px solid #49BEB7",
            }}
          />
          <TextField id="" label="User Name" variant="filled" />
          <TextField id="" label="Password" type="password" variant="filled" />
          <Button variant="contained">Login</Button>
          <Button variant="contained" onClick={handleClick}>
            Registration
          </Button>
        </Stack>
      </Paper>
    </div>
  );
};

export default Login;

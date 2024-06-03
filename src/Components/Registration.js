import React from "react";
import {
  Stack,
  Divider,
  Paper,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  Input,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const onHandleClick = (e) => {
    navigate("/");
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
        <Stack spacing={1} justifyContent="center">
          <TextField id="" label="Full Name" variant="filled" />
          <Divider orientation="horizontal" flexItem />
          <TextField id="" label="Password" type="password" variant="filled" />
          <Divider orientation="horizontal" flexItem />
          <TextField
            id=""
            label="Re-Password"
            type="password"
            variant="filled"
          />
          <Divider orientation="horizontal" flexItem />
          <TextField id="" label="Email" type="password" variant="filled" />
          <Divider orientation="horizontal" flexItem />
          <TextField id="" label="Phone" type="password" variant="filled" />
          <Divider orientation="horizontal" flexItem />

          <FormControl>
            <InputLabel htmlFor="age-helper">Gender</InputLabel>
            <Select input={<Input name="Gender" id="age-helper" />}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Male</MenuItem>
              <MenuItem value={20}>Female</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" onClick={onHandleClick}>
            Registration
          </Button>
        </Stack>
      </Paper>
    </div>
  );
};

export default Registration;

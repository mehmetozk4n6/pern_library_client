import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <IoLogoJavascript size={"2.5em"} />
      <FormControl variant="standard">
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <BsSearch />
            </InputAdornment>
          }
        />
        <Button>Search</Button>
      </FormControl>
      <Link to="add">
        <Button>Add new record </Button>
      </Link>
    </Box>
  );
}

export default Navbar;

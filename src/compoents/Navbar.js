import { useState } from "react";
import { IoLogoJavascript } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Navbar() {
  const [searchVal, setSearchVal] = useState("");
  const handleClick = () => {
    console.log(searchVal);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <IoLogoJavascript size={"2.5em"} />
      <FormControl variant="standard">
        <Input
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <BsSearch />
            </InputAdornment>
          }
        />
        <Button onClick={handleClick}>Search</Button>
      </FormControl>
      <Link to="add">
        <Button>Add new record </Button>
      </Link>
    </Box>
  );
}

export default Navbar;

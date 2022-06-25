import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import AddCategory from "./AddCategory";
import Box from "@mui/material/Box";

function AddNav() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <Link to="/">
          <BsArrowLeft />
          Return to List Page
        </Link>
      </Box>
    </Box>
  );
}

export default AddNav;

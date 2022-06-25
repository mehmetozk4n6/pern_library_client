import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { selectOrder, setOrder } from "../redux/librarySlice";

function Filter() {
  const dispatch = useDispatch();
  const order = useSelector(selectOrder);
  return (
    <Box sx={{ width: "25%", margin: 0, padding: "auto" }}>
      <Button onClick={() => dispatch(setOrder())}>
        {order ? "ASC" : "DESC"}
      </Button>
    </Box>
  );
}

export default Filter;

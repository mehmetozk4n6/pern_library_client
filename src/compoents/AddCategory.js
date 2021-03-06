import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import { Input } from "@mui/material";
import { useDispatch } from "react-redux";
import { addCategory, getCategories } from "../redux/librarySlice";

function AddCategory() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setName("");
  };

  const handleClick = () => {
    setOpen(false);
    dispatch(addCategory(name)).then(() => dispatch(getCategories()));
    setName("");
  };

  return (
    <Box>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Category
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>You can add new unique category</DialogTitle>
        <DialogContent>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <Input
                placeholder="Category"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Button onClick={handleClick}>Add</Button>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default AddCategory;

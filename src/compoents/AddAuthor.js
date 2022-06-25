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
import {
  addAuthor,
  addCategory,
  getAuthors,
  getCategories,
} from "../redux/librarySlice";

function AddAuthor() {
  const [open, setOpen] = useState(false);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setFirst_name("");
    setLast_name("");
    setLocation("");
  };

  const handleClick = async () => {
    setOpen(false);
    dispatch(
      addAuthor({
        first_name,
        last_name,
        location,
      })
    ).then(() => dispatch(getAuthors()));
    setFirst_name("");
    setLast_name("");
    setLocation("");
  };

  return (
    <Box>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Author
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>You can add new unique author</DialogTitle>
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
                placeholder="First Name"
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <Input
                placeholder="Last Name"
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <Input
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </FormControl>

            <Button onClick={handleClick}>Add</Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default AddAuthor;

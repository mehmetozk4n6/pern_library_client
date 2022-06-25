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
import { addPublisher, getPublishers } from "../redux/librarySlice";

function AddPublisher() {
  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setCompany("");
    setDescription("");
  };

  const handleClick = () => {
    setOpen(false);
    dispatch(addPublisher({ company, description })).then(() =>
      dispatch(getPublishers())
    );
    setCompany("");
    setDescription("");
  };

  return (
    <Box>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Publisher
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>You can add new unique publisher</DialogTitle>
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
                placeholder="Publisher"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <Input
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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

export default AddPublisher;

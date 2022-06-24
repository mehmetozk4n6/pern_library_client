import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddNav from "./AddNav";
import Button from "@mui/material/Button";

function Add() {
  const [book, setBook] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");

  const handleSubmit = (event) => {
    console.log({
      book,
      category,
      author,
      publisher,
    });
  };

  return (
    <Box>
      <AddNav />
      <TextField
        id="standard-basic"
        label="Book"
        variant="standard"
        sx={{ width: "100%" }}
        value={book}
        onChange={(e) => setBook(e.target.value)}
      />
      <Box sx={{ minWidth: 120, marginTop: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120, marginTop: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Author</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={author}
            label="Author"
            onChange={(e) => setAuthor(e.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120, marginTop: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Publisher</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={publisher}
            label="Publisher"
            onChange={(e) => setPublisher(e.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <Button sx={{ minWidth: 120, marginTop: 3 }} onClick={handleSubmit}>
            Add a new book
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
}

export default Add;

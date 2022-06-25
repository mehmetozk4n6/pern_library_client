import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddNav from "./AddNav";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addBook,
  getBooks,
  getAuthors,
  getCategories,
  getPublishers,
  selectAuthors,
  selectCategories,
  selectPublishers,
  selectBooks,
} from "../redux/librarySlice";
import { useNavigate } from "react-router-dom";
import AddCategory from "./AddCategory";
import AddAuthor from "./AddAuthor";
import AddPublisher from "./AddPublisher";

function Add() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [title, setTıtle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [publisherId, setPublisherId] = useState("");
  const authors = useSelector(selectAuthors);
  const categories = useSelector(selectCategories);
  const publishers = useSelector(selectPublishers);
  const books = useSelector(selectBooks);

  useEffect(() => {
    if (!authors.length > 0) {
      dispatch(getAuthors());
      dispatch(getCategories());
      dispatch(getPublishers());
    }
  }, [dispatch]);

  const handleSubmit = () => {
    console.log({
      title,
      description,
      categoryId,
      publisherId,
      authorId,
    });
    dispatch(
      addBook({
        title,
        description,
        categoryId,
        publisherId,
        authorId,
      })
    ).then(() => dispatch(getBooks()));

    setTıtle("");
    setDescription("");
    setCategoryId("");
    setAuthorId("");
    setPublisherId("");
    dispatch(getBooks(1));
    navigate("/", { replace: true });
  };

  return (
    <Box>
      <AddNav />
      <TextField
        id="standard-basic"
        label="Book"
        variant="standard"
        sx={{ width: "100%" }}
        value={title}
        onChange={(e) => setTıtle(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="Description"
        variant="standard"
        sx={{ width: "100%" }}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Box sx={{ minWidth: 120, marginTop: 3, display: "flex" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categoryId}
            label="Category"
            onChange={(e) => setCategoryId(e.target.value)}
          >
            {categories?.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <AddCategory />
      </Box>
      <Box sx={{ minWidth: 120, marginTop: 3, display: "flex" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Author</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={authorId}
            label="Author"
            onChange={(e) => setAuthorId(e.target.value)}
          >
            {authors?.map((author) => (
              <MenuItem key={author.id} value={author.id}>
                {`${author.first_name} ${author.last_name}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <AddAuthor />
      </Box>
      <Box sx={{ minWidth: 120, marginTop: 3, display: "flex" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Publisher</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={publisherId}
            label="Publisher"
            onChange={(e) => setPublisherId(e.target.value)}
          >
            {publishers?.map((publisher) => (
              <MenuItem key={publisher.id} value={publisher.id}>
                {publisher.company}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <AddPublisher />
      </Box>
      <Button
        sx={{ minWidth: 120, marginTop: 3, float: "right" }}
        onClick={handleSubmit}
      >
        Add a new book
      </Button>
    </Box>
  );
}

export default Add;

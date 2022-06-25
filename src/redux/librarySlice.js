import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooks = createAsyncThunk("library/getBooks", async (page) => {
  const res = await axios(`http://localhost:5000/books?page=${page}`);
  return res.data.data;
});
export const getAuthors = createAsyncThunk("library/getAuthors", async () => {
  const res = await axios(`http://localhost:5000/authors`);
  return res.data.data;
});
export const getCategories = createAsyncThunk(
  "library/getCategories",
  async () => {
    const res = await axios(`http://localhost:5000/categories`);
    return res.data.data;
  }
);
export const getPublishers = createAsyncThunk(
  "library/getPublishers",
  async () => {
    const res = await axios(`http://localhost:5000/publishers`);
    return res.data.data;
  }
);

export const librarySlice = createSlice({
  name: "library",
  initialState: {
    books: [],
    authors: [],
    categories: [],
    publishers: [],
    status: "idle",
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.status = "loading";
    },
    [getBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
      state.status = "succeeded";
    },
    [getBooks.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [getAuthors.fulfilled]: (state, action) => {
      state.authors = action.payload;
      state.status = "succeeded";
    },
    [getAuthors.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
      state.status = "succeeded";
    },
    [getCategories.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [getPublishers.fulfilled]: (state, action) => {
      state.publishers = action.payload;
      state.status = "succeeded";
    },
    [getPublishers.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const selectBooks = (state) => state.library.books;
export const selectAuthors = (state) => state.library.authors;
export const selectCategories = (state) => state.library.categories;
export const selectPublishers = (state) => state.library.publishers;
export const selectStatus = (state) => state.library.status;
export const selectError = (state) => state.library.error;

// export const {} = librarySlice.actions;

export default librarySlice.reducer;

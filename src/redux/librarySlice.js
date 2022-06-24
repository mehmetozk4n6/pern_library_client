import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooks = createAsyncThunk("library/getBooks", async () => {
  const res = await axios(`http://localhost:5000/books`);
  return res.data.data.books;
});

export const librarySlice = createSlice({
  name: "library",
  initialState: {
    books: [],

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
  },
});

export const selectBooks = (state) => state.library.books;

export const {} = librarySlice.actions;

export default librarySlice.reducer;

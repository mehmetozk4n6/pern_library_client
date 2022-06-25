import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooks = createAsyncThunk(
  "library/getBooks",
  async ({ page, searchText, order }) => {
    let filterOrder = order ? "DESC" : "ASC";
    const res = await axios(
      `http://localhost:5000/books?page=${page}&searchtext=${searchText}&order=${filterOrder}`
    );
    return res.data.data;
  }
);
export const getAuthors = createAsyncThunk("library/getAuthors", async () => {
  const res = await axios(`http://localhost:5000/authors`);
  return res.data.data.authors;
});
export const getCategories = createAsyncThunk(
  "library/getCategories",
  async () => {
    const res = await axios(`http://localhost:5000/categories`);
    return res.data.data.categories;
  }
);
export const getPublishers = createAsyncThunk(
  "library/getPublishers",
  async () => {
    const res = await axios(`http://localhost:5000/publishers`);
    return res.data.data.publishers;
  }
);
export const addBook = createAsyncThunk(
  "library/addBook",
  async ({ title, description, categoryId, publisherId, authorId }) => {
    const res = await axios({
      method: "post",
      url: "http://localhost:5000/books",
      data: {
        title: title === "" ? undefined : title,
        description: description === "" ? undefined : description,
        categoryId: categoryId === "" ? undefined : categoryId,
        publisherId: publisherId === "" ? undefined : publisherId,
        authorId: authorId === "" ? undefined : authorId,
      },
    });
    return res.data.data;
  }
);
export const addCategory = createAsyncThunk(
  "library/addCategory",
  async (name) => {
    const res = await axios({
      method: "post",
      url: "http://localhost:5000/categories",
      data: {
        name,
      },
    });
    return res.data.data;
  }
);
export const addPublisher = createAsyncThunk(
  "library/addAuthor",
  async ({ company, description }) => {
    const res = await axios({
      method: "post",
      url: "http://localhost:5000/publishers",
      data: { company, description },
    });
    return res.data.data;
  }
);
export const addAuthor = createAsyncThunk(
  "library/addAuthor",
  async ({ first_name, last_name, location }) => {
    const res = await axios({
      method: "post",
      url: "http://localhost:5000/authors",
      data: {
        first_name,
        last_name,
        location,
      },
    });

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
    searchText: "",
    order: false,
    status: "idle",
    error: "",
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setOrder: (state, action) => {
      state.order = !state.order;
    },
  },
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
export const selectSearchText = (state) => state.library.searchText;
export const selectOrder = (state) => state.library.order;

export const { setSearchText, setOrder } = librarySlice.actions;

export default librarySlice.reducer;

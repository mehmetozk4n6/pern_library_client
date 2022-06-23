import { configureStore } from "@reduxjs/toolkit";
import librarySlice from "./librarySlice";

export const store = configureStore({
  reducer: {
    library: librarySlice,
  },
});

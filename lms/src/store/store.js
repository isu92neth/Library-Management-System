import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./booksSlice";
import memberReducer from "./membersSlice";

export default configureStore({
  reducer: {
    books: bookReducer,
    members: memberReducer,
  },
});

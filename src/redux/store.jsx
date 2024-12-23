import { configureStore } from "@reduxjs/toolkit";
import { userSlice, projectSlice } from "@/redux/Slices/Slices";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    projects: projectSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

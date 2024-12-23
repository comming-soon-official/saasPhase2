import { createSlice } from "@reduxjs/toolkit";

const initialvalue = {
  isLogined: false,
  username: "",
  projectList: [],
};

const projectInitialValue = {
  image: [],
  text: [],
  object: [],
  structured: [],
  regression: [],
  totalProjects: 0,
};
export const projectSlice = createSlice({
  name: "projects",
  initialState: projectInitialValue,
  reducers: {
    imagePipeline: (state, action) => {
      state.image = action.payload;
    },
    textPipeline: (state, action) => {
      state.text = action.payload;
    },
    objectPipeline: (state, action) => {
      state.object = action.payload;
    },
    structuredPipeline: (state, action) => {
      state.structured = action.payload;
    },
    regressionPipeline: (state, action) => {
      state.regression = action.payload;
    },
    totalProjects: (state) => {
      const total =
        state.image.length +
        state.text.length +
        state.object.length +
        state.structured.length +
        state.regression.length;
      state.totalProjects = total;
    },
  },
});
export const userSlice = createSlice({
  name: "user",
  initialState: initialvalue,
  reducers: {
    isUserLogined: (state, action) => {
      state.isLogined = action.payload;
    },
    setCurrentUsername: (state, action) => {
      state.username = action.payload;
    },
    projectList: (state, action) => {
      state.projectList = action.payload;
    },
  },
});

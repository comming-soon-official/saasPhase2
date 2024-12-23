import { userSlice, projectSlice } from "./Slices";

export const { isUserLogined, setCurrentUsername, projectList } =
  userSlice.actions;

export const {
  imagePipeline,
  textPipeline,
  objectPipeline,
  structuredPipeline,
  regressionPipeline,
  totalProjects,
} = projectSlice.actions;

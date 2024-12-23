import create from "zustand";

const projectStore = create((set) => ({
  imageClasses: [],
  projects: {
    image: [],
    text: [],
    object: [],
    structured: [],
    regression: [],
    totalProjects: 0,
    setImage: (image) =>
      set((state) => ({ projects: { ...state.projects, image } })),
    setText: (text) =>
      set((state) => ({ projects: { ...state.projects, text } })),
    setObject: (object) =>
      set((state) => ({ projects: { ...state.projects, object } })),
    setStructured: (structured) =>
      set((state) => ({ projects: { ...state.projects, structured } })),
    setRegression: (regression) =>
      set((state) => ({ projects: { ...state.projects, regression } })),
    calculateTotalProjects: () =>
      set((state) => {
        const total =
          state.projects.image.length +
          state.projects.text.length +
          state.projects.object.length +
          state.projects.structured.length +
          state.projects.regression.length;
        return { projects: { ...state.projects, totalProjects: total } };
      }),
  },
  write: (obj) => {
    if (typeof obj === "function") {
      set((state) => obj(state));
    } else {
      set(obj);
    }
  },
}));

export default projectStore;

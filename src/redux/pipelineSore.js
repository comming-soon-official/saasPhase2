import { create } from "zustand";

const pipelineStore = create((set) => ({
  imageClasses: [
    { id: 1, name: "Class 1", images: [] },
    { id: 2, name: "Class 2", images: [] },
  ],
  modelFile: null,

  write: (obj) => {
    if (typeof obj === "function") {
      set((state) => obj(state));
    } else {
      set(obj);
    }
  },
}));

export default pipelineStore;

import create from "zustand";

const userStore = create((set) => ({
  user: {
    isLogined: false,
    username: "",
    projectList: [],
    setIsUserLogined: (isLogined) =>
      set((state) => ({ user: { ...state.user, isLogined } })),
    setCurrentUsername: (username) =>
      set((state) => ({ user: { ...state.user, username } })),
    setProjectList: (projectList) =>
      set((state) => ({ user: { ...state.user, projectList } })),
  },
  write: (obj) => {
    if (typeof obj === "function") {
      set((state) => obj(state));
    } else {
      set(obj);
    }
  },
}));

export default userStore;

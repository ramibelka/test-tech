// File: store.js
import { create } from "zustand";

const useStore = create((set) => ({
  data: [],
  users: [],
  currentUser: "",
  setData: (data) => set({ data }),
  setUsers: (users) => set({ users }),
  setCurrentUser: (currentUser) => set({ currentUser }),
}));

export default useStore;

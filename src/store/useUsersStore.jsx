import { create } from "zustand";

export const useUsersStore = create((set) => ({
  usersLoading: true,
  users: null,
  setUsersLoading: (usersLoading) => set({ usersLoading }),
  setUsers: (users) => set({ users }),
}));

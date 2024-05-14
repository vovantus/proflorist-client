import FloristInfoSlice from "../types/floristInfoSlice";
import CartSlice from "../types/cartSlice";
import { StateCreator } from "zustand";

export const createFloristInfoSlice: StateCreator<
  FloristInfoSlice & CartSlice,
  [],
  [],
  FloristInfoSlice
> = (set) => ({
  floristInfo: {},
  updateFloristInfo: (newFlorist) => set({ floristInfo: newFlorist }),
});

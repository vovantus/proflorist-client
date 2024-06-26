import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createCartSlice } from "./cartSlice";
import { createFloristInfoSlice } from "./floristInfoSlice";
import FloristInfoSlice from "../types/floristInfoSlice";
import CartSlice from "../types/cartSlice";

const useBoundStore = create<FloristInfoSlice & CartSlice>()(
  persist(
    (...a) => ({
      ...createCartSlice(...a),
      ...createFloristInfoSlice(...a),
    }),
    { name: "proflorist-store", version: 2 }
  )
);

export default useBoundStore;

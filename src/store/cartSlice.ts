import { StateCreator } from "zustand";
import FloristInfoSlice from "../types/floristInfoSlice";
import CartSlice from "../types/cartSlice";

export const createCartSlice: StateCreator<
  FloristInfoSlice & CartSlice,
  [],
  [],
  CartSlice
> = (set) => ({
  cartItems: {},
  cartTotalQuantity: 0,

  addItem: (id) =>
    set((state) => {
      const currentQuantity = state.cartItems[id];
      state.cartItems[id] = currentQuantity ? currentQuantity + 1 : 1;
      const quantity = Object.entries(state.cartItems).reduce(
        (qty, item) => (qty += item[1]),
        0
      );

      return { cartItems: state.cartItems, cartTotalQuantity: quantity };
    }),

  removeItem: (id) =>
    set((state) => {
      const currentQuantity = state.cartItems[id];
      if (currentQuantity) {
        if (currentQuantity > 1) {
          state.cartItems[id] -= 1;
        } else {
          delete state.cartItems[id];
        }
      }
      const quantity = Object.entries(state.cartItems).reduce(
        (qty, item) => (qty += item[1]),
        0
      );
      return { cartItems: state.cartItems, cartTotalQuantity: quantity };
    }),
});

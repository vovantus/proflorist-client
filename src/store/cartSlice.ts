import { StateCreator } from "zustand";
import FloristInfoSlice from "../types/floristInfoSlice";
import CartSlice from "../types/cartSlice";


export const createCartSlice: StateCreator<
  FloristInfoSlice & CartSlice,
  [],
  [],
  CartSlice
> = (set, get) => ({
  cartItems: {},

  cartTotalQuantity: () => {
    const cartTotal = Object.entries(get().cartItems).reduce((acc, item) => {
      return acc + item[1];
    }, 0);
    return cartTotal;
  },

  addItem: (id) =>
    set((state) => {
      const currentQuantity = state.cartItems[id];

      return {
        cartItems: {
          ...state.cartItems,
          [id]: currentQuantity ? currentQuantity + 1 : 1,
        },
      };
    }),

  removeItem: (id, all) =>
    set((state) => {
      const currentQuantity = state.cartItems[id];
      if (currentQuantity) {
        if (currentQuantity > 1) {
          if (all) {
            delete state.cartItems[id];
          } else {
            state.cartItems[id] -= 1;
          }
        } else {
          delete state.cartItems[id];
        }
      }

      return { cartItems: { ...state.cartItems } };
    }),
});

import { create } from "zustand";
import { persist } from "zustand/middleware";
import Bouquet from "../types/bouquet";

interface CartItem extends Pick<Bouquet, "id"> {
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  addItem: (id: Bouquet["id"]) => void;
  removeItem: (bouquet: Bouquet["id"]) => void;
  cartTotalQuantity: () => number;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],
      addItem: (id) =>
        set((state) => {
          const bouquetIndex = state.cartItems.findIndex(
            (cartBouquet) => id === cartBouquet.id
          );
          return bouquetIndex === -1
            ? {
                cartItems: [...state.cartItems, { id: id, quantity: 1 }],
              }
            : ((state.cartItems[bouquetIndex].quantity += 1),
              { cartBouquets: [...state.cartItems] });
        }),
      removeItem: (id) =>
        set((state) => {
          const bouquetIndex = state.cartItems.findIndex((b) => b.id === id);
          if (bouquetIndex === -1) return { cartBouquets: state.cartItems };
          const newQuantity = state.cartItems[bouquetIndex].quantity - 1;
          const newCartBouquets =
            newQuantity > 0
              ? ((state.cartItems[bouquetIndex].quantity = newQuantity),
                [...state.cartItems])
              : state.cartItems.filter((b) => b.id !== id);
          return { cartItems: newCartBouquets };
        }),
      cartTotalQuantity: () => {
        const items = get().cartItems;

        return items.reduce((qty, item) => (qty += item.quantity), 0);
      },
    }),
    {
      name: "proflorist-store",
    }
  )
);

export default useCartStore;

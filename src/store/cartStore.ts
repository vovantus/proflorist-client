import { create } from "zustand";
import { persist } from "zustand/middleware";
import Bouquet from "../types/bouquet";

//ASK: мне нужен метод подсчета суммы в корзине, куда его поместить лучше?
//ASK: в букете хранится много лишних полей, нужно ли их вырезать при добавлении в корзину?



interface CartBouquet extends Pick<Bouquet, "id"> {
  quantity: number;
}


interface CartState {
  cartBouquets: CartBouquet[];
  addBouquet: (id: Bouquet["id"]) => void;
  removeBouquet: (bouquet: Bouquet["id"]) => void;
  cartTotalQuantity: () => number;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartBouquets: [],
      addBouquet: (id) =>
        set((state) => {
          const bouquetIndex = state.cartBouquets.findIndex(
            (cartBouquet) => id === cartBouquet.id
          );
          return bouquetIndex === -1
            ? {
                cartBouquets: [...state.cartBouquets, { id: id, quantity: 1 }],
              }
            : ((state.cartBouquets[bouquetIndex].quantity += 1),
              { cartBouquets: [...state.cartBouquets] });
        }),
      removeBouquet: (id) =>
        set((state) => {
          const bouquetIndex = state.cartBouquets.findIndex((b) => b.id === id);
          if (bouquetIndex === -1) return { cartBouquets: state.cartBouquets };
          const newQuantity = state.cartBouquets[bouquetIndex].quantity - 1;
          const newCartBouquets =
            newQuantity > 0
              ? ((state.cartBouquets[bouquetIndex].quantity = newQuantity),
                [...state.cartBouquets])
              : state.cartBouquets.filter((b) => b.id !== id);
          return { cartBouquets: newCartBouquets };
        }),
      cartTotalQuantity: () => {
        const items = get().cartBouquets;

        return items.reduce((qty, item) => (qty += item.quantity), 0);
      },
    }),
    {
      name: "proflorist-store",
    }
  )
);

export default useCartStore;

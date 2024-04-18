import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Bouquet } from "../types/bouquet";

//ASK: мне нужен метод подсчета суммы в корзине, куда его поместить лучше?
//ASK: в букете хранится много лишних полей, нужно ли их вырезать при добавлении в корзину?
//ASK файл назвать с большой буквы?
//ASK/TO-Do имя стора для локал сторадж менять в зависимости от имени влориста

interface CartBouquet extends Bouquet {
  quantity: number;
}

interface CartState {
  cartBouquets: CartBouquet[];
  addBouquet: (bouquet: Bouquet) => void;
  removeBouquet: (bouquet: Bouquet) => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartBouquets: [],
      addBouquet: (bouquet) =>
        set((state) => {
          const bouquetIndex = state.cartBouquets.findIndex(
            (cartBouquet) => bouquet.id === cartBouquet.id
          );
          return bouquetIndex === -1
            ? {
                cartBouquets: [
                  ...state.cartBouquets,
                  { ...bouquet, quantity: 1 },
                ],
              }
            : ((state.cartBouquets[bouquetIndex].quantity += 1),
              { cartBouquets: [...state.cartBouquets] });
        }),
      removeBouquet: (bouquet) =>
        set((state) => {
          const bouquetIndex = state.cartBouquets.findIndex(
            (b) => b.id === bouquet.id
          );
          if (bouquetIndex === -1) return { cartBouquets: state.cartBouquets };
          const newQuantity = state.cartBouquets[bouquetIndex].quantity - 1;
          const newCartBouquets =
            newQuantity > 0
              ? ((state.cartBouquets[bouquetIndex].quantity = newQuantity),
                [...state.cartBouquets])
              : state.cartBouquets.filter((_, i) => i !== bouquetIndex);
          return { cartBouquets: newCartBouquets };
        }),
    }),
    {
      name: "proflorist-store",
    }
  )
);

export default useCartStore;

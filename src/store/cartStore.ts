import { create } from "zustand";
import { persist } from "zustand/middleware";
import Bouquet from "../types/bouquet";

//ASk 
// 1)а если мне нужен массив в cartItems как избежать ре-рендера списка cartItems если я меняю один элемент
// 2)если я поменял тип переменной в сторе(ли структуру хранилища) как сделать миграцию для тех юзеров которые пользовалис предыдущей версией и у них лежит что-то в локал сторидже
// 3) часто ли используют Map и Set в сторах, я попыталя переделать CartItems на Map и получил только проблемы)

interface CartItems {
  [key: Bouquet["id"]]: number;
}

interface CartState {
  cartItems: CartItems;
  addItem: (id: Bouquet["id"]) => void;
  removeItem: (bouquet: Bouquet["id"]) => void;
  cartTotalQuantity: () => number;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: {},
      addItem: (id) =>
        set((state) => {
          const currentQuantity = state.cartItems[id];
          state.cartItems[id] = currentQuantity ? currentQuantity + 1 : 1;
          return { cartItems: state.cartItems };
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
          return { cartItems: state.cartItems };
        }),

      cartTotalQuantity: () => {
        const items = get().cartItems;
        return Object.entries(items).reduce((qty, item) => (qty += item[1]), 0);
      },
    }),
    {
      name: "proflorist-store",
    }
  )
);

export default useCartStore;

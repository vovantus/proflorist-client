import CartItems from "./cartItems";
import Bouquet from "./bouquet";

export default interface CartSlice {
  cartItems: CartItems;
  addItem: (id: Bouquet["id"]) => void;
  removeItem: (bouquet: Bouquet["id"]) => void;
  cartTotalQuantity: number;
}

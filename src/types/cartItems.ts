import Bouquet from "./bouquet";

export default interface CartItems {
  [key: Bouquet["id"]]: number;
}

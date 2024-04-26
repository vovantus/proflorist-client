import Bouquet from "./bouquet";
export default interface Category {
  name: string;
  description?: string;
  active: boolean;
  id: string;
  bouquets: Bouquet["id"][];
}

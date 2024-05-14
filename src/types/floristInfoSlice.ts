import FloristInfo from "./floristInfo";

export default interface FloristInfoSlice {
  floristInfo: FloristInfo | Record<string, never>;
  updateFloristInfo: (newFlorist: FloristInfo) => void;
}

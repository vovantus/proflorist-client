import { create } from "zustand";
import { persist } from "zustand/middleware";
import FloristInfo from "../types/floristInfo";

interface FloristInfoState {
  floristInfo: FloristInfo | Record<string, never>;
  updateFloristInfo: (newFlorist: FloristInfo) => void;
}

const useFloristInfoStore = create<FloristInfoState>()(
  persist(
    (set) => ({
      floristInfo: {},
      updateFloristInfo: (newFlorist) => set({ floristInfo: newFlorist }),
    }),
    {
      name: "proflorist-store",
    }
  )
);

export default useFloristInfoStore;

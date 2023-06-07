import { create } from "zustand";

const useRegisterInfo = create((set) => ({
  inputs: [],
  setInputs: (array) => set({ inputs: array }),
  reset: () => set({ inputs: [] }),
}));

export default useRegisterInfo;

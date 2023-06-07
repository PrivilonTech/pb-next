import { create } from "zustand";

const useRegisterInfo = create((set) => ({
  inputs: {},
  setInputs: (object) => set({ inputs: object }),
  reset: () => set({ inputs: {} }),
}));

export default useRegisterInfo;

import { create } from "zustand";

export const useStore = create((set) => ({
  lang: "ENG",
  changeLangEsp: () => set({ lang: "ESP" }),
  changeLangEng: () => set({ lang: "ENG" }),
}));

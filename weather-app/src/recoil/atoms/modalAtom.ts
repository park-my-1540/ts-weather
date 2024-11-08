import { atom } from "recoil";

export const modalState = atom<{
  isOpen: boolean;
  message: string;
}>({
  key: "modalState",
  default: {
    isOpen: false,
    message: "",
  },
});

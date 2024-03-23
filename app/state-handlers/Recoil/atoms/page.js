// "use client"
import { atom } from "recoil";

export const pageState = atom({
    key: "pageState", // unique ID (with respect to other atoms/selectors)
    default: "About Me", // default value (aka initial value)
  });
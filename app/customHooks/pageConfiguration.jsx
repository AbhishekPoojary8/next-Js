import { useCallback, useMemo } from "react";

export const PageConfigutaion = (name) => {
  const primaryColor = useMemo(() => {
    switch (name) {
      case "About Me":
        return "bg-customGreen";
      case "Resume":
        return "bg-customBlue";
      default:
        return null;
    }
  });
  console.log(primaryColor, "Inside useMemo");
  return {
    primaryColor,
  };
};

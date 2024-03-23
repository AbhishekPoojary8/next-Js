"use client";
import Button from "@mui/material/Button";
// import { useEffect } from "react";

const LibButton = (props) => {
  return (
    <>
      <Button {...props} className={props.className} onClick={props.onClick}>
        {props.children}
      </Button>
    </>
  );
};
export default LibButton;

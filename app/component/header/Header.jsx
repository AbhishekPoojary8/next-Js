"use client";
import { AppBar } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import RightMenu from "@/app/component/menuBar/RightMenu";
import { useRecoilState } from "recoil";
import pagePrimaryColor from "../../state-handlers/Recoil/selectors/pageState";
import { pageState } from "../../state-handlers/Recoil/atoms/pageState";
// import pageState from "../../state-handlers/Recoil/atoms/page";
import { targetPage } from "../../utils/page_handlers/currentPage";
import { useCallback, useEffect, useMemo } from "react";
import { PageConfigutaion } from "../../customHooks/pageConfiguration";
export default function Header() {
  const [name, setName] = useRecoilState(pageState);

  let PrimaryColor = PageConfigutaion(name).primaryColor;

  function nameIcon() {
    return (
      <div className="flex ml-6" style={{ color: "inherit" }}>
        <div
          className={`flex items-center justify-center  
        h-12 w-12 rounded-full ${PrimaryColor}`}
        >
          <span className="text-white font-bold text-2xl">A</span>
        </div>
        <div
          className="flex font-sans items-center justify-center text-xl text-current"
          style={{ color: "inherit" }}
        >
          <span className="mx-2 text-current" style={{ color: "inherit" }}>
            <b>Abhishek</b>
          </span>
          <span>Poojary</span>
        </div>
      </div>
    );
  }
  return (
    <>
      <Box style={{ flexGrow: 1 }} className="text-black mt-6">
        <AppBar
          position="static"
          style={{ color: "#222", boxShadow: "none", backgroundColor: "white" }}
        >
          <Toolbar style={{ backgroundColor: "inherit" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, color: "inherit" }}
            >
              {nameIcon()}
            </IconButton>
            <RightMenu setName={setName} name={name} />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

"use client";
import React, { useEffect, useMemo } from "react";
import { Grid, Item, Box, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { pageState } from "../../state-handlers/Recoil/atoms/page";
import { useRecoilState } from "recoil";
import { PageConfigutaion } from "../../customHooks/pageConfiguration";

const WhatIDo = ({ children, contentHeader, progressBarWidth }) => {
  const [name] = useRecoilState(pageState);

  let PrimaryColor = PageConfigutaion(name).primaryColor;
  console.log(PrimaryColor, "PrimaryColor check");
  var color = useMemo(() => {
    var prColor;
    if (PrimaryColor === "bg-customGreen") prColor = "#54ca95";
    else prColor = "#2fa1f4";
    console.log(prColor, "The color");
    return prColor;
  }, [PrimaryColor]);

  console.log(color, "Check the total color");

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 4,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
      width: progressBarWidth?.overLayWidth,
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? color : "#308fe8",
      width: progressBarWidth?.colorPalletWidth,
    },
  }));
  return (
    <>
      <Grid container className="pt-[4%] pr-[4%] pl-[4%]">
        <Grid item xs={12}>
          <Typography className="text-black text-xl font-semibold	">
            {contentHeader}
            <BorderLinearProgress variant="determinate" value={60} />
          </Typography>
        </Grid>
        {children()}
      </Grid>
    </>
  );
};
export default WhatIDo;

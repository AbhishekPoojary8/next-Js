"use client";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import { styled } from "@mui/material/styles";
const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

export const CustomSpeedDial = () => {
  const actions = [
    { icon: <InstagramIcon sx={{ color: "#E4405F" }} />, name: "Instagram" },
    { icon: <LinkedInIcon sx={{ color: "#0A66C2" }} />, name: "LinkedIn" },
    { icon: <FacebookIcon sx={{ color: "#0A66C2" }} />, name: "FaceBook" },
    { icon: <XIcon sx={{ color: "black" }} />, name: "X" },
  ];

  return (
    <StyledSpeedDial
      ariaLabel="SpeedDial playground example"
      sx={{
        position: "fixed",
        "& .MuiSpeedDial-actions": {
          flexDirection: "column", // Example background color
          // Add more styles as needed
        },
      }}
      // hidden={hidden}
      icon={
        <div className="bg-customGreen w-full h-full flex justify-center items-center rounded-full">
          <SpeedDialIcon className="bg-customGreen" />
        </div>
      }
      direction={"left"}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </StyledSpeedDial>
  );
};

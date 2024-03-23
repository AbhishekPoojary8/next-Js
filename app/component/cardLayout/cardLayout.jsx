import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "next/image";

const CardLayout = ({ IndFunFact }) => {
  return (
    <Card
      sx={{
        minWidth: 100,
        // width: 280,
        height: 220,
        marginTop: "20px",
        marginRight: "40px",
        paddingBottom: "20px",
        boxShadow:
          " rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;",
      }}
      className="hover:shadow-complex transition duration-300"
    >
      <CardContent className="text-center">
        <Typography variant="h5" component="div">
          <IndFunFact.icon className="text-customGreen h-10 text-8xl" />
        </Typography>
        <Typography
          className="font-semibold text-slate-700 mt-4 mb-2"
          sx={{ fontSize: "21px" }}
        >
          {IndFunFact.header}
        </Typography>
        <Typography className="text-slate-700 text-base italic" variant="body2">
          {`"${IndFunFact.content}"`}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CardLayout;

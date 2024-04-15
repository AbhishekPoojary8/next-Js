import { Box, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import Autism from "../../assest/Projects/Autism.jpg";
import PageTitle from "../../component/title/index";
import Visa from "../../assest/Projects/Visa.jpg";
import LearningApp from "../../assest/Projects/LearningApp.jpg";

const Porjects = () => {
  return (
    <>
      <PageTitle pageTitle={"Projects"} sideContent={""} />

      <Grid
        container
        className="flex justify-center pt-[4%] pl-4 pr-4"
        columnGap={8}
      >
        <Grid item sm={4} lg={3} md={3}>
          <Image
            className="rounded-3xl"
            src={Autism}
            layout="responsive"
            objectFit="cover"
            quality={100}
            height={200}
            alt={""}
          />

          <div className="flex justify-between relative" style={{}}>
            <Box>
              <Typography className="font-semibold ml-2 mt-2" variant="h5">
                Health Care Sector
              </Typography>
            </Box>
            <div
              className="relative"
              style={{
                background: "white",
                borderRadius: "88%",
                height: "90px",
                width: "90px",
                textAlign: "end",
                bottom: "78px",
              }}
            >
              <div
                className="flex justify-center items-center hover:rotate-45 transition duration-300"
                style={{
                  background: "rgb(44, 42, 41)",
                  height: "85%",
                  borderRadius: "50%",
                  color: "white",
                  width: "84%",
                  marginTop: "5px",
                  marginLeft: "7px",
                  textAlign: "center",
                }}
              >
                <ArrowForwardIcon style={{ fontSize: "36px" }} />
              </div>
            </div>
          </div>
        </Grid>

        <Grid item md={3} sm={4} lg={3}>
          <Image
            className="rounded-3xl"
            src={Visa}
            layout="responsive"
            objectFit="cover"
            quality={100}
            height={200}
            alt={""}
          />

          <div className="flex justify-between relative" style={{}}>
            <Box>
              <Typography className="font-semibold ml-2 mt-2" variant="h5">
                US Exchange Visitor
              </Typography>
            </Box>
            <div
              className="relative"
              style={{
                background: "white",
                borderRadius: "88%",
                height: "90px",
                width: "90px",
                textAlign: "end",
                bottom: "78px",
              }}
            >
              <div
                className="flex justify-center items-center hover:rotate-45 transition duration-300"
                style={{
                  background: "rgb(44, 42, 41)",
                  height: "85%",
                  borderRadius: "50%",
                  color: "white",
                  width: "84%",
                  marginTop: "5px",
                  marginLeft: "7px",
                  textAlign: "center",
                }}
              >
                <ArrowForwardIcon style={{ fontSize: "36px" }} />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={3} sm={4} lg={3}>
          <Image
            className="rounded-3xl"
            src={LearningApp}
            layout="responsive"
            objectFit="cover"
            quality={100}
            height={200}
            alt={""}
          />

          <div className="flex justify-between relative" style={{}}>
            <Box>
              <Typography className="font-semibold ml-2 mt-2" variant="h5">
                Learning App
              </Typography>
            </Box>
            <div
              className="relative"
              style={{
                background: "white",
                borderRadius: "88%",
                height: "90px",
                width: "90px",
                textAlign: "end",
                bottom: "78px",
              }}
            >
              <div
                className="flex justify-center items-center hover:rotate-45 transition duration-300"
                style={{
                  background: "rgb(44, 42, 41)",
                  height: "85%",
                  borderRadius: "50%",
                  color: "white",
                  width: "84%",
                  marginTop: "5px",
                  marginLeft: "7px",
                  textAlign: "center",
                }}
              >
                <ArrowForwardIcon style={{ fontSize: "36px" }} />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default Porjects;

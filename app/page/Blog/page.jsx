"use client";
import { Grid, Box, Typography } from "@mui/material";
import PageTitle from "../../component/title/index";
import ReactBlog from "../../assest/Blog/ReactBlog.jpg";
import Mysql from "../../assest/Blog/Mysql.jpg";
import NodeJs from "../../assest/Blog/NodeJs.jpg";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Blog = () => {
  let router = useRouter();
  return (
    <>
      <PageTitle pageTitle={"Blogs"} sideContent={""} />

      <Grid
        container
        className="flex justify-center pt-[4%] pl-4 pr-4"
        columnGap={8}
      >
        <Grid item sm={4} lg={3} md={3}>
          <Image
            className="rounded-3xl animate-slide"
            src={ReactBlog}
            layout="responsive"
            objectFit="cover"
            quality={100}
            height={200}
            alt={""}
            onClick={() => {
              router.push("/page/Blog/1");
            }}
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
                className="flex justify-center items-center "
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
                <ArrowForwardIcon
                  className=" hover:rotate-45 transition duration-300"
                  style={{ fontSize: "36px" }}
                />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item sm={4} lg={3} md={3}>
          <Image
            className="rounded-3xl"
            src={Mysql}
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
                className="flex justify-center items-center "
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
                <ArrowForwardIcon
                  className=" hover:rotate-45 transition duration-300"
                  style={{ fontSize: "36px" }}
                />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item sm={4} lg={3} md={3}>
          <Image
            className="rounded-3xl"
            src={NodeJs}
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
                className="flex justify-center items-center"
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
                <ArrowForwardIcon
                  className=" hover:rotate-45 transition duration-300"
                  style={{ fontSize: "36px" }}
                />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item sm={4} lg={3} md={3}>
          <Image
            className="rounded-3xl"
            src={ReactBlog}
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
                className="flex justify-center items-center"
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
                <ArrowForwardIcon
                  className=" hover:rotate-45 transition duration-300"
                  style={{ fontSize: "36px" }}
                />
              </div>
            </div>
          </div>
        </Grid>

        <Grid item md={3} sm={4} lg={3}>
          <Image
            className="rounded-3xl w-full h-auto transition-transform duration-300 transform hover:scale-110"
            src={NodeJs}
            layout="responsive"
            objectFit="cover"
            quality={100}
            // height={200}
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
                className="flex justify-center items-center "
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
                <ArrowForwardIcon
                  className=" hover:rotate-45 transition duration-300"
                  style={{ fontSize: "36px" }}
                />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={3} sm={4} lg={3}>
          <Image
            className="rounded-3xl"
            src={ReactBlog}
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
                className="flex justify-center items-center "
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
                <ArrowForwardIcon
                  className=" hover:rotate-45 transition duration-300"
                  style={{ fontSize: "36px" }}
                />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default Blog;

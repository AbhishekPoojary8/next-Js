import { Grid, Box, Typography } from "@mui/material";
import PageTitle from "../../component/title/index";
import ReactBlog from "../../assest/Blog/ReactBlog.jpg";
import NodeJs from "../../assest/Blog/NodeJs.jpg";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import Image from "next/image";

const Blog = () => {
  return (
    <>
      <PageTitle className="mt-10" pageTitle={"Blogs"} sideContent={""} />
      <Grid container className="mt-12  p-10 flex justify-center" rowGap={8}>
        <Grid item md={6}>
          <Box className="flex justify-center img-hover-zoom">
            <Image
              src={ReactBlog}
              className="object-cover rounded-xl h-full 	blogImage"
              alt="Picture of the author"
              fill={false}
              width={560}
              height={40}
            />
          </Box>
          <Box className=" mt-2  text-center ">
            <Typography className="font-semibold text-lg		">
              A Complete Tour on React Js, Set-up and working of Hooks
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box
            // style={{ height: "150%" }}
            className="flex justify-center img-hover-zoom"
          >
            <Image
              src={NodeJs}
              className="object-cover rounded-xl h-full 	blogImage	 "
              alt="Picture of the author"
              fill={false}
              width={560}
              height={40}
            />
          </Box>
          <Box className=" mt-2  text-center ">
            <Typography className="font-semibold text-lg		">
              Exploring Power of Node.js: Building Scalable Web Applications
            </Typography>
          </Box>
        </Grid>

        <Grid item md={6}>
          <Box
            // style={{ height: "150%" }}
            className="flex justify-center img-hover-zoom"
          >
            <Image
              src={NodeJs}
              className="object-cover rounded-xl h-full 	blogImage	 "
              alt="Picture of the author"
              fill={false}
              width={560}
              height={40}
            />
          </Box>
          <Box className=" mt-2  text-center ">
            <Typography className="font-semibold text-lg		">
              Exploring Power of Node.js: Building Scalable Web Applications
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box
            // style={{ height: "150%" }}
            className="flex justify-center img-hover-zoom"
          >
            <Image
              src={NodeJs}
              className="object-cover rounded-xl h-full 	blogImage	 "
              alt="Picture of the author"
              fill={false}
              width={560}
              height={40}
            />
          </Box>
          <Box className=" mt-2  text-center ">
            <Typography className="font-semibold text-lg		">
              Exploring Power of Node.js: Building Scalable Web Applications
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Blog;

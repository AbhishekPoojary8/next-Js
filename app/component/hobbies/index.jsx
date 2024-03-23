import { Grid } from "@mui/material";
import WhatIDo from "../../page/aboutMe/whatIDo";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tilt from "react-parallax-tilt";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReadingBooks from "../../assest/Technology/ReadingBooks.jpg";
import trekking from "../../assest/Technology/trekking.jpg";
import { useState, useEffect } from "react";

const Hobbies = () => {
  const sliderImageUrl = [
    {
      url: ReadingBooks,
    },
    {
      url: trekking,
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 300 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  let texts = [
    {
      title: "Reading Books",
      content:
        " Engaging in the enriching activity of reading books fuels my mind, expands my horizons, and nourishes my soul.",
      quotes:
        "There is more treasure in books than in all the pirate's loot on Treasure Island. - Walt Disney",
    },
    {
      title: "Trekking",
      content:
        " Engaging in the enriching activity of reading books fuels my mind, expands my horizons, and nourishes my soul.",
      quotes:
        "There is more treasure in books than in all the pirate's loot on Treasure Island. - Walt Disney",
    },
  ];
  const [index, setIndex] = useState(0); // Current index of the text to display
  const [opacity, setOpacity] = useState(1); // Opacity of the text

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0); // Fade out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to the next text
        setOpacity(1); // Fade in
      }, 500); // Wait for the fade out transition to complete (adjust as needed)
    }, 3000); // Interval for transitioning to the next text

    return () => clearInterval(interval); // Clean up on component unmount
  }, [texts]);

  const handleSlideChange = (currentItem) => {
    console.log(currentItem, "currentItem");
  };

  return (
    <Grid container>
      <WhatIDo
        contentHeader={"Hobbies"}
        progressBarWidth={{
          colorPalletWidth: "80px",
          overLayWidth: "100px",
        }}
      >
        {() => (
          <Grid container spacing={4}>
            <Grid item xs={12} md={6.5} xl={6} className="mt-6">
              <div className="parent" style={{ borderRadius: "42px" }}>
                <Carousel
                  autoPlay={true}
                  responsive={responsive}
                  transitionDuration={500}
                  ssr
                  // swipeable={true}
                  // draggable={true}
                  // showDots={true}
                  infinite={true}
                  dotListClass="custom-dot-list-style"
                  draggable={false}
                  swipeable={false}
                  arrows={false}
                  showDots={false}
                  onChange={handleSlideChange}
                  beforeChange={(nextSlide, current) => {
                    setOpacity(0); // Fade out
                    setTimeout(() => {
                      setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to the next text
                      setOpacity(1); // Fade in
                    }, 500);
                  }}
                >
                  {sliderImageUrl.map((imageUrl, index) => (
                    <div key={index} className="rounded">
                      <Image
                        width={800}
                        height={400}
                        object-fit="contain"
                        src={imageUrl.url}
                        alt={`Slider ${index}`}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={5.5}
              style={{ position: "relative", right: "50px" }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100%"
              >
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                  <Card
                    variant="outlined"
                    sx={{
                      width: "100%",
                      boxShadow:
                        "0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                    }}
                  >
                    <CardContent className="  font-bold font-medium  text-lg px-6">
                      <Typography
                        className="text-3xl	font-sans font-bold text-center pb-4 pt-2	"
                        style={{ opacity, transition: "opacity 2s ease" }}
                      >
                        {texts[index].title}
                      </Typography>
                      <Typography
                        component="div"
                        className="font-bold mb-2 "
                        style={{ opacity, transition: "opacity 2s ease" }}
                      >
                        {" "}
                        {texts[index].content}
                      </Typography>
                      <Typography
                        component="div"
                        className="font-bold italic"
                        style={{ opacity, transition: "opacity 2s ease" }}
                      >
                        {" "}
                        "{texts[index].quotes}"
                      </Typography>
                    </CardContent>
                  </Card>
                </Tilt>
              </Box>
            </Grid>
          </Grid>
        )}
      </WhatIDo>
    </Grid>
  );
};

export default Hobbies;

"use client";
import { Grid, Item, Box, Typography } from "@mui/material";
import { useEffect } from "react";
import aboutMeContent from "@/app/content/aboutMeContent";
import { Typewriter } from "react-simple-typewriter";
import React from "react";
import Image from "next/image";
import myImage from "@/app/assest/aboutMe/myImage.jpg";
import libComponent from "../../component/lib/index";
import ContainerLayout from "../../component/layout/containerLayout";
import WhatIDo from "./whatIDo";
import CarouselLayout from "../../component/carousel/carousel";
import CardLayout from "../../component/cardLayout/cardLayout";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { CustomSpeedDial } from "../../component/speedDail/SppedDail";
import { styled } from "@mui/material/styles";

const AboutMe = () => {
  let { aboutMePageContent, aboutMeLayout, SliderImages, FunFactsAboutMe } =
    aboutMeContent;
  let { LibButton } = libComponent;
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 4,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
      width: 180,
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#54ca95" : "#308fe8",
      width: 300,
    },
  }));

  function handleClick() {
    console.log("Clicked me!");
  }

  return (
    <Grid container spacing={0} className="pt-[8%] pr-[2%] pl-[4%]">
      <Grid className="flex justify-center h-full " item md={5} sm={12}>
        <div
          className="flex items-center justify-center  
      rounded-full  h-full "
          style={{
            height: "20rem",
            width: "20rem",
            boxShadow: "0 0 25px 0 rgba(0,0,0,.1)",
            border: "24px solid white",
          }}
        >
          <Image
            src={myImage}
            layout="responsive"
            className="object-cover w-full h-full rounded-full transform transition-transform duration-300 ease-in hover:translate-y-1"
            alt="Picture of the author"
          />
        </div>
      </Grid>
      <Grid item md={6} sm={12}>
        <Box className="mt-12">
          <Typography className="h-10 text-base text-stone-400 font-light">
            <Typewriter
              loop={Infinity}
              words={aboutMePageContent.skillSet}
              cursor
              cursorStyle=""
              typeSpeed={200}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </Typography>
        </Box>
        <Box className="mb-6">
          <Typography className="h-10  font-semibold text-5xl font-serif cursor-pointer">
            Abhishek Poojary
          </Typography>
        </Box>
        <Box>
          <Typography className="text-1xl text-greyPallet leading-8">
            {aboutMePageContent.aboutMe}
          </Typography>
        </Box>
        <Box className="my-6">
          <LibButton className="text-black border-green-500  border-2 px-6 border-solid  rounded-3xl hover:bg-customGreen hover:text-white">
            Download CV{" "}
          </LibButton>
          <LibButton className="text-black border-grey-500 mx-6 border-2 px-6 border-solid  rounded-3xl hover:bg-slate-300">
            Contact{" "}
          </LibButton>
        </Box>
      </Grid>
      <CustomSpeedDial />
      <WhatIDo
        contentHeader={"What I do"}
        progressBarWidth={{ colorPalletWidth: "90px", overLayWidth: "80px" }}
      >
        {(data) => {
          return (
            <>
              <ContainerLayout content={aboutMeLayout} />
            </>
          );
        }}
      </WhatIDo>

      <Grid container className="pt-[4%] pr-[4%] pl-[4%] justify-between">
        <Grid item xs={12} className="mb-4">
          <Typography className="text-black text-xl font-semibold	">
            Technology and Expertise
            <BorderLinearProgress variant="determinate" value={60} />
          </Typography>
        </Grid>
        <CarouselLayout
          autoPlay={true}
          autoPlaySpeed={80000}
          swipeable={true}
          centerMode={false}
          draggable={true}
          showDots={true}
          infinite={true}
          ssr
          customTransition={"transform 1000ms ease-in-out"}
          slidesToSlide={10}
          arrows={false}
          partialVisible={false}
          deviceType={"mobile"}
          dotListClass="custom-dot-list-style"
          SliderImages={SliderImages}
        />
      </Grid>
      <WhatIDo
        contentHeader={"Fun Fact"}
        progressBarWidth={{ colorPalletWidth: "80px", overLayWidth: "90px" }}
      >
        {() => (
          <>
            <Grid container spacing={4}>
              {FunFactsAboutMe.map((IndFunFact) => (
                <Grid key={IndFunFact} item xs={12} sm={6} lg={3}>
                  <CardLayout IndFunFact={IndFunFact} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </WhatIDo>
    </Grid>
  );
};

export default AboutMe;

// "use client";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import MaximizeIcon from "@mui/icons-material/Maximize";
// import Image from "next/image";

// const CarouselLayout = (props) => {
//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//       slidesToSlide: 3, // optional, default to 1.
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//       slidesToSlide: 2, // optional, default to 1.
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       slidesToSlide: 1, // optional, default to 1.
//     },
//   };
//   const sliderImageUrl = props.SliderImages;

//   const CustomDot = ({ onMove, index, onClick, active }) => {
//     return (
//       <li className={active ? "active" : "inactive"}>
//         <MaximizeIcon
//           style={active ? { color: "#54ca95" } : { color: "grey" }}
//           onClick={() => onClick()}
//         />
//       </li>
//     );
//   };

//   return (
//     <>
//       <Carousel responsive={responsive} {...props} customDot={<CustomDot />}>
//         {sliderImageUrl.map((imageUrl, index) => {
//           return (
//             <div
//               className="slider"
//               key={index}
//               style={{
//                 margin: "0 50px",
//                 overflow: "hidden",
//                 padding: "2rem 0",
//                 height: "200px",
//                 objectFit: "fit",
//               }}
//             >
//               <Image
//                 src={imageUrl}
//                 className="object-fit rounded-full transform transition-transform duration-300 ease-in hover:translate-y-1"
//                 alt="Picture of the Technology"
//               />
//             </div>
//           );
//         })}
//       </Carousel>
//     </>
//   );
// };
// export default CarouselLayout;
"use client";
import React from "react";
import ReactCardSlider from "react-card-slider-component";
import Image from "next/image";
import { Grid } from "@mui/material";
import ReactJs from "../../assest/Technology/ReactJs.png"; // Adjust the path as per your project structure

function CarouselLayout(props) {
  const sliderImageUrl = props.SliderImages;

  return (
    <>
      {sliderImageUrl.map((data) => {
        return (
          <Grid key={data.title} item xs={12} md={2.5} className="mb-10">
            <div className="card relative w-full h-1.5	">
              <Image
                src={data.imageUrl}
                layout="fill"
                // objectFit="contain"
                alt="Background Image"
              />
              <div
                className="card-content absolute inset-x-0 bottom-0	flex flex-col justify-center items-center p-5	"
                style={{
                  color: "#fff",
                }}
              >
                <h2 className="card-title">{data.title}</h2>
                <p className="card-body">{data.description}</p>
                <a href={`${data.link}`} className="button">
                  Learn More
                </a>
              </div>
            </div>
          </Grid>
        );
      })}
    </>
  );
}

export default CarouselLayout;

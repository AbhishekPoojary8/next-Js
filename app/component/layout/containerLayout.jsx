"use client";
import { Grid, Box } from "@mui/material";

const ContainerLayout = ({ content }) => {
  const IterableContent = () => {
    return (
      <>
        {content?.map((IndividualContent, index) => {
          return (
            <Grid
              key={IndividualContent}
              item
              xs={12}
              md={6}
              className="mt-6 "
              // key={index}
            >
              <Box className="flex">
                <IndividualContent.icon
                  fontSize="large"
                  sx={{ color: "#54ca95" }}
                />

                <Box className="px-4 py-1">
                  <span className=" font-semibold ">
                    {IndividualContent.about}
                  </span>
                  <Box className="py-2  text-1xl text-greyPallet leading-8	">
                    <span>{IndividualContent.content}</span>
                  </Box>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </>
    );
  };
  return <>{IterableContent()}</>;
};
export default ContainerLayout;

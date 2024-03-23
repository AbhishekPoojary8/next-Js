import { Box, Grid, Typography } from "@mui/material";
import WhatIDo from "../../page/aboutMe/whatIDo";
const OverAllQualification = () => {
  const Qualification = [
    {
      title: "Education",
      info: [
        {
          year: "2009",
          qualifiedAt: "University of Studies",
          mainTitle: "UI Design",
          content:
            "Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.",
        },
        {
          year: "2009",
          qualifiedAt: "University of Studies",
          mainTitle: "UI Design",
          content:
            "Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.",
        },
      ],
    },
    {
      title: "Education",
      info: [
        {
          year: "2009",
          qualifiedAt: "University of Studies",
          mainTitle: "UI Design",
          content:
            "Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.",
        },
        {
          year: "2009",
          qualifiedAt: "University of Studies",
          mainTitle: "UI Design",
          content:
            "Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.",
        },
      ],
    },
  ];
  return (
    <>
      <Grid container>
        {Qualification.map((qual) => {
          console.log(qual, "test qual");
          return (
            <Grid key={qual.title} item xs={12} md={6}>
              <WhatIDo
                contentHeader={qual.title}
                progressBarWidth={{
                  colorPalletWidth: "80px",
                  overLayWidth: "100px",
                }}
              >
                {() => (
                  <>
                    {qual?.info?.map((qualification) => {
                      return (
                        <Grid xs={12} item className="mt-6 mb-1">
                          <span
                            className="rounded-3xl border border-blue-500 border-10 py-1 px-5 text-gray-600 text-sm font-medium mr-4"
                            style={{ border: "3px solid #2fa1f4" }}
                          >
                            {qualification?.year}
                          </span>
                          <span className=" text-gray-500 font-medium text-sm">
                            {qualification?.qualifiedAt}
                          </span>
                          <Box
                            className="ml-10 mt-3"
                            style={{
                              borderBottom: "1px solid #dedada",
                              borderLeft: "1px solid #dedada",
                            }}
                          >
                            <div className="p-4">
                              <Typography className="text-lg  font-semibold">
                                {qualification.mainTitle}
                              </Typography>
                            </div>
                            <div className="px-4 pb-4">
                              <Typography className="text-sm text-gray-500">
                                {qualification.content}
                              </Typography>
                            </div>
                          </Box>
                        </Grid>
                      );
                    })}
                  </>
                )}
              </WhatIDo>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default OverAllQualification;

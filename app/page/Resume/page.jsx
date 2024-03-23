"use client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import OverAllQualification from "../../component/experience/index";
import { Box, Grid } from "@mui/material";
import PageTitle from "../../component/title/index";
import { pageState } from "../../state-handlers/Recoil/atoms/page";
import Hobbies from "../../component/hobbies/index";
import WhatIDo from "../aboutMe/whatIDo";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { Typography } from "antd";
const Resume = () => {
  const [name, setName] = useRecoilState(pageState);
  useEffect(() => {
    setName("Resume");
  }, []);

  const BorderLinearProgress = styled(LinearProgress)(({ theme, width }) => ({
    // console.log(wid)

    height: 10,
    borderRadius: 5,
    border: "2px solid #e5e5e5",

    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
      width: "90%",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "#308fe8",
      width: width,
      margin: "2px 2px 2px 5px",
    },
  }));

  let skills = [
    {
      row1: [
        {
          skill: "UI/UX Design",
          skill_precnt: "95%",
          progress_width: "150%",
        },
        {
          skill: "Web Responsive",
          skill_precnt: "90%",
          progress_width: "140%",
        },
        {
          skill: "CSS",
          skill_precnt: "95%",
          progress_width: "150%",
        },
      ],
      row2: [
        {
          skill: "JS",
          skill_precnt: "92%",
          progress_width: "142%",
        },
        {
          skill: "React Js",
          skill_precnt: "95%",
          progress_width: "150%",
        },
        {
          skill: "Node Js",
          skill_precnt: "85%",
          progress_width: "135%",
        },
      ],
    },
  ];

  return (
    <>
      <PageTitle
        className="mt-10"
        pageTitle={"Resume"}
        sideContent={"3 Years of experience"}
      />
      <OverAllQualification />
      <WhatIDo
        contentHeader={"Skill Set"}
        progressBarWidth={{ colorPalletWidth: "80px", overLayWidth: "80px" }}
      >
        {() => (
          <>
            <Grid container className="pt-[2%]  ">
              {skills.map((skillData, index) => {
                console.log(skillData, "skillData");
                let { row1, row2 } = skillData;
                return (
                  <>
                    <Grid item md={6} sm={12} className="w-full">
                      {row1?.map((data) => (
                        <Box
                          key={data.skill}
                          // style={{ width: "80%" }}
                          className="mb-8 mt-2"
                        >
                          <Box
                            className="flex justify-between "
                            style={{ width: "90%" }}
                          >
                            <Box>
                              <Typography className="text-base font-semibold">
                                {data.skill}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography className="text-gray-500 text-base">
                                {data.skill_precnt}
                              </Typography>
                            </Box>
                          </Box>
                          <BorderLinearProgress
                            variant="determinate"
                            value={60}
                            width={data.progress_width}
                          />
                        </Box>
                      ))}
                    </Grid>
                    <Grid item md={6} sm={12} className="w-full">
                      {row2?.map((data) => (
                        <Box key={data.skill} className="mb-8 mt-2 ml-11">
                          <Box
                            className="flex justify-between "
                            style={{ width: "90%" }}
                          >
                            <Box>
                              <Typography className="text-base font-semibold">
                                {data.skill}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography className="text-gray-500 text-base">
                                {data.skill_precnt}
                              </Typography>
                            </Box>
                          </Box>
                          <BorderLinearProgress
                            variant="determinate"
                            value={60}
                            width={data.progress_width}
                          />
                        </Box>
                      ))}
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </>
        )}
      </WhatIDo>
      <Hobbies />
    </>
  );
};
export default Resume;

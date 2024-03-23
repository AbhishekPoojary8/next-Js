import { Box, Typography } from "@mui/material";

const PageTitle = ({ pageTitle, sideContent }) => {
  return (
    <>
      <div className="bg-customGrey h-60 border-t-5 border-b-5 border-gray-300 	">
        <Box className="grid grid-cols-3 h-full">
          <Box className="col-span-2 flex items-center h-full px-20 md:col-span-2">
            <Typography className="text-5xl font-semibold">
              {pageTitle}
            </Typography>
          </Box>
          <Box className="flex justify-end	 p-6 text-neutral-400">
            <Typography>{sideContent}</Typography>
          </Box>
        </Box>
      </div>
    </>
  );
};
export default PageTitle;

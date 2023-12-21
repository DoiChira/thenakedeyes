import { Box, Typography } from '@mui/material';
import HeaderSvg from "../../assets/header.svg";

const Heading = ({ heading = "" }) => {
  return (
    <Box className="max-w-max mx-auto py-6">
      <Typography variant="h4" className="pb-2 text-center">
        {heading}
      </Typography>
      <Box className="flex justify-center items-center ">
        <img src={HeaderSvg} alt="header-svg" className="w-full" />
      </Box>
    </Box>
  );
}

export default Heading;

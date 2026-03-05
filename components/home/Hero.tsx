"use client";

import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import DemoButton from "../buttons/DemoButton";
import ContactUsButtom from "../buttons/ContactUsButtom";
import {
  hedingStyle,
  hedingStyleBelowLargeScreen,
  subHeadingStyle,
  subHeadingStyleBelowLargeScreen,
} from "@/styles/headingStyle";

const Hero = () => {
  const theme = useTheme();
  const belowLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        width: "100%",
        height: "90vh",
        backgroundColor: "black",
        position: "relative",
        backgroundImage:
          "url('/assets/images/three-happy-multiracial-colleagues-looking-down-smiling-while-using-digital-tablet-office.jpg')",
        backgroundSize: "cover",
        backgroundPositionY: "top",
      }}
    >
      <Box
        zIndex={2}
        width={{ xs: "100%", md: "40%" }}
        mx="auto"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "end",
          position: "relative",
          textAlign: "center",
          paddingBottom: 2,
        }}
      >
        <Typography
          style={belowLargeScreen ? hedingStyleBelowLargeScreen : hedingStyle}
        >
          One ERP to run real operations end to end
        </Typography>
        <Typography
          style={
            belowLargeScreen ? subHeadingStyleBelowLargeScreen : subHeadingStyle
          }
        >
          Run your entire operations with clarity and confidence
        </Typography>
        <Stack direction="row" spacing={2} mt={4}>
          <DemoButton />
          <ContactUsButtom />
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;

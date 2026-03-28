"use client";

import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import DemoButton from "../buttons/DemoButton";
import ContactUsButtom from "../buttons/ContactUsButtom";
import {
  headingStyle,
  headingStyleBelowLargeScreen,
  subHeadingStyle,
  subHeadingStyleBelowLargeScreen,
} from "@/styles/headingStyle";
import Image from "next/image";

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
        backgroundColor: "gray",
        position: "relative",
      }}
    >
      <Image
        src="/assets/images/three-happy-multiracial-colleagues-looking-down-smiling-while-using-digital-tablet-office.jpg"
        alt="hero image"
        fill
        priority
        style={{ objectFit: "cover" }}
      />
      <Box
        zIndex={2}
        width={{ xs: "100%", md: "50%" }}
        mx="auto"
        sx={{
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "end",
          position: "absolute",
          bottom: 10,
          mx: "auto",
          left: { xs: 0, md: "25%" },
          textAlign: "center",
          paddingBottom: 4,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius: 3,
        }}
      >
        <Typography
          style={belowLargeScreen ? headingStyleBelowLargeScreen : headingStyle}
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
      </Box>
    </Box>
  );
};

export default Hero;

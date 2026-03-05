"use client";

import { Box, Stack, Typography } from "@mui/material";
import DemoButton from "../buttons/DemoButton";
import ContactUsButtom from "../buttons/ContactUsButtom";
import { hedingStyle, subHeadingStyle } from "@/styles/headingStyle";

const Hero = () => {
  return (
    <Box
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        width: "100%",
        height: "90vh",
        backgroundColor: "black",
        position: "relative",
      }}
    >
      <img
        src="/assets/images/three-happy-multiracial-colleagues-looking-down-smiling-while-using-digital-tablet-office.jpg"
        style={{ opacity: 0.7, position: "absolute", top: 0, left: 0 }}
      />
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
        <Typography style={hedingStyle}>
          One ERP to run real operations end to end
        </Typography>
        <Typography style={subHeadingStyle}>
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

"use client";

import {
  heading2Style,
  heading2StyleBelowLargeScreen,
  smallMutedText,
  subHeadingStyle,
} from "@/styles/headingStyle";
import {
  Box,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";

export const HowItWorks = () => {
  const theme = useTheme();
  const belowLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const steps = [
    {
      title: "Understand Your Operation",
      description:
        "We learn how your business runs — workflows, challenges, and priorities.",
    },
    {
      title: "Configure ProsERP",
      description: "The system is set up to match your operational reality.",
    },
    {
      title: "Go Live & Scale",
      description:
        "Run your business with clarity, structure, and control from day one.",
    },
  ];
  return (
    <Box
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        width: "100%",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        padding: 4,
        backgroundColor: "gray",
        position: "relative",
        // backgroundImage:
        //   "url('/assets/images/black-man-engineer-using-tablet-computer-operating-cnc-machine-cutting-wood-furniture-factory.jpg')",
        // backgroundPositionY: "top",
        // backgroundSize: "cover",
      }}
      id="howItWorks"
    >
      <Image
        src="/assets/images/black-man-engineer-using-tablet-computer-operating-cnc-machine-cutting-wood-furniture-factory.jpg"
        alt="hero image"
        fill
        style={{ objectFit: "cover" }}
      />
      <Box
        component="div"
        sx={{
          backgroundColor: "black",
          padding: 4,
          px: 2,
          mt: 4,
          width: { xs: 250, md: 300 },
          borderRadius: 3,
          position: "relative",
        }}
      >
        <Typography
          style={
            !belowLargeScreen
              ? { ...heading2Style, color: "white" }
              : { ...heading2StyleBelowLargeScreen, color: "white" }
          }
          color="white"
        >
          How it works
        </Typography>
        <List sx={{ mt: 4 }}>
          {steps.map((step, index) => (
            <ListItem
              key={step.title}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                borderBottomWidth: 1,
                borderBottomColor: "gray",
              }}
            >
              <Typography
                style={{ ...subHeadingStyle, color: "white", fontSize: 20 }}
                color="white"
              >
                {step.title}
              </Typography>
              <Typography
                style={{ ...smallMutedText, color: "gray" }}
                color="white"
              >
                {step.description}
              </Typography>
              <Divider sx={{ mt: 2 }} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

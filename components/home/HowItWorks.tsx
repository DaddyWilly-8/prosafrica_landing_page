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
        backgroundColor: "black",
        backgroundImage:
          "url('/assets/images/black-man-engineer-using-tablet-computer-operating-cnc-machine-cutting-wood-furniture-factory.jpg')",
        backgroundPositionY: "top",
        backgroundSize: "cover",
      }}
    >
      <Box
        component="div"
        sx={{
          backgroundColor: "black",
          padding: 4,
          mt: 4,
          width: { xs: "100%", md: "25%" },
          borderRadius: 3,
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
            <>
              <Divider key={index} />
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
              </ListItem>
            </>
          ))}
        </List>
      </Box>
    </Box>
  );
};

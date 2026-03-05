"use client";

import {
  heading2Style,
  heading2StyleBelowLargeScreen,
  smallMutedText,
  smallMutedTextBelowLargeScreen,
  subHeadingStyle,
  subHeadingStyleBelowLargeScreen,
} from "@/styles/headingStyle";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

const Faqs = () => {
  const theme = useTheme();
  const belowLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box component="section">
      <Paper
        elevation={0}
        sx={{
          padding: 4,
          borderRadius: 3,
          backgroundColor: "white",
        }}
      >
        <Typography
          align="center"
          mt={8}
          style={
            !belowLargeScreen ? heading2Style : heading2StyleBelowLargeScreen
          }
        >
          Frequently asked questions
        </Typography>

        <Box component="div" mt={8} px={{ xs: 2, md: 8 }}>
          {[1, 2, 3].map((item, index) => (
            <Accordion key={index} defaultExpanded={index == 0}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ paddingY: { xs: 2, md: 4 } }}
              >
                <Typography
                  component="span"
                  style={
                    !belowLargeScreen
                      ? { ...subHeadingStyle, color: "black" }
                      : { ...subHeadingStyleBelowLargeScreen, color: "black" }
                  }
                >
                  Lorem ipsum dolor sit amet consectetur.
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ paddingY: { xs: 4, md: 8 } }}>
                <Typography
                  width={{ xs: "100%", md: "70%" }}
                  style={
                    !belowLargeScreen
                      ? { ...smallMutedText, fontSize: 18 }
                      : { ...smallMutedTextBelowLargeScreen }
                  }
                >
                  Lorem ipsum dolor sit amet consectetur. Egestas congue a leo
                  sem mauris. Adipiscing elementum cras quam adipiscing integer
                  tincidunt amet sed. Justo vestibulum nullam consequat posuere
                  vitae. Tristique pulvinar nam mauris suspendisse.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default Faqs;

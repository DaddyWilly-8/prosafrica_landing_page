"use client";

import ContactCard from "@/components/contact/ContactCard";
import Faqs from "@/components/contact/Faqs";
import {
  heading2Style,
  heading2StyleBelowLargeScreen,
  smallMutedText,
  smallMutedTextBelowLargeScreen,
  subHeadingStyle,
  subHeadingStyleBelowLargeScreen,
} from "@/styles/headingStyle";
import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";

const Contact = () => {
  const theme = useTheme();
  const belowLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box component="section">
      <Paper
        elevation={0}
        sx={{
          paddingY: 8,
          paddingX: { xs: 4, md: 12 },
          borderRadius: 3,
          backgroundColor: "#f3f4f6",
        }}
      >
        <Typography
          style={
            !belowLargeScreen ? smallMutedText : smallMutedTextBelowLargeScreen
          }
        >
          Contact
        </Typography>
        <Typography
          mt={2}
          style={
            !belowLargeScreen ? heading2Style : heading2StyleBelowLargeScreen
          }
        >
          How can we help?
        </Typography>
        <Typography
          mt={2}
          style={
            !belowLargeScreen
              ? {
                  ...subHeadingStyle,
                  color: "black",
                  fontSize: 18,
                  width: "50%",
                }
              : {
                  ...subHeadingStyleBelowLargeScreen,
                  color: "black",
                  fontSize: 16,
                  width: "100%",
                }
          }
        >
          Whether you’re ready to see ProsERP in action or just need a hand with
          a question, our sales and support teams are here to help.
        </Typography>
      </Paper>
      {/* contact cards */}
      <ContactCard />

      {/* FAQs */}
      <Faqs />
    </Box>
  );
};

export default Contact;

"use client";
import {
  smallMutedText,
  smallMutedTextBelowLargeScreen,
  subHeadingStyle,
  subHeadingStyleBelowLargeScreen,
} from "@/styles/headingStyle";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const ContactCard = () => {
  const theme = useTheme();
  const belowLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const router = useRouter();
  return (
    <Box component="section">
      <Grid container p={4} spacing={{ xs: 4, md: 4, lg: 8 }}>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Paper
            elevation={0}
            sx={{
              padding: 4,
              borderRadius: 3,
              backgroundColor: "white",
              height: "100%",
            }}
          >
            <Typography
              style={
                !belowLargeScreen
                  ? {
                      ...subHeadingStyle,
                      color: "black",
                      //   fontSize: 18,
                      width: "50%",
                    }
                  : {
                      ...subHeadingStyleBelowLargeScreen,
                      color: "black",
                      //   fontSize: 16,
                      width: "100%",
                    }
              }
            >
              Support
            </Typography>
            <Typography
              mt={4}
              style={
                !belowLargeScreen
                  ? { ...smallMutedText, fontSize: 18 }
                  : { ...smallMutedTextBelowLargeScreen, fontSize: 14 }
              }
            >
              Fill out our form or email us at{" "}
              <a href="mailto:support@prosafrica.co.tz">
                support@prosafrica.co.tz
              </a>{" "}
              with your question
            </Typography>
            <Button
              onClick={() => router.push("/contact/support")}
              sx={{
                borderRadius: 10,
                paddingY: { xs: 1, md: 2 },
                paddingX: { xs: 2, md: 6 },
                backgroundColor: "black",
                color: "white",
                mt: { xs: 10, md: 20 },
                fontSize: { xs: 10, md: 12 },
              }}
            >
              Submit Inquiry
            </Button>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Paper
            elevation={0}
            sx={{
              padding: 4,
              borderRadius: 3,
              backgroundColor: "#ecfeff  ",
              height: "100%",
            }}
          >
            <Typography
              style={
                !belowLargeScreen
                  ? {
                      ...subHeadingStyle,
                      color: "black",
                      width: "50%",
                    }
                  : {
                      ...subHeadingStyleBelowLargeScreen,
                      color: "black",
                      width: "100%",
                    }
              }
            >
              Sales
            </Typography>
            <Typography
              mt={4}
              style={
                !belowLargeScreen
                  ? { ...smallMutedText, fontSize: 18 }
                  : { ...smallMutedTextBelowLargeScreen, fontSize: 14 }
              }
            >
              Connect with our sales team to request a demo or discuss pricing.
            </Typography>
            <Button
              sx={{
                borderRadius: 10,
                paddingY: { xs: 1, md: 2 },
                paddingX: { xs: 2, md: 6 },
                backgroundColor: "white",
                color: "black",
                mt: { xs: 10, md: 20 },
                fontSize: { xs: 10, md: 12 },
              }}
            >
              Book a demo
            </Button>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Paper
            elevation={0}
            sx={{
              padding: 4,
              borderRadius: 3,
              backgroundColor: "#d1d5dc    ",
              height: "100%",
            }}
            className="bg-gray-300"
          >
            <Typography
              style={
                !belowLargeScreen
                  ? {
                      ...subHeadingStyle,
                      color: "black",
                      width: "50%",
                    }
                  : {
                      ...subHeadingStyleBelowLargeScreen,
                      color: "black",
                      width: "100%",
                    }
              }
            >
              Media Inquiry
            </Typography>
            <Typography
              mt={4}
              style={
                !belowLargeScreen
                  ? { ...smallMutedText, fontSize: 18 }
                  : { ...smallMutedTextBelowLargeScreen, fontSize: 14 }
              }
            >
              Reach out to our team for press requests or media opportunities.
            </Typography>
            <Button
              sx={{
                borderRadius: 10,
                paddingY: { xs: 1, md: 2 },
                paddingX: { xs: 2, md: 6 },
                backgroundColor: "white",
                color: "black",
                mt: { xs: 10, md: 20 },
                fontSize: { xs: 10, md: 12 },
              }}
            >
              Email Us
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactCard;

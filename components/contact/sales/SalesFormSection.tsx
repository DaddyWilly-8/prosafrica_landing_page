"use client";
import {
  heading2Style,
  heading2StyleBelowLargeScreen,
  headingStyle,
  headingStyleBelowLargeScreen,
  smallMutedText,
  subHeadingStyle,
  subHeadingStyleBelowLargeScreen,
} from "@/styles/headingStyle";
import { CheckCircle } from "@mui/icons-material";
import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import ContactSalesForm from "./ContactSalesForm";

const SalesFormSection = () => {
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
          backgroundColor: "white",
        }}
      >
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              style={
                !belowLargeScreen
                  ? { ...heading2Style, color: "black" }
                  : { ...heading2StyleBelowLargeScreen, color: "black" }
              }
            >
              Contact Sales
            </Typography>
            <Box
              mt={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1, md: 2 },
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <CheckCircle fontSize="large" />
                <Typography
                  style={
                    !belowLargeScreen
                      ? { ...subHeadingStyle, color: "black", fontSize: 18 }
                      : {
                          ...subHeadingStyleBelowLargeScreen,
                          color: "#4a5565",
                          fontSize: 16,
                        }
                  }
                >
                  Request a demo
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <CheckCircle fontSize="large" />
                <Typography
                  style={
                    !belowLargeScreen
                      ? { ...subHeadingStyle, color: "black", fontSize: 18 }
                      : {
                          ...subHeadingStyleBelowLargeScreen,
                          color: "#4a5565",
                          fontSize: 16,
                        }
                  }
                >
                  Learn which plan is right for your team
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <CheckCircle fontSize="large" />
                <Typography
                  style={
                    !belowLargeScreen
                      ? { ...subHeadingStyle, color: "black", fontSize: 18 }
                      : {
                          ...subHeadingStyleBelowLargeScreen,
                          color: "#4a5565",
                          fontSize: 16,
                        }
                  }
                >
                  Explore an Enterprise contract
                </Typography>
              </Stack>
            </Box>
            <Typography
              mt={4}
              width={{ xs: "100%", md: "70%" }}
              style={{ ...smallMutedText, color: "#4a5565" }}
              className=" text-gray-600"
            >
              Need help with onboarding, product questions, or technical issues?
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <ContactSalesForm />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SalesFormSection;

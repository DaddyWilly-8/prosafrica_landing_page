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
import {
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import ContactSupportForm from "./ContactSupportForm";

const FormSection = () => {
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
        <Grid container spacing={{ xs: 4, md: 12 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              style={
                !belowLargeScreen
                  ? { ...heading2Style, color: "black" }
                  : { ...heading2StyleBelowLargeScreen, color: "black" }
              }
            >
              Contact Support
            </Typography>
            <Typography
              mt={2}
              style={
                !belowLargeScreen
                  ? { ...subHeadingStyle, color: "#4a5565", fontSize: 20 }
                  : {
                      ...subHeadingStyleBelowLargeScreen,
                      color: "#4a5565",
                      fontSize: 16,
                    }
              }
            >
              Reach out to our support team for quick help with product
              questions, onboarding, or technical issues.
            </Typography>
            <Typography
              mt={2}
              width={{ xs: "100%", md: "50%" }}
              style={{ ...smallMutedText, color: "#99a1af" }}
            >
              Looking for details on plans, pricing, or booking a demo?
            </Typography>
            <Link
              href="/contact/sales"
              style={{ ...smallMutedText, fontWeight: 400, marginTop: 4 }}
            >
              Talk to Sales
            </Link>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <ContactSupportForm />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default FormSection;

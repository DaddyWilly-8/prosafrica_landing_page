"use client";

import { clients } from "@/lib/data/home/clients";
import {
  heading2Style,
  heading2StyleBelowLargeScreen,
  smallMutedText,
  smallMutedTextBelowLargeScreen,
} from "@/styles/headingStyle";
import {
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const ClientssSection = () => {
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
        <Grid container>
          <Grid
            size={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={4}
          >
            <Typography
              style={
                !belowLargeScreen
                  ? heading2Style
                  : heading2StyleBelowLargeScreen
              }
              width={{ xs: "100%", md: "50%" }}
              align="center"
            >
              Join teams managing their business through one connected ERP
            </Typography>
            <Typography
              variant="body2"
              style={
                !belowLargeScreen
                  ? smallMutedText
                  : smallMutedTextBelowLargeScreen
              }
            >
              Our clients include growing businesses and established enterprises
              to run their businesses
            </Typography>
          </Grid>

          <Grid container rowSpacing={16} size={12} mt={12}>
            {clients.map((client, index) => (
              <Grid
                key={index}
                size={{ xs: 12, md: 6, lg: 3 }}
                justifyContent="center"
                alignItems="center"
                display="flex"
              >
                <img
                  src={client.image}
                  alt="client"
                  width="150px"
                  height="auto"
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ClientssSection;

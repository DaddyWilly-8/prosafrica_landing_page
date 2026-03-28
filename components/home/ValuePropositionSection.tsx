"use client";
import {
  heading2Style,
  heading2StyleBelowLargeScreen,
  smallMutedText,
  smallMutedTextBelowLargeScreen,
} from "@/styles/headingStyle";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const ValuePropositionSection = () => {
  const theme = useTheme();
  const belowLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const facts = [
    {
      label: "47% rely on manual tools for key financial decisions",
      value: "43%",
    },
    {
      label: "100+ finance emails sent per team per month",
      value: "100+",
    },
    {
      label: "50% lose track of budget by Q2",
      value: "50%",
    },
  ];
  return (
    <Box component="section">
      <Paper
        elevation={0}
        sx={{
          padding: 4,
          paddingX: { xs: 4, md: 12 },
          borderRadius: 3,
          backgroundColor: "#f3f4f6",
        }}
      >
        <Grid container spacing={4}>
          <Grid size={12}>
            <Typography
              variant="body2"
              className=" text-gray-800"
              style={
                !belowLargeScreen
                  ? smallMutedText
                  : smallMutedTextBelowLargeScreen
              }
            >
              SMARTER TEAMS ARE MOVING TO CONNECTED OPERATIONS AND FINANCE.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              style={
                !belowLargeScreen
                  ? heading2Style
                  : heading2StyleBelowLargeScreen
              }
            >
              “Don’t just record transactions — understand your business.
              Visualize revenue, expenses, and profit trends instantly”
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="end"
          >
            <Paper
              elevation={12}
              sx={{
                padding: 0,
                borderRadius: 3,
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                overflow: "hidden",
              }}
            >
              <Image
                src="/assets/images/Transparend-PL-Trend.png"
                alt="Visualize revenue, expenses, and profit trends instantly"
                priority
                width={500}
                height={500}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                }}
              />
            </Paper>
          </Grid>

          {/* <Grid
            container
            size={12}
            mt={4}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { sx: "start", md: "space-between" },
              gap: 2,
            }}
          >
            {facts.map((fact, index) => {
              return (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      padding: 4,
                      borderRadius: 3,
                      backgroundColor: "white",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      gap: 8,
                    }}
                  >
                    <Typography variant="body2" style={smallMutedText}>
                      {fact.label}
                    </Typography>
                    <Typography style={heading2Style}>{fact.value}</Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid> */}
        </Grid>
      </Paper>
    </Box>
  );
};

export default ValuePropositionSection;

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
              “Most businesses don’t have a data problem — they have a systems
              problem. ProsERP brings finance and operations into one clear
              source of truth.”
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="end"
          >
            <Typography variant="body2" style={smallMutedText}>
              <span className="font-bold">Yohana Edward</span> <br /> CEO &
              CO-FOUNDER
            </Typography>
            <Image
              src="/assets/images/logos/logo.png"
              alt="Jumbo React"
              width={50}
              height={50}
              style={{ verticalAlign: "middle" }}
            />
          </Grid>
          <Grid
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
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ValuePropositionSection;

"use client";

import { Teams } from "@/lib/data/home/teams";
import {
  heading2Style,
  heading2StyleBelowLargeScreen,
  smallMutedText,
  smallMutedTextBelowLargeScreen,
  subHeadingStyle,
} from "@/styles/headingStyle";
import {
  Box,
  Grid,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const JoinTeams = () => {
  const theme = useTheme();
  const belowLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const [activeTeam, setActiveTeam] = useState<string>("trading");

  const scrollCardToTop = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const updateTeamCardPosition = () => {
      const teamCards = document.getElementsByClassName("teamCard");

      for (let i = 0; i < teamCards.length; i++) {
        const rect = teamCards[i].getBoundingClientRect().top;

        if (rect <= 130 && rect >= -600) {
          setActiveTeam((teamCards[i] as HTMLElement).id);
        }
      }
    };

    window.addEventListener("scroll", updateTeamCardPosition);
    updateTeamCardPosition();

    return () => {
      window.removeEventListener("scroll", updateTeamCardPosition);
    };
  }, []);

  return (
    <Box component="section">
      <Grid container mt={{ xs: 10, md: 20 }}>
        <Grid size={{ xs: 12, md: 6 }}></Grid>
        <Grid size={{ xs: 12, md: 6 }} pr={{ xs: 4, md: 12 }}>
          <Typography
            style={
              !belowLargeScreen ? heading2Style : heading2StyleBelowLargeScreen
            }
          >
            Industries that run their businesses - in one ERP
          </Typography>
          <Typography
            style={
              !belowLargeScreen
                ? smallMutedText
                : smallMutedTextBelowLargeScreen
            }
            mt={4}
          >
            ProsERP is designed to support daily operational workflows while
            maintaining strong financial discipline. Every transaction,
            movement, and activity feeds directly into one accurate system of
            record.
          </Typography>
        </Grid>
      </Grid>

      <Grid container mt={{ xs: 10, md: 20 }} id="industries">
        <Grid
          size={{ xs: 12, md: 6 }}
          height="100%"
          position={{ xs: "relative", md: "sticky" }}
          top={{ xs: 0, md: 80 }}
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={1}
            component="button"
            onClick={() => scrollCardToTop("trading")}
            sx={{ cursor: "pointer" }}
          >
            {activeTeam === "trading" && (
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.69873 8.71387H2.44975e-05V9.41257H0.69873V8.71387ZM18.1641 9.20793C18.4369 8.93507 18.4369 8.49267 18.1641 8.21981L13.7175 3.77327C13.4447 3.50041 13.0023 3.50041 12.7294 3.77327C12.4566 4.04613 12.4566 4.48853 12.7294 4.76139L16.6819 8.71387L12.7294 12.6663C12.4566 12.9392 12.4566 13.3816 12.7294 13.6545C13.0023 13.9273 13.4447 13.9273 13.7175 13.6545L18.1641 9.20793ZM0.69873 0H2.44975e-05V8.71387H0.69873H1.39744V0H0.69873ZM0.69873 8.71387V9.41257H17.67V8.71387V8.01516H0.69873V8.71387Z"
                  fill="black"
                />
              </svg>
            )}
            <Typography
              style={
                activeTeam === "trading"
                  ? { color: "black", fontWeight: "bold" }
                  : { color: "#101828", fontWeight: "normal" }
              }
            >
              SMEs & TRADERS
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={1}
            component="button"
            onClick={() => scrollCardToTop("construction")}
            sx={{ cursor: "pointer" }}
          >
            {activeTeam === "construction" && (
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.69873 8.71387H2.44975e-05V9.41257H0.69873V8.71387ZM18.1641 9.20793C18.4369 8.93507 18.4369 8.49267 18.1641 8.21981L13.7175 3.77327C13.4447 3.50041 13.0023 3.50041 12.7294 3.77327C12.4566 4.04613 12.4566 4.48853 12.7294 4.76139L16.6819 8.71387L12.7294 12.6663C12.4566 12.9392 12.4566 13.3816 12.7294 13.6545C13.0023 13.9273 13.4447 13.9273 13.7175 13.6545L18.1641 9.20793ZM0.69873 0H2.44975e-05V8.71387H0.69873H1.39744V0H0.69873ZM0.69873 8.71387V9.41257H17.67V8.71387V8.01516H0.69873V8.71387Z"
                  fill="black"
                />
              </svg>
            )}
            <Typography
              style={
                activeTeam === "construction"
                  ? { color: "black", fontWeight: "bold" }
                  : { color: "#101828", fontWeight: "normal" }
              }
            >
              CONTRACTORS & PROJECT-BASED BUSINESSES
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={1}
            component="button"
            onClick={() => scrollCardToTop("fuel")}
            sx={{ cursor: "pointer" }}
          >
            {activeTeam === "fuel" && (
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.69873 8.71387H2.44975e-05V9.41257H0.69873V8.71387ZM18.1641 9.20793C18.4369 8.93507 18.4369 8.49267 18.1641 8.21981L13.7175 3.77327C13.4447 3.50041 13.0023 3.50041 12.7294 3.77327C12.4566 4.04613 12.4566 4.48853 12.7294 4.76139L16.6819 8.71387L12.7294 12.6663C12.4566 12.9392 12.4566 13.3816 12.7294 13.6545C13.0023 13.9273 13.4447 13.9273 13.7175 13.6545L18.1641 9.20793ZM0.69873 0H2.44975e-05V8.71387H0.69873H1.39744V0H0.69873ZM0.69873 8.71387V9.41257H17.67V8.71387V8.01516H0.69873V8.71387Z"
                  fill="black"
                />
              </svg>
            )}
            <Typography
              style={
                activeTeam === "fuel"
                  ? { color: "black", fontWeight: "bold" }
                  : { color: "#101828", fontWeight: "normal" }
              }
            >
              PETROL STATION MANAGEMENT
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={1}
            component="button"
            onClick={() => scrollCardToTop("manufacturers")}
            sx={{ cursor: "pointer" }}
          >
            {activeTeam === "manufacturers" && (
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.69873 8.71387H2.44975e-05V9.41257H0.69873V8.71387ZM18.1641 9.20793C18.4369 8.93507 18.4369 8.49267 18.1641 8.21981L13.7175 3.77327C13.4447 3.50041 13.0023 3.50041 12.7294 3.77327C12.4566 4.04613 12.4566 4.48853 12.7294 4.76139L16.6819 8.71387L12.7294 12.6663C12.4566 12.9392 12.4566 13.3816 12.7294 13.6545C13.0023 13.9273 13.4447 13.9273 13.7175 13.6545L18.1641 9.20793ZM0.69873 0H2.44975e-05V8.71387H0.69873H1.39744V0H0.69873ZM0.69873 8.71387V9.41257H17.67V8.71387V8.01516H0.69873V8.71387Z"
                  fill="black"
                />
              </svg>
            )}
            <Typography
              style={
                activeTeam === "manufacturers"
                  ? { color: "black", fontWeight: "bold" }
                  : { color: "#101828", fontWeight: "normal" }
              }
            >
              MANUFACTURING & PROCESSING
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} id="teamCardGrid">
          {Teams.map((team, index) => {
            return (
              <Paper
                key={index}
                elevation={0}
                sx={{ backgroundColor: "#f9fafb ", marginTop: 8 }}
                className="teamCard"
                id={team.id}
              >
                <Box
                  height={{ xs: 250, md: 350 }}
                  sx={{
                    backgroundColor: "#99a1af ",
                    borderRadius: 3,
                    overflow: "hidden",
                  }}
                />
                <Box component="div" paddingX={{ xs: 4, md: 8 }} paddingY={4}>
                  <Typography
                    style={
                      !belowLargeScreen
                        ? {
                            ...subHeadingStyle,
                            color: "black",
                            fontSize: 18,
                          }
                        : {
                            ...subHeadingStyle,
                            color: "black",
                            fontSize: 16,
                          }
                    }
                  >
                    {team.title}
                  </Typography>

                  <List>
                    {team.points.map((point) => (
                      <ListItem
                        key={point}
                        sx={{ borderTopColor: "lightgray", borderTopWidth: 2 }}
                      >
                        <Typography style={smallMutedText}>{point}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Paper>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default JoinTeams;

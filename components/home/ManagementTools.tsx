"use client";

import { Tools } from "@/lib/data/home/tools";
import {
  heading2Style,
  heading2StyleBelowLargeScreen,
  smallMutedText,
  subHeadingStyle,
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
import ViewSolnButton from "../buttons/ViewSolnButton";
import DemoButton from "../buttons/DemoButton";
import Image from "next/image";

const ManagementTools = () => {
  const theme = useTheme();
  const belowLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box component="section" mt={10}>
      <Typography
        style={
          !belowLargeScreen ? heading2Style : heading2StyleBelowLargeScreen
        }
        width={{ xs: "100%", md: "50%" }}
      >
        Integrate management tools that keep operations connected and controlled
      </Typography>

      {Tools.map((tool, index) => (
        <Grid
          key={index}
          container
          mt={4}
          spacing={4}
          direction={index % 2 == 0 ? "row" : "row-reverse"}
        >
          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                width: "100%",
                height: 400,
                backgroundColor: "black",
                position: "relative",
                display: "flex",
              }}
            >
              <Image
                src={tool.image}
                alt={tool.title}
                width={500}
                height={500}
                style={{
                  opacity: 0.7,
                  position: "relative",
                  objectFit: "cover",
                  width: "100%",
                  top: 0,
                  left: 0,
                }}
              />
              <Box
                zIndex={2}
                width={{ xs: "100%", md: "70%" }}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "end",
                  position: "absolute",
                  textAlign: "left",
                  paddingBottom: 2,
                  paddingX: 4,
                }}
              >
                <Typography style={{ ...smallMutedText, color: "white" }}>
                  {tool.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: "white",
                borderRadius: 3,
                padding: 4,
                height: "100%",
                position: "relative",
              }}
            >
              <Typography style={heading2Style}>{tool.title}</Typography>
              <Typography style={{ ...smallMutedText, color: "black" }} mt={2}>
                <span style={{ fontWeight: "bold" }}>Best for -</span>
                {tool.bestfor}
              </Typography>
              <Typography style={{ ...smallMutedText, color: "black" }}>
                <span style={{ fontWeight: "bold" }}>Result -</span>
                {tool.result}
              </Typography>

              <ViewSolnButton />
            </Paper>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default ManagementTools;

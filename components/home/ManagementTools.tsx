"use client";

import { Tools } from "@/lib/data/home/tools";
import {
  heading2Style,
  smallMutedText,
  subHeadingStyle,
} from "@/styles/headingStyle";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";

const ManagementTools = () => {
  return (
    <Box component="section">
      <Typography style={heading2Style} width={{ xs: "100%", md: "50%" }}>
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
              }}
            >
              <img
                src={tool.image}
                style={{
                  opacity: 0.7,
                  position: "absolute",
                  objectFit: "cover",
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
                  position: "relative",
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

              <Button
                sx={{
                  borderRadius: 10,
                  paddingY: 2,
                  paddingX: 2,
                  backgroundColor: "black",
                  color: "white",
                  position: "absolute",
                  bottom: 8,
                }}
              >
                View Solution
              </Button>
            </Paper>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default ManagementTools;

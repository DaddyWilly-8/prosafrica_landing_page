"use client";

import {
  heading2Style,
  smallMutedText,
  subHeadingStyle,
} from "@/styles/headingStyle";
import { Badge, Box, Grid, Paper, Stack, Typography } from "@mui/material";
import DemoButton from "../buttons/DemoButton";
import ContactUsButtom from "../buttons/ContactUsButtom";
import { IdeasInsights } from "@/lib/data/home/ideasAndInsights";

const IdeasAndInsights = () => {
  return (
    <Box component="section" mt={24}>
      <Typography style={heading2Style} width={{ xs: "100%", md: "40%" }}>
        Ideas, insights, and updates from our team
      </Typography>
      <Typography
        style={{ ...smallMutedText, color: "black" }}
        width={{ xs: "100%", md: "40%" }}
        mt={2}
      >
        From system updates to practical guides — stay informed on how ProsERP
        supports day-to-day operations and structured control.
      </Typography>

      <Grid container spacing={4}>
        {IdeasInsights.map((idea, index) => (
          <Grid key={index} size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{ backgroundColor: "#f9fafb ", marginTop: 8 }}
            >
              <Box
                height={250}
                sx={{
                  backgroundColor: "#99a1af ",
                  borderRadius: 3,
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={idea.image}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                  }}
                />
              </Box>
              <Box component="div" paddingX={2} paddingY={4}>
                <Stack
                  direction="row"
                  spacing={8}
                  width="100%"
                  display="flex"
                  alignItems="center"
                >
                  <Typography style={smallMutedText}>{idea.date}</Typography>
                  <Badge variant="dot" color="primary" />
                  <Badge color="default" badgeContent={idea.badge} />
                </Stack>
                <Typography
                  style={{
                    ...subHeadingStyle,
                    color: "black",
                  }}
                  mt={4}
                >
                  {idea.title}
                </Typography>

                <Stack mt={4} direction="row" spacing={2}>
                  <Box
                    component="div"
                    width={50}
                    height={50}
                    borderRadius={50}
                    overflow="hidden"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ backgroundColor: "black" }}
                  >
                    <img
                      src="/assets/images/portrait-handsome-male-smiling.jpg"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      style={{
                        ...smallMutedText,
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      {idea.author}
                    </Typography>
                    <Typography style={{ ...smallMutedText, color: "black" }}>
                      {idea.authorPosition}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default IdeasAndInsights;

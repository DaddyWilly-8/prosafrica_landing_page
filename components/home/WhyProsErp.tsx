"use client";

import { whyProsErp } from "@/lib/data/home/whyProsErp";
import { heading2Style, smallMutedText } from "@/styles/headingStyle";
import { Box, Grid, Paper, Typography } from "@mui/material";

const WhyProsErp = () => {
  return (
    <Box component="section">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              position: "relative",
            }}
          >
            <img
              src="/assets/images/african-american-business-woman-working-computer-bar.jpg"
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
              width={{ xs: "100%", md: "100%" }}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "start",
                position: "relative",
                textAlign: "left",
                paddingBottom: 2,
                paddingX: 4,
                pt: 4,
              }}
            >
              <Typography style={{ ...heading2Style, color: "white" }}>
                Why businesses choose ProsERP
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid container size={{ xs: 12, md: 8 }}>
          {whyProsErp.map((item, index) => (
            <Grid key={index} size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  width: "100%",
                  height: "100%",
                  aspectRatio: "square",
                  padding: 4,
                  borderRadius: 3,
                }}
              >
                {item.icons}
                <Typography
                  style={heading2Style}
                  mt={4}
                  width={{ xs: "100%", md: "70%" }}
                >
                  {item.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyProsErp;

"use client";

import { clients } from "@/lib/data/home/clients";
import {
  heading2Style,
  smallMutedText,
  subHeadingStyle,
} from "@/styles/headingStyle";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

const Testimonials = () => {
  return (
    <Box component="section" mt={12}>
      <Box component="div" textAlign="center">
        <Typography style={heading2Style}>
          The ProsERP shift — <br /> straight from our users
        </Typography>
        <Typography style={smallMutedText} mt={4}>
          Hear how ProsERP is helping businesses take control of their
          operations.
        </Typography>
      </Box>
      <Paper
        elevation={0}
        sx={{
          paddingY: 8,
          paddingX: 12,
          borderRadius: 3,
          backgroundColor: "#f3f4f6",
          mt: 8,
        }}
      >
        <Stack direction="row" display="flex" justifyContent="end" spacing={2}>
          {clients.map((client, index) => {
            if (index > 2) return null;
            return (
              <Typography key={index} fontSize={12}>
                {client.image}
              </Typography>
            );
          })}
        </Stack>

        <Stack spacing={12}>
          <Box>
            <Box
              component="div"
              width={80}
              height={80}
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
            <Typography
              style={{ ...smallMutedText, color: "black", fontWeight: "bold" }}
            >
              PATRICK ROBERT
            </Typography>
            <Typography style={{ ...smallMutedText }}>
              HEAD OF FINANCE
            </Typography>
          </Box>
          <Box>
            <Typography style={heading2Style} width={{ xs: "100%", md: "50%" }}>
              “ProsERP gave us full visibility across our operations and
              finances in one system.”
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={4} mt={4}>
          <Paper sx={{ borderWidth: 1, borderColor: "gray", padding: 4 }}>
            <Typography
              style={{ ...subHeadingStyle, color: "black", fontWeight: "bold" }}
            >
              37%
            </Typography>
            <Typography>Reduction in budget overages</Typography>
          </Paper>
          <Paper sx={{ borderWidth: 1, borderColor: "gray", padding: 4 }}>
            <Typography
              style={{ ...subHeadingStyle, color: "black", fontWeight: "bold" }}
            >
              2x
            </Typography>
            <Typography>Faster spend approvals</Typography>
          </Paper>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Testimonials;

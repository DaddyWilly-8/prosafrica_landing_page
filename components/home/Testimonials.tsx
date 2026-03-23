"use client";

import { clients } from "@/lib/data/home/clients";
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
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Testimonials = () => {
  const theme = useTheme();
  const belowLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box component="section" mt={12}>
      <Box component="div" textAlign="center">
        <Typography
          style={
            !belowLargeScreen ? heading2Style : heading2StyleBelowLargeScreen
          }
        >
          The ProsERP shift — <br /> straight from our users
        </Typography>
        <Typography
          style={
            !belowLargeScreen ? smallMutedText : smallMutedTextBelowLargeScreen
          }
          mt={4}
        >
          Hear how ProsERP is helping businesses take control of their
          operations.
        </Typography>
      </Box>
      <Paper
        elevation={0}
        sx={{
          paddingY: 8,
          paddingX: { xs: 4, md: 12 },
          borderRadius: 3,
          backgroundColor: "#f3f4f6",
          mt: 8,
        }}
      >
        {!belowLargeScreen && (
          <Stack
            direction="row"
            display="flex"
            justifyContent="end"
            spacing={2}
          >
            {clients.map((client, index) => {
              if (index > 0) return null;
              return (
                <Typography key={index}>
                  <img
                    src={client.image}
                    alt="client"
                    width="80px"
                    height="auto"
                  />
                </Typography>
              );
            })}
          </Stack>
        )}

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
            <Typography
              style={
                !belowLargeScreen
                  ? heading2Style
                  : heading2StyleBelowLargeScreen
              }
              width={{ xs: "100%", md: "50%" }}
            >
              “ProsERP gave us full visibility across our operations and
              finances in one system.”
            </Typography>
          </Box>
        </Stack>
        {/* <Stack direction={{ xs: "column", md: "row" }} spacing={4} mt={4}>
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
        </Stack> */}
      </Paper>
    </Box>
  );
};

export default Testimonials;

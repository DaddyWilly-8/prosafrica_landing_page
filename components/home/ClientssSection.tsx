"use client";

import { clients } from "@/lib/data/home/clients";
import { heading2Style, smallMutedText } from "@/styles/headingStyle";
import { Box, Grid, Paper, Typography } from "@mui/material";

const ClientssSection = () => {
  return (
    <Box component="section">
      <Paper
        elevation={0}
        sx={{
          paddingY: 8,
          paddingX: 12,
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
              style={heading2Style}
              width={{ xs: "100%", md: "50%" }}
              align="center"
            >
              Join teams managing their business through one connected ERP
            </Typography>
            <Typography variant="body2" style={smallMutedText}>
              Our clients include growing businesses and established enterprises
              to run their businesses
            </Typography>
          </Grid>

          <Grid container rowSpacing={16} size={12} mt={12}>
            {clients.map((client, index) => (
              <Grid key={index} size={{ xs: 12, md: 6, lg: 2 }}>
                {client.image}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ClientssSection;

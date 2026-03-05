"use client";

import { Button, useMediaQuery, useTheme } from "@mui/material";

const ViewSolnButton = () => {
  const theme = useTheme();
  const belowLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return !belowLargeScreen ? (
    <Button
      sx={{
        borderRadius: 10,
        paddingY: 2,
        paddingX: 4,
        backgroundColor: "black",
        color: "white",
        position: "absolute",
        bottom: 8,
        mb: 4,
      }}
    >
      View Solution
    </Button>
  ) : (
    <Button
      sx={{
        borderRadius: 10,
        paddingY: 1,
        paddingX: 2,
        backgroundColor: "black",
        color: "white",
        fontSize: 12,
        mt: 4,
      }}
    >
      View Solution
    </Button>
  );
};

export default ViewSolnButton;

import { Button, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const ContactUsButtom = () => {
  const theme = useTheme();
  const belowLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  return !belowLargeScreen ? (
    <Button
      sx={{
        borderRadius: 10,
        paddingY: 2,
        paddingX: 4,
        backgroundColor: "lightgray",
        color: "black",
        opacity: 0.8,
      }}
    >
      Contact Us
    </Button>
  ) : (
    <Button
      sx={{
        borderRadius: 10,
        paddingY: 1,
        paddingX: 2,
        backgroundColor: "lightgray",
        color: "black",
        opacity: 0.8,
        fontSize: 12,
      }}
    >
      Contact Us
    </Button>
  );
};

export default ContactUsButtom;

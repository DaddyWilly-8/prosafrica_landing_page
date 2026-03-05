"use client";

import { Button } from "@mui/material";

const DemoButton = () => {
  return (
    <Button
      sx={{
        borderRadius: 10,
        paddingY: 2,
        paddingX: 4,
        backgroundColor: "black",
        color: "white",
      }}
    >
      Request a demo
    </Button>
  );
};

export default DemoButton;

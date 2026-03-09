"use client";

import { Button, SxProps, Theme, useMediaQuery, useTheme } from "@mui/material";

interface buttonProps {
  text?: string;
  sx?: SxProps<Theme>;
  onClick?: () => void;
}

const DemoButton = ({ text = "Request a demo", sx, onClick }: buttonProps) => {
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
        ...sx,
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  ) : (
    <Button
      onClick={onClick}
      sx={{
        borderRadius: 10,
        paddingY: 1,
        paddingX: 2,
        backgroundColor: "black",
        color: "white",
        fontSize: 12,
        ...sx,
      }}
    >
      {text}
    </Button>
  );
};

export default DemoButton;

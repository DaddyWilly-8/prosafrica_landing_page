"use client";

import { Button, SxProps, Theme, useMediaQuery, useTheme } from "@mui/material";

interface buttonProps {
  text?: string;
  sx?: SxProps<Theme>;
  onClick?: () => void;
}

const DemoButton = ({ text = "Request a demo", sx, onClick }: buttonProps) => {
  const theme = useTheme();
  const belowLargeScreen = useMediaQuery(theme.breakpoints.down("lg"), {
    noSsr: true,
  });

  return (
    <Button
      sx={{
        borderRadius: 10,
        paddingY: { xs: 1, md: 2 },
        paddingX: { xs: 2, md: 6 },
        backgroundColor: "black",
        color: "white",
        fontSize: { xs: 10, md: 12 },
        ...sx,
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default DemoButton;

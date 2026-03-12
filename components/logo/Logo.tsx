"use client";

import { Box, SxProps, Theme, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  mini?: boolean;
  mode: "light" | "semi-dark" | "dark";
  sx?: SxProps<Theme>;
};
const Logo = ({ mini = false, mode = "light", sx }: LogoProps) => {
  const theme = useTheme();
  const belowLargeScreen = useMediaQuery(theme.breakpoints.down("lg"), {
    noSsr: true,
  });
  return (
    <Box component="div" sx={{ display: "inline-flex", ...sx }}>
      <Link href={`/`}>
        <Image
          src={
            mode === "light"
              ? `/assets/images/logos/logo.png`
              : `/assets/images/logos/proserp-white.png`
          }
          alt="Jumbo React"
          width={belowLargeScreen ? 70 : 110}
          height={35}
          style={{ verticalAlign: "middle" }}
        />
      </Link>
    </Box>
  );
};

export { Logo };

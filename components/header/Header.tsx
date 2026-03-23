"use client";

import {
  Button,
  Grid,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Logo } from "../logo/Logo";
import Link from "next/link";
import DemoButton from "../buttons/DemoButton";
import { KeyboardArrowDown, Menu } from "@mui/icons-material";
import { useSideBar } from "@/providers/sidebarProvider";
import { headerMenuItems } from "@/lib/data/menuItems";
import { useRouter } from "next/navigation";

const Header = () => {
  const theme = useTheme();
  const belowLargeScreen = useMediaQuery(theme.breakpoints.down("lg"), {
    noSsr: true,
  });
  const { isOpen, toggleSideBar } = useSideBar();
  const router = useRouter();

  return (
    <Grid
      container
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
      }}
      zIndex={99}
    >
      <Grid size={{ xs: 5, lg: 3 }}>
        <Logo mode="light" />
      </Grid>
      {!belowLargeScreen ? (
        <>
          <Grid size={7} justifyContent="center">
            <Stack direction="row" spacing={2} alignItems="center">
              {headerMenuItems.map((item, index) => {
                return (
                  <Link key={index} href={item.href}>
                    {item.label}
                    {item.dropDown && (
                      <KeyboardArrowDown
                        sx={{ fontSize: 18, color: "black" }}
                      />
                    )}
                  </Link>
                );
              })}
            </Stack>
          </Grid>
          <Grid size={{ xs: 5, lg: 2 }}>
            <DemoButton onClick={() => router.push("/contact/sales")} />
          </Grid>
        </>
      ) : (
        <Grid size={5}></Grid>
      )}

      {belowLargeScreen && (
        <Grid size={2} textAlign="right">
          <IconButton onClick={toggleSideBar}>
            <Menu sx={{ color: "black" }} />
          </IconButton>
        </Grid>
      )}
    </Grid>
  );
};

export default Header;

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

const Header = () => {
  const theme = useTheme();
  const belowLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const { isOpen, toggleSideBar } = useSideBar();
  const headerMenuItems = [
    { label: "Product", href: "#", dropDown: true },
    { label: "Pricing", href: "#", dropDown: false },
    { label: "Company", href: "#", dropDown: false },
    { label: "Case Studies", href: "#", dropDown: true },
    { label: "Contact Us", href: "/contact", dropDown: false },
  ];
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
            <DemoButton />
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

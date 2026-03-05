"use client";

import { Button, Grid, Stack } from "@mui/material";
import React from "react";
import { Logo } from "../logo/Logo";
import Link from "next/link";
import DemoButton from "../buttons/DemoButton";

const Header = () => {
  const headerMenuItems = [
    { label: "Product", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Company", href: "#" },
    { label: "Case Studies", href: "#" },
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
      <Grid size={3}>
        <Logo mode="light" />
      </Grid>
      <Grid size={7} justifyContent="center">
        <Stack direction="row" spacing={2} alignItems="center">
          {headerMenuItems.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                {item.label}
              </Link>
            );
          })}
        </Stack>
      </Grid>
      <Grid size={2}>
        <DemoButton />
      </Grid>
    </Grid>
  );
};

export default Header;

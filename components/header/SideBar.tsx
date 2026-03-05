"use client";

import { useSideBar } from "@/providers/sidebarProvider";
import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const SideBar = () => {
  const { isOpen, toggleSideBar } = useSideBar();

  const headerMenuItems = [
    { label: "Product", href: "#", dropDown: true },
    { label: "Pricing", href: "#", dropDown: false },
    { label: "Company", href: "#", dropDown: false },
    { label: "Case Studies", href: "#", dropDown: true },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {headerMenuItems.map((item, index) => (
          <ListItem key={index} divider sx={{ paddingY: 2 }}>
            <Link key={index} href={item.href}>
              {item.label}
              {item.dropDown && (
                <KeyboardArrowDown sx={{ fontSize: 18, color: "black" }} />
              )}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer anchor="right" open={isOpen} onClose={() => toggleSideBar()}>
      {DrawerList}
    </Drawer>
  );
};

export default SideBar;

"use client";

import { headerMenuItems } from "@/lib/data/menuItems";
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
import DemoButton from "../buttons/DemoButton";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const { isOpen, toggleSideBar } = useSideBar();
  const router = useRouter();

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleSideBar}>
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
        <ListItem sx={{ paddingY: 2, mt: 4 }}>
          <DemoButton
            onClick={() => router.push("/contact/sales")}
            sx={{ width: "100%" }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer anchor="right" open={isOpen} onClose={toggleSideBar}>
      {DrawerList}
    </Drawer>
  );
};

export default SideBar;

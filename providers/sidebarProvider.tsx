"use client";

import { createContext, useContext, useState } from "react";

const SideBarContext = createContext({
  isOpen: false,
  openSideBar: () => {},
  closeSideBar: () => {},
  toggleSideBar: () => {},
});

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsopen] = useState(false);

  const openSideBar = () => setIsopen(true);
  const closeSideBar = () => setIsopen(false);
  const toggleSideBar = () => setIsopen((prev) => !prev);

  return (
    <SideBarContext.Provider
      value={{ isOpen, openSideBar, closeSideBar, toggleSideBar }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

export const useSideBar = () => useContext(SideBarContext);

import React, { createContext, useContext, useState, ReactNode } from "react";

interface SettingsContextProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
  userName: string;
  userRole: string;
  updateUserName: (name: string) => void;
  updateUserRole: (role: string) => void;
}

const SettingsContext = createContext<SettingsContextProps | undefined>(
  undefined
);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [userName, setUserName] = useState("Lorem Ipsum");
  const [userRole, setUserRole] = useState("Microsoft Student Accelerator");

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const toggleDarkTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  const updateUserName = (name: string) => {
    setUserName(name);
  };

  const updateUserRole = (role: string) => {
    setUserRole(role);
  };

  return (
    <SettingsContext.Provider
      value={{
        isDrawerOpen,
        toggleDrawer,
        isDarkTheme,
        toggleDarkTheme,
        userName,
        userRole,
        updateUserName,
        updateUserRole,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};

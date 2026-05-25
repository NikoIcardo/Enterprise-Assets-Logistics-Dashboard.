import { useState, useContext, ReactNode } from "react";
import { SystemContextType, User } from "../types/global";
import SystemContext from "./systemContext";

export const SystemProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [darkMode, setDarkModeState] = useState<boolean>(false);

  const login = ({ id, name, role }: User) => {
    setUser({ id, name, role });
  };

  const logout = () => {
    setUser(null);
  };

  const setDarkMode = (darkMode: boolean) => {
    setDarkModeState(darkMode);
  };

  return (
    <SystemContext.Provider
      value={{ user, darkMode, login, logout, setDarkMode }}
    >
      {children}
    </SystemContext.Provider>
  );
};

export const useSystemContext = (): SystemContextType => {
  const context = useContext(SystemContext);
  if (context === undefined) {
    throw new Error("System Context must be used within a context provider");
  }
  return context;
};

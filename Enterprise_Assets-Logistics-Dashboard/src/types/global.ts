export interface User {
  id: string;
  name: string;
  role: "admin" | "viewer";
}

export interface SystemContextType {
  user: User | null;
  darkMode: boolean;
  login: ({ id, name, role }: User) => void;
  logout: () => void;
  setDarkMode: (darkMode: boolean) => void;
}

export interface Asset {
  id: string;
  name: string;
  type: "server" | "network" | "storage";
  status: "online" | "offline";
  ipAddress: "string";
}

export interface DashboardState {
  assets: Asset[];
  isLoading: boolean;
  error: string | null;
}

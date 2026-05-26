import { Asset } from "../types/global";
export const testAssets: Asset[] = [
  {
    id: "1",
    name: "Server 1",
    type: "server",
    status: "online",
    ipAddress: "192.168.10.15",
  },
  {
    id: "2",
    name: "Server 2",
    type: "server",
    status: "offline",
    ipAddress: "192.168.20.15",
  },
  {
    id: "3",
    name: "Server 3",
    type: "server",
    status: "online",
    ipAddress: "192.168.30.15",
  },
  {
    id: "4",
    name: "Network 1",
    type: "network",
    status: "online",
    ipAddress: "192.168.4.96",
  },
  {
    id: "5",
    name: "Storage 1",
    type: "storage",
    status: "online",
    ipAddress: "192.168.5.129",
  },
  {
    id: "6",
    name: "Storage 1",
    type: "storage",
    status: "offline",
    ipAddress: "192.168.5.130",
  },
];

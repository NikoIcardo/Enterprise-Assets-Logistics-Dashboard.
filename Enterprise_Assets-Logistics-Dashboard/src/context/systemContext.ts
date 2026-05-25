import { createContext } from "react";
import { SystemContextType } from "../types/global";

const SystemContext = createContext<SystemContextType | undefined>(undefined); 

export default SystemContext; 
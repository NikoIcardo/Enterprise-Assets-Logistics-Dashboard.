import { createContext } from "react";
import { SystemContextType } from "../types/global";

const context = createContext<SystemContextType | undefined>(undefined); 

export default context; 
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/routes/router";
import {  SystemProvider } from "./context/ContextProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SystemProvider>
      <RouterProvider router={router}/>
    </SystemProvider>
  </StrictMode>,
);

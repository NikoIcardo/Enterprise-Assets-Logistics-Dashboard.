import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import DashboardView from "../../views/DashboardView";
import AdminView from "../../views/AdminView";
import AdminGuard from "./AdminGuard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <DashboardView />,
      },
      {
        element: <AdminGuard />,
        children: [
          {
            path: "/admin",
            element: <AdminView />,
          },
        ],
      },
    ],
  },
]);

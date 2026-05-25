import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import DashboardView from "../../views/DashboardView";
import AdminView from "../../views/AdminView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <DashboardView />,
      },
      { path: "admin", element: <AdminView /> },
    ],
  },
]);

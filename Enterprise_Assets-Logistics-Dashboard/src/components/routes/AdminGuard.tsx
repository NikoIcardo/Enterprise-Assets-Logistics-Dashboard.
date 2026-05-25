import { Navigate, Outlet } from "react-router";
import { useSystemContext } from "../../context/ContextProvider";
import { JSX } from "react";

const AdminGuard = (): JSX.Element => {
  const { user } = useSystemContext();
  if (!user || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default AdminGuard;

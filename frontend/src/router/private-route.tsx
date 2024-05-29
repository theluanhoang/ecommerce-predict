import { useUserProfile } from "@api/users";
import { LoadingScreen } from "@components/common";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "./constants";

export const PrivateRoute: React.FC = () => {
  const { data, isLoading } = useUserProfile();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return data ? <Outlet /> : <Navigate to={ROUTES.login} />;
};

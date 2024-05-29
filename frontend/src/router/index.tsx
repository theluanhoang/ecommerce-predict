import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage } from "../pages";
import { ROUTES } from "./constants";
import { Layout } from "@components/modules/layout";
import { PrivateRoute } from "./private-route";

const useAppRouter = () => {
  return createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          element: <PrivateRoute />,
          children: [{ path: ROUTES.home, element: <HomePage /> }],
        },
      ],
    },
    { path: ROUTES.login, element: <LoginPage /> },
    { path: ROUTES.signUp, element: <SignUpPage /> },
  ]);
};

export const Router: React.FC = () => {
  const appRouter = useAppRouter();

  return <RouterProvider router={appRouter} />;
};

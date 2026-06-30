import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/Auth/AuthLayout/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import UserLayout from "../layouts/Auth/UserLayout/UserLayout";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
export const routes = createBrowserRouter([
  {
    path: "",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/Auth/AuthLayout/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import UserLayout from "../layouts/Auth/UserLayout/UserLayout";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedAuthRoute from "./ProtectedAuthRoute";
export const routes = createBrowserRouter([
  {
    path: "",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element:<ProtectedAuthRoute> <Login /> </ProtectedAuthRoute>,
      },
      {
        path: "register",
        element: <ProtectedAuthRoute> <Register /> </ProtectedAuthRoute>,
      },
    ],
  },
  {
    path: "",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <ProtectedRoute> <Home /> </ProtectedRoute>,
      },
      {
        path: "profile",
        element: <ProtectedRoute> <Profile />  </ProtectedRoute>,
      },
    ],
  },
]);

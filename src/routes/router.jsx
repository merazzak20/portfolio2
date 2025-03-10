import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home";
import Register from "../Register";
import Login from "../Pages/Login";
import Dashboard from "../layout/Dashboard";
import Addprojects from "../Pages/Dashboard/AdminRoutes/AddProjects";
import AddFeedback from "../Pages/Dashboard/AdminRoutes/AddFeedback";
import AllMessage from "../Pages/Dashboard/AdminRoutes/AllMessage";
import PrivateRouter from "./PrivateRouter";
import AboutPage from "../Pages/AboutPage";
import SingleProject from "../components/SingleProject";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/:id",
        element: <SingleProject></SingleProject>,
      },
      // {
      //   path: "/register",
      //   element: <Register></Register>,
      // },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <Dashboard></Dashboard>
      </PrivateRouter>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Addprojects></Addprojects>,
      },
      {
        path: "addFeedback",
        element: <AddFeedback></AddFeedback>,
      },
      {
        path: "allMessages",
        element: <AllMessage></AllMessage>,
      },
    ],
  },
]);

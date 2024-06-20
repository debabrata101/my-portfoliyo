import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";
import About from "../Page/About";
import Skills from "../Page/Skils";
import Education from "../Page/Education";
import Contuct from "../Page/Contuct";
import Error from "../Page/Error";
import Project from "../Page/Project";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<Error/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"skills",
        element:<Skills/>
      },
      {
        path:"project",
        element:<Project/>
      },
      {
        path:"education",
        element:<Education/>
      },
      {
        path:"contact",
        element:<Contuct/>
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";
import About from "../Page/About";
import Skills from "../Page/Skils";
import Education from "../Page/Education";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
        path:"education",
        element:<Education/>
      },
    ],
  },
]);

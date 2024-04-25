
import * as React from "react";
import { createRoot } from "react-dom/client";
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import Service from "./page/Service.jsx";
import TeamMember from "./page/TeamMember.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,  
    children: [
      {
      path: "/",
      element: <Home/>,
      } ,
      {
        path: "/about",
        element: <About/>,
      }, 
      {
        path: "/service",
        element: <Service/>,
      },
      {
        path: "/team",
        element: <TeamMember/>,
      },
    
    ] 
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

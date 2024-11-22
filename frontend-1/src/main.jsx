import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-purple/theme.css";
import "primeicons/primeicons.css";
import { Layout } from "./Layout";
import { App } from "./App";
import {
  About,
  Dashboard,
  Guideline,
  Insights,
  Predict,
  Resources,
} from "@pages";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "insights",
        element: <Insights />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "guideline",
        element: <Guideline />,
      },
      {
        path: "predictor",
        element: <Predict />,
      },
      {
        path: "resources",
        element: <Resources />,
      },
    ],
  },
];
const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

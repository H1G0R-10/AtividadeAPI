import "../src/index.css"
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Visualizar from "./components/pages/Visualizar";
import App from "./App";
import Atualizar from "./components/pages/Atualizar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/visualizar",
    element: <Visualizar />,
  },
  {
    path: "/atualizar",
    element: <Atualizar />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
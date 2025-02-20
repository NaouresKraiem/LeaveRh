/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy } from "react";
import { RouteConfig } from "./conf/types";

const routes: RouteConfig[] = [
  {
    exact: true,
    path: "*",
    component: lazy(() => import("../components/NotFound/NotFound")),
  },
];

export default routes;

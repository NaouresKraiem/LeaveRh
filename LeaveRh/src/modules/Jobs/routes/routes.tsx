/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouteConfig } from "../../shared/routes/conf/types";
import { lazy } from "react";
import { Navigate } from "react-router-dom";
import MainLayout from "../../shared/layout/MainLayout/MainLayout";
// import GuestGuard from "../../shared/guards/GuestGuard";

export const baseAuthPath = "/admin";
export const ROOT = "/";

const routes: RouteConfig[] = [
  {
    path: `${ROOT}`,
    // guard: GuestGuard,
    component: () => <Navigate to={`${baseAuthPath}/jobs`} />,
  },
  {
    // guard: GuestGuard,
    path: `${baseAuthPath}/jobs`,
    component: lazy(() => import("../../Jobs/features/Jobs/Jobs")),
    layout: MainLayout,
  },
  {
    // guard: GuestGuard,
    path: `${baseAuthPath}/home`,
    component: lazy(() => import("../../Jobs/features/Jobs/Jobs")),
    layout: MainLayout,
  },
];

console.log(routes);
export default routes;

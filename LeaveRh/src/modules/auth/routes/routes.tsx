/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouteConfig } from "../../shared/routes/conf/types";
import { lazy } from "react";
import { Navigate } from "react-router-dom";
// import GuestGuard from "../../shared/guards/GuestGuard";
export const baseAuthPath = "/auth";
export const ROOT = "/";

const routes: RouteConfig[] = [
  {
    path: `${ROOT}`,
    // guard: GuestGuard,
    component: () => <Navigate to={`${baseAuthPath}/login`} />,
  },
  {
    // guard: GuestGuard,
    path: `${baseAuthPath}/login`,
    component: lazy(() => import("../features/Login/Login")),
    // layout: GuestLayout,
  },
  {
    // guard: GuestGuard,
    path: `${baseAuthPath}/signup`,
    component: lazy(() => import("../features/Signup/Signup")),
    // layout: GuestLayout,
  },
];

export default routes;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LazyLoad from "../components/LazyLoad/LazyLoad";
import { RouteConfig } from "./conf/types";
import pages from "./routes";

export const renderRoutes = (routes: RouteConfig[] = []) => {
  const location = useLocation();

  return (
    <Suspense fallback={<LazyLoad />}>
      <Routes location={location} key={location.pathname}>
        {routes.map((route, index) => {
          const Component = route.component;
          const Guard = route?.guard || Fragment;
          const Layout = route?.layout || Fragment;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Guard>
                  <Suspense>
                    <Layout>
                      <Component />
                    </Layout>
                  </Suspense>
                </Guard>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

const routes: RouteConfig[] = [...pages];

export default routes;

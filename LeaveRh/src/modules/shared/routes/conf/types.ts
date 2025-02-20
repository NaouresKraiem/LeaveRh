import { RouteProps } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

export type RouteConfig = {
  path: string;
  exact?: boolean;
  component: React.ComponentType<any>;
  guard?: React.ComponentType<any> | typeof Fragment | any;
  layout?: React.ComponentType<any> | typeof Fragment;
} & RouteProps;

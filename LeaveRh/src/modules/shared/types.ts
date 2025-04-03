import { ReactNode } from "react";

export interface RouteObject {
  path: string;
  element: ReactNode;
  children?: RouteObject[];
}

export interface IRouteItem {
  path: string;
  element: ReactNode;
  layout?: ({ children }: { children: ReactNode }) => ReactNode;
}

export interface IAuthData {
  email: string;
  password: string;
  name?: string;
}
export interface IButton {
  text: string;
  onClick: () => void;
}

export interface IHeader {
  title: string;
  subtitle: string;
}

export interface IRedirect {
  content: string;
  to: string;
  title: string;
}
export interface IForm {
  title: "Log In" | "Sign Up";
  handleAuth: (email: string, password: string) => void;
  isSignup: boolean;
}

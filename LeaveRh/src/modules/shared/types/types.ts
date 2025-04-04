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
  isLoading?: boolean;
  htmlType?: "button" | "submit" | "reset"
}

export interface IHeader {
  title: string;
  subtitle?: string;
}

export interface IRedirect {
  content: string;
  to: string;
  title: string;
}
export interface IForm {
  title: "Log In" | "Sign Up";
  handleAuth: (data:any) => void;
  isSignup: boolean;
}

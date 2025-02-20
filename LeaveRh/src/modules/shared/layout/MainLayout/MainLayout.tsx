import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <div>{children}</div>;
};

export default MainLayout;

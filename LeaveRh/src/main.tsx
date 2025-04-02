import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import themeConfig from "./theme/themeConfig.ts";

createRoot(document.getElementById("root")!).render(
  <ConfigProvider theme={themeConfig}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
);

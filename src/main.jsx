import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./hooks/useLOginContext.jsx";
import { LoginTimeProvider } from "./hooks/useUsetLoginLogoutContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LoginTimeProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </LoginTimeProvider>
    </BrowserRouter>
  </StrictMode>
);

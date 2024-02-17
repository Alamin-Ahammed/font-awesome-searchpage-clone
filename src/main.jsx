import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { FilterDataAndIconDataStorageProvider } from "./Context/FilterDataAndIconDataStorage.jsx";
import { CssBaseline } from "@mui/material";
import { All_Icons_API_Provider } from "./Context/All_Icons_API.jsx";
import { ResetAllProvider } from "./Context/ResetButton.jsx";
import { ViewStyleProvider } from "./Context/ViewStyle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <ResetAllProvider>
      <FilterDataAndIconDataStorageProvider>
        <All_Icons_API_Provider>
          <ViewStyleProvider>
            <RouterProvider router={router}>
              <App />
            </RouterProvider>
          </ViewStyleProvider>
        </All_Icons_API_Provider>
      </FilterDataAndIconDataStorageProvider>
    </ResetAllProvider>
  </React.StrictMode>
);

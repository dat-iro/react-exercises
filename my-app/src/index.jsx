import { React, StrictMode } from "react";
import { createRoot, render } from "react-dom";
import { App } from "./App";
import "./index.css"
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json())

const root = createRoot(document.getElementById("root"));
root.render(
<StrictMode>
  <SWRConfig value={{ fetcher }}>
    <App />
  </SWRConfig> 
</StrictMode>
);

import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App";
import "./index.css";

const domContainer = document.getElementById('root');
const root = createRoot(domContainer);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)
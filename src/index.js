import React, { StrictMode } from "react"
import {createRoot} from "react-dom/client"
import App from "./App";
import "./index.css";
import store from "./service/store";
import { Provider } from "react-redux";

const domContainer = document.getElementById('root');
const root = createRoot(domContainer);

root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from "react";
import App from "./components/app";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)
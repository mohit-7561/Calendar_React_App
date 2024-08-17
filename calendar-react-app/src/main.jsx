import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import EventProvider from "./context/EventProvider";

// Get the root element from the HTML file
const rootElement = document.getElementById("root");

// Create a root instance using React 18's createRoot
const root = createRoot(rootElement);

// Render the App component wrapped with the EventProvider
root.render(
  <React.StrictMode>
    <EventProvider>
      <App />
    </EventProvider>
  </React.StrictMode>
);

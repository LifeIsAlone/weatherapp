import React from "react";
import Dashboard from "./components/Dashboard";

export default function App() {
  if (
    process.env.REACT_APP_API_KEY_APPID === undefined ||
    process.env.REACT_APP_API_KEY_UNSPLASH === undefined
  ) {
    return (
      <h4>
        Please add .env and add follow REACT_APP_API_KEY &
        REACT_APP_API_KEY_UNSPLASH.
      </h4>
    );
  }
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

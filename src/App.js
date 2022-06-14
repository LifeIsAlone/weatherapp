import React from "react";
import Dashboard from "./components/Dashboard";

export default function App() {
  if (process.env.REACT_APP_API_KEY === undefined) {
    return <h4>Please add .env and add follow REACT_APP_API_KEY</h4>;
  }
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

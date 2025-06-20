import { useState } from "react";
import { TheamContext, TheamProvider } from "./contexts/TheamContext";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [query, setquery] = useState("");

  return (
    <TheamProvider>
      <Header />
      <Outlet />
    </TheamProvider>
  );
}

export default App;

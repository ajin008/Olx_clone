import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Main } from "./components/Main";
import { Details } from "./components/Details";
import { AuthProvider } from "./components/AuthProvider";

function App() {
  return (
    <AuthProvider></AuthProvider>
  );
}

export default App;

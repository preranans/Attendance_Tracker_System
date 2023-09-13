import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ViewAttendance from "./components/ViewAttendance.jsx";
import MarkAttendance from "./components/MarkAttendance.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/viewattendance" element={<ViewAttendance />}></Route>
        <Route path="/markattendance" element={<MarkAttendance />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

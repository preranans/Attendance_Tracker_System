import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ViewAttendance from "./components/ViewAttendance.jsx";
import MarkAttendance from "./components/MarkAttendance.jsx";
import AddStudent from "./components/AddStudent";
import Start from "./components/Start";
import Student_Login from "./components/Student_Login";
import Student_Dashboard from "./components/Student_Dashboard";
import ViewAttendanceStudent from "./components/ViewAttendanceStudent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/viewattendance" element={<ViewAttendance />}></Route>
        <Route path="/markattendance" element={<MarkAttendance />}></Route>
        <Route path="/addstudent" element={<AddStudent />}></Route>
        <Route path="/start" element={<Start />}></Route>
        <Route path="/studentlogin" element={<Student_Login />}></Route>
        <Route path="/studentdashboard" element={<Student_Dashboard />}></Route>
        <Route
          path="/viewattendancestudent"
          element={<ViewAttendanceStudent />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

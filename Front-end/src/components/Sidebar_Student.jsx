import React from "react";
import "./../../bootstrap-icons/font/bootstrap-icons.min.css";
import { Link } from "react-router-dom";

export default function Sidebar_Student(props) {
  const USN = props.USN;
  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <Link
          to="/"
          className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-5 d-none d-sm-inline">Menu</span>
        </Link>
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item">
            <Link
              to={`/studentdashboard/${USN}`}
              className="nav-link align-middle px-0 text-white"
            >
              <i className="fs-4 bi-house"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Home</span>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/markattendance"
              className="nav-link align-middle px-0 text-white"
            >
              {" "}
              <i className="fs-4 bi-check-circle"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Mark Attendance</span>
            </Link>
          </li> */}
          <li className="nav-item">
            <Link
              to={`/viewattendancestudent/${USN}`}
              className="nav-link align-middle px-0 text-white"
            >
              {" "}
              <i className="fs-4 bi-calendar-check"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">View Attendance</span>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/addstudent"
              className="nav-link align-middle px-0 text-white"
            >
              <i className="fs-4 bi-person-plus"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Add Student</span>
            </Link>
          </li> */}
          <li>
            <Link to="/start" className="nav-link align-middle px-0 text-white">
              <i className="fs-4 bi-box-arrow-right"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Logout</span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
}

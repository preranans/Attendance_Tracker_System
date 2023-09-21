import React from "react";
import { useNavigate } from "react-router-dom";

export default function Start() {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-25 w-md-50 w-lg-25 border loginForm">
        <h2>Login As</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mt-5">
          <button
            className="btn btn-primary btn-lg mb-3 mb-md-0"
            onClick={() => {
              navigate("/studentlogin");
            }}
          >
            Student
          </button>
          <button
            className="btn btn-success btn-lg"
            onClick={() => {
              navigate("/login");
            }}
          >
            Teacher
          </button>
        </div>
      </div>
    </div>
  );
}

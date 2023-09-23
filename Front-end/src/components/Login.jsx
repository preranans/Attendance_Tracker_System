import React, { useState } from "react";
import "./../styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const [error, setError] = useState("");
  const [showTerms, setShowTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/login", values)
      .then((res) => {
        console.log(res);
        if (res.data.Status === "Success") {
          navigate("/");
        } else {
          setError(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  const toggleTerms = () => {
    setShowTerms(!showTerms);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-25 border loginForm">
        <div className="text-danger">{error && error}</div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className="form-control rounded-0"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              className="form-control rounded-0"
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            {" "}
            Log in
          </button>
          <div>
            <a href="#" onClick={toggleTerms}>
              {showTerms ? "Hide Terms and Conditions" : "Show Terms and Conditions"}
            </a>
          </div>
          {showTerms && (
            <div>
              <h4>Terms and Conditions</h4>
              <ul style={{ textAlign: "left", marginLeft: "20px" }}>
                <li><strong>Usage:</strong> Agree to use for attendance tracking.</li>
                <li><strong>Accuracy:</strong> Ensure attendance record accuracy.</li>
                <li><strong>User Responsibility:</strong> Responsible for login details and data input.</li>
              </ul>
            </div>

          )}

          <input type="checkbox" name="checkbox1" required />
          <label htmlFor="checkbox1">
            {" "}
            <br></br> I agree to the terms and conditions
          </label>
          <br></br>
        </form>
      </div>
    </div>
  );
}

export default Login;

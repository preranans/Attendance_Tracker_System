import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";
export default function Student_Details() {
  // const styles = {
  //   padding: "5px", // Reduce padding
  //   border: "2px solid black",
  //   margin: "5px", // Reduce margin
  // };

  const containerStyle = {
    padding: "20px",
    border: "2px solid black",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "0 auto",
    backgroundColor: "white",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "24px",
    color: "black",
  };

  const labelStyle = {
    fontWeight: "bold",
    color: "#555",
  };

  const selectStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginTop: "5px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    marginTop: "10px",
    cursor: "pointer",
  };

  const [values, setValues] = useState({
    Name: "",
    USN: "",
    semester: 1,
    section: "A",
  });

  const [alert, setAlert] = useState({
    message: "",
    status: "",
  });

  // const [error, setError] = useState(0);

  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      status: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/addStudent", values)
      .then((res) => {
        console.log(res);
        if (res.data.Status === "Error") {
          // setError(0);
          showAlert("USN already exists", "danger");
        } else {
          // setError(1);
          showAlert("Inserted to database", "success");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Alert alert={alert} />

      <h3 style={headingStyle}>Enter Student Details</h3>
      <div className="container" style={containerStyle}>
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-2">
            <label htmlFor="studentName" style={labelStyle}>
              Student Name
            </label>
            <input
              type="text"
              className="form-control"
              id="studentName"
              name="Name"
              placeholder="Student Name"
              onChange={(e) => {
                setValues({ ...values, Name: e.target.value });
              }}
              autoComplete="name"
              required
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="studentUSN" style={labelStyle}>
              Student USN
            </label>
            <input
              type="text"
              className="form-control"
              id="studentUSN"
              name="USN"
              placeholder="Student USN"
              onChange={(e) => {
                setValues({ ...values, USN: e.target.value });
              }}
              autoComplete="usn"
              required
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="semester" style={labelStyle}>
              Select Semester
            </label>
            <select
              className="form-control"
              id="semester"
              name="semester"
              onChange={(e) => {
                setValues({ ...values, semester: Number(e.target.value) });
              }}
              autoComplete="semester"
              style={selectStyle}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="section" style={labelStyle}>
              Select Section
            </label>
            <select
              className="form-control"
              id="section"
              name="section"
              onChange={(e) => {
                setValues({ ...values, section: e.target.value });
              }}
              autoComplete="section"
              style={selectStyle}
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-3"
            style={buttonStyle}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

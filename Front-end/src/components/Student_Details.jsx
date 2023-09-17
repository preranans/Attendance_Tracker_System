import React, { useState } from "react";
import axios from "axios";
export default function Student_Details() {
  const styles = {
    padding: "5px", // Reduce padding
    border: "2px solid black",
    margin: "5px", // Reduce margin
  };

  const [values, setValues] = useState({
    Name: "",
    USN: "",
    semester: 1,
    section: "A",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/addStudent", values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <br></br>
      <h3>Enter Student Details</h3>
      <div className="container" style={styles}>
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-2">
            <label htmlFor="studentName">Student Name</label>
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
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="studentUSN">Student USN</label>
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
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="semester">Select Semester</label>
            <select
              className="form-control"
              id="semester"
              name="semester"
              onChange={(e) => {
                setValues({ ...values, semester: Number(e.target.value) });
              }}
              autoComplete="semester"
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
            <label htmlFor="section">Select Section</label>
            <select
              className="form-control"
              id="section"
              name="section"
              onChange={(e) => {
                setValues({ ...values, section: e.target.value });
              }}
              autoComplete="section"
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

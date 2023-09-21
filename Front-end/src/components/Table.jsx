import React, { useState } from "react";
import Table_List from "./Table_List";
import axios from "axios";

export default function Table() {
  const [values, setValues] = useState({
    semester: 1,
    section: "A",
  });

  const [error, setError] = useState(false);
  const [result, setResult] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/query", values)
      .then((res) => {
        if (res.data.Status === "Error") {
          setError(true);
          // setResult([]);
        } else {
          setError(false);
          setResult(res.data);
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const tableStyle = {
    background: "linear-gradient(to bottom, #cde6cb, #b1d8b7)",
    border: "1px solid #007bff",
  };

  const headerStyle = {
    backgroundColor: "#007bff",
    color: "white",
  };

  const evenRowStyle = {
    backgroundColor: "#cde6cb",
  };

  const oddRowStyle = {
    backgroundColor: "#b1d8b7",
  };

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
    marginLeft: "20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    width: "10%",
  };

  return (
    <div className="table-responsive">
      <h3>Mark Attendance</h3>
      <div className="m-2 p-3">
        <form className="form-inline my-2 my-lg-0 " onSubmit={handleSubmit}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="form-group m-2">
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
            <div className="form-group m-2">
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
              className="btn btn-outline-success my-2 my-sm-0 p-2"
              type="submit"
              style={buttonStyle}
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div>
        {error ? (
          <h6>No Records found</h6>
        ) : (
          result.length > 0 && (
            <table
              className="table table-bordered table-striped "
              style={tableStyle}
            >
              <thead style={headerStyle}>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">USN</th>
                  <th scope="col">Attendance</th>
                </tr>
              </thead>
              <tbody>
                {result.map((res, index) => {
                  return (
                    <Table_List
                      key={res.USN}
                      data={res}
                      index={index + 1}
                      class_Name={index % 2 === 0 ? "even-row" : "odd-row"}
                    />
                  );
                })}
              </tbody>
            </table>
          )
        )}
      </div>
    </div>
  );
}

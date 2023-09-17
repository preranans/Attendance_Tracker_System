import React, { useState } from "react";
import Table_List from "./Table_List";
import axios from "axios";

export default function Table() {
  const [values, setValues] = useState({
    semester: 0,
    section: "",
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
          setResult([]);
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

  return (
    <div className="table-responsive">
      <h3>Mark Attendance</h3>
      <div className="m-2 p-3">
        <form className="form-inline my-2 my-lg-0 " onSubmit={handleSubmit}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              className="form-control mr-sm-2 "
              type="search"
              placeholder="Enter Semester Number"
              name="semester"
              aria-label="Search"
              style={{ maxWidth: "25%", marginRight: "50px" }}
              onChange={(e) => {
                setValues({ ...values, semester: Number(e.target.value) });
              }}
              autoComplete="off"
              required
            />
            <input
              className="form-control mr-sm-2 my-3"
              type="search"
              placeholder="Enter Section"
              name="section"
              aria-label="Search"
              style={{ maxWidth: "25%" }}
              onChange={(e) => {
                setValues({
                  ...values,
                  section: e.target.value.toLocaleUpperCase(),
                });
              }}
              autoComplete="off"
              required
            />
          </div>
          <button
            className="btn btn-outline-success my-2 my-sm-0 p-2"
            type="submit"
          >
            Search
          </button>
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

import React, { useState } from "react";
import TableView_list from "./TableView_list";
import axios from "axios";

export default function TableView() {
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
        if (res.data.Status == "Error") {
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
  return (
    <div className="table-responsive">
      <h2>View Attendance </h2>
      <div className="m-2 p-3">
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
          <span>
            <input
              className="form-control mr-sm-2 "
              type="search"
              placeholder="Enter className"
              aria-label="Search"
              name="semester"
              style={{ maxWidth: "25%" }}
              onChange={(e) => {
                setValues({ ...values, semester: Number(e.target.value) });
              }}
              required
            />
            <input
              className="form-control mr-sm-2 "
              type="search"
              name="section"
              placeholder="Enter section"
              aria-label="Search"
              style={{ maxWidth: "25%" }}
              onChange={(e) => {
                setValues({
                  ...values,
                  section: e.target.value.toLocaleUpperCase(),
                });
              }}
              required
            />
          </span>
          <button
            className="btn btn-outline-success my-2 my-sm-0 p-2"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      {error ? (
        <h1>No Records found</h1>
      ) : (
        result.length > 0 && (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">USN</th>
                <th scope="col">Class</th>
                <th scope="col">Section</th>
                <th scope="col">No of days Present</th>
                <th scope="col">No of days Absent</th>
                <th scope="col">Present Percentage</th>
              </tr>
            </thead>
            <tbody>
              {result.map((res, index) => {
                return (
                  <TableView_list key={res.USN} data={res} index={index} />
                );
              })}
            </tbody>
          </table>
        )
      )}
    </div>
  );
}

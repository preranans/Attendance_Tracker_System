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
  return (
    <div className="table-responsive">
      <h2>Mark Attendance</h2>
      <div className="m-2 p-3">
        <form className="form-inline my-2 my-lg-0 " onSubmit={handleSubmit}>
          <span>
            <input
              className="form-control mr-sm-2 "
              type="search"
              placeholder="Enter className"
              name="semester"
              aria-label="Search"
              style={{ maxWidth: "25%" }}
              onChange={(e) => {
                setValues({ ...values, semester: Number(e.target.value) });
              }}
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
      <div>
        {error ? (
          <h6>No Records found</h6>
        ) : (
          result.length > 0 && (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name </th>
                  <th scope="col">USN</th>
                  <th scope="col">Attendance</th>
                </tr>
              </thead>
              <tbody>
                {result.map((res, index) => {
                  return (
                    <Table_List key={res.USN} data={res} index={index + 1} />
                  );
                })}
              </tbody>
            </table>
          )
        )}{" "}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Table_List from "./Table_List";
import axios from "axios";

export default function Table() {
  const [values, setValues] = useState({
    class_Name: 0,
    section: "",
  });

  const [result, setResult] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/query", values)
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div class="table-responsive">
      <h1>Mark Attendance</h1>
      <div class="m-2 p-3">
        <form class="form-inline my-2 my-lg-0 " onSubmit={handleSubmit}>
          <span>
            <input
              class="form-control mr-sm-2 "
              type="search"
              placeholder="Enter Class"
              aria-label="Search"
              style={{ maxWidth: "25%" }}
              onChange={(e) => {
                setValues({ ...values, class_Name: e.target.value.Number });
              }}
            />
            <input
              class="form-control mr-sm-2 my-3"
              type="search"
              placeholder="Enter Section"
              aria-label="Search"
              style={{ maxWidth: "25%" }}
              onChange={(e) => {
                setValues({ ...values, section: e.target.value });
              }}
            />
          </span>

          <button
            class="btn btn-outline-success my-2 my-sm-0 p-2"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      {result.length > 0 && (
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name </th>
              <th scope="col">USN</th>
              <th scope="col">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {result.map((result) => {
              <Table_List data={result} />;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

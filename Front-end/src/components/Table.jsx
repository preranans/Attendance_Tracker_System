import React, { useState } from "react";
import Table_List from "./Table_List";
import axios from "axios";

export default function Table() {
  const [values, setValues] = useState({
    class_Name: null,
    section: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/query", values)
      .then((res) => {
        console.log(res);
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
                setValues({ ...values, class_Name: e.target.value });
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
          <Table_List />
          <Table_List />
        </tbody>
      </table>
    </div>
  );
}

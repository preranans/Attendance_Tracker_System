import React, { useState } from "react";

export default function TableView() {
  const [values, setValues] = useState({
    class_Name: 0,
    section: "",
  });
  return (
    <div class="table-responsive">
      <h2>View Attendance by </h2>
      <div class="m-2 p-3">
        <form class="form-inline my-2 my-lg-0 ">
          <span>
            <input
              class="form-control mr-sm-2 "
              type="search"
              placeholder="Enter class"
              aria-label="Search"
              style={{ maxWidth: "25%" }}
            />
            <input
              class="form-control mr-sm-2 "
              type="search"
              placeholder="Enter section"
              aria-label="Search"
              style={{ maxWidth: "25%" }}
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
            <th scope="col">Name</th>
            <th scope="col">USN</th>
            <th scope="col">Class</th>
            <th scope="col">No of days Present</th>
            <th scope="col">No of days Absent</th>
            <th scope="col">Present Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Peri</td>
            <td>116</td>
            <td>6b</td>
            <td>63</td>
            <td>64</td>
            <td>78.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

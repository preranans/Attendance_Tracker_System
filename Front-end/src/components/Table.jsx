import React from "react";
import Table_List from "./Table_List";

export default function Table() {
  return (
    <div class="table-responsive">
      <h1>Mark Attendance</h1>
      <div class="m-2 p-3">
        <form class="form-inline my-2 my-lg-0 ">
          <span>
            <input
              class="form-control mr-sm-2 "
              type="search"
              placeholder="Search"
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

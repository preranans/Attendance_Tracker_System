import React, { useEffect, useState } from "react";
import TableView_list from "./TableView_list";
import axios from "axios";

export default function TableViewStudent(props) {
  const [USN, setUSN] = useState({
    USN: props.USN,
  });

  //   const [error, setError] = useState(false);
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:8081/viewstudent", USN)
      .then((res) => {
        if (res.data.Status === "Error") {
          // setError(true);
          setResult([]);
        } else {
          // setError(false);
          setResult(res.data);
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const tableStyle = {
    background: "linear-gradient(to bottom, #cde6cb, #b1d8b7)",
    border: "1px solid #007bff",
  };

  const headerStyle = {
    backgroundColor: "#007bff",
    color: "white",
  };

  const inputStyle = {
    maxWidth: "25%",
    marginRight: "20px", // Reduced right margin
  };

  const buttonStyle = {
    marginTop: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
  };

  return (
    <div className="table-responsive">
      <h3>View Attendance</h3>
      <div className="m-2 p-3"></div>
      <table className="table table-bordered table-striped" style={tableStyle}>
        <thead style={headerStyle}>
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
            return <TableView_list key={res.USN} data={res} index={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

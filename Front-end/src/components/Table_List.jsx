import React, { useState } from "react";
import axios from "axios";

export default function Table_List(props) {
  const [show, setShow] = useState(true);
  const [marked, setMarked] = useState(false);
  // const [isPresent, setIsPresent] = useState(false); // This is a flag to identify if a student is present or not
  const handlePresent = () => {
    //use axios to upload to backend
    // setIsPresent(true);
    setShow(false);
    setMarked(true);
    axios
      .post(
        "http://localhost:8081/update",
        {
          id: props.data.USN,
          Present: true,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleAbsent = () => {
    //use axios to upload to backend
    // setIsPresent(false);
    setShow(false);
    setMarked(true);
    axios
      .post(
        "http://localhost:8081/update",
        {
          id: props.data.USN,
          Present: false,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <tr key={props.data.USN}>
      <th scope="row">{props.index}</th>
      <td>{props.data.Name}</td>
      <td>{props.data.USN}</td>
      <td>
        {show && (
          <>
            <button
              type="button"
              className="btn btn-success m-2"
              onClick={handlePresent}
            >
              Present
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleAbsent}
            >
              Absent
            </button>
          </>
        )}
        {marked && (
          <button type="button" className="btn btn-primary">
            Marked
          </button>
        )}
      </td>
    </tr>
  );
}

import React, { useState } from "react";

export default function Table_List(props) {
  const [show, setShow] = useState(true);
  const [marked, setMarked] = useState(false);
  const [isPresent, setIsPresent] = useState(false); // This is a flag to identify if a student is present or not
  const handlePresent = () => {
    //use axios to upload to backend
    setIsPresent(true);
    setShow(false);
    setMarked(true);
  };
  const handleAbsent = () => {
    //use axios to upload to backend
    setIsPresent(false);
    setShow(false);
    setMarked(true);
  };
  return (
    <tr key={props.data.usn}>
      <th scope="row">1</th>
      <td>{props.data.name}</td>
      <td>{props.data.usn}</td>
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
          <button type="button" classNameName="btn btn-primary">
            Marked
          </button>
        )}
      </td>
    </tr>
  );
}

import React, { useState } from "react";

export default function Table() {
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
    <div class="table-responsive">
      <h1>Mark Attendance</h1>
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
          <tr>
            <th scope="row">1</th>
            <td>Peri</td>
            <td>116</td>
            <td>
              {show && (
                <>
                  <button
                    type="button"
                    class="btn btn-success m-2"
                    onClick={handlePresent}
                  >
                    Present
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={handleAbsent}
                  >
                    Absent
                  </button>
                </>
              )}
              {marked && (
                <button type="button" class="btn btn-primary">
                  Marked
                </button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

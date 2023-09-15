import React from "react";

export default function TableView_list(props) {
  return (
    <tr key={props.data.USN}>
      <th scope="row">{props.index + 1}</th>
      <td>{props.data.Name}</td>
      <td>{props.data.USN}</td>
      <td>{props.data.Class}</td>
      <td>{props.data.Section}</td>
      <td>{props.data.No_Present}</td>
      <td>{props.data.No_Absent}</td>
      <td>{props.data.Percentage}</td>
    </tr>
  );
}

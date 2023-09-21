import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar_Student from "./Sidebar_Student";
import TableView from "./TableView";
import { useParams } from "react-router-dom";
import TableViewStudent from "./TableViewStudent";

export default function ViewAttendanceStudent() {
  // const values = props.USN;
  let { USN } = useParams();
  // console.log(USN);
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar_Student USN={USN} />
        <div className="col p-0">
          <div className="container p-0">
            <Header />
          </div>
          <div>
            <TableViewStudent USN={USN} />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar_Student from "./Sidebar_Student";
import TableView from "./TableView";
export default function ViewAttendanceStudent(props) {
  const values = props.location?.state?.USN;
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar_Student />
        <div className="col p-0">
          <div className="container p-0">
            <Header />
          </div>
          <div>
            <TableView />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "../../bootstrap-icons/font/bootstrap-icons.min.css";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import TableView from "./TableView";

export default function ViewAttendance() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
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

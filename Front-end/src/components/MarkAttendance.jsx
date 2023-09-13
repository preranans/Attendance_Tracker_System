import React from "react";
import "../../bootstrap-icons/font/bootstrap-icons.min.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Table from "./Table";

export default function MarkAttendance() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <div className="col p-0">
          <div className="container p-0">
            <Header />
          </div>
          <div>
            <Table />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

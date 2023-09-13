import React from "react";
import "./../../bootstrap-icons/font/bootstrap-icons.min.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
export default function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <div className="col p-0">
          <div className="container p-0 m-0">
            <Header />
          </div>
          <div>
            <MainContent />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

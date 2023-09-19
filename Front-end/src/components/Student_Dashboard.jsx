import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import Sidebar_Student from "./Sidebar_Student";
import { useParams } from "react-router-dom";
export default function Student_Dashboard() {
  // const values = props.location?.state?.value;

  // console.log(props.location?.state);
  let { USN } = useParams();
  console.log(USN);
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar_Student USN={USN} />
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

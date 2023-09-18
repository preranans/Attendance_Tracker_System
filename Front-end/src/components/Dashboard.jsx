import React, { useNavigate } from "react";
import "./../../bootstrap-icons/font/bootstrap-icons.min.css";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
export default function Dashboard() {
  // const navigate = useNavigate();
  // axios.defaults.withCredentials = true;
  // useEffect(() => {
  //   axios.get("http://localhost:8081/dashboard").then((res) => {
  //     if (res.data.Status === "Success") {
  //       // if (res.data.role === "admin") {
  //       //   navigate("/");
  //       // } else {
  //       //   // const id = res.data.id;
  //       //   // navigate("/employeedetail/" + id);
  //       // }
  //     } else {
  //       // navigate("/start");
  //       navigate("/login");
  //     }
  //   });
  // }, []);
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

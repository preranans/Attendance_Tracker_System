import React from "react";
import "./../styles.css";
import image from "./../Imagess/logo.png";

export default function Header() {
  const styles = {
    fontFamily: "cursive",
    fontSize: "30px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    color: "white",
    display: "flex",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#360975",
    justifyContent: "center",
  };

  const imgStyle = {
    width: "80px",
    height: "80px",
    marginRight: "20px",
  };

  return (
    <div style={styles}>
      <img src={image} alt="Logo" style={imgStyle} />
      <span style={{ fontFamily: "cursive", fontSize: "36px" }}>
        Attendance Tracker System
      </span>
    </div>
  );
}

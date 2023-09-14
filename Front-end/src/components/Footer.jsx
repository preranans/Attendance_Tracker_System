import React from "react";

export default function Footer() {
  const styles = {
    possition: "fixed",
    bottom: "0px",
    top: "1000px",
    backgroundColor: "#ccb3ff",
    color: "black",
    width: "100%",
  };
  return (
    <footer style={{ position: "relative" }}>
      <div style={styles}>Contact us</div>
    </footer>
  );
}

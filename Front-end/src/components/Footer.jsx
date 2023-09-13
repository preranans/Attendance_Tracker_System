import React from "react";

export default function Footer() {
  const styles = {
    possition: "relative",
    bottom: "0px",
    top: "1000px",
    backgroundColor: "grey",
    color: "white",
    width: "100%",
  };
  return (
    <footer style={{ position: "relative" }}>
      <div style={styles}>Contact us</div>
    </footer>
  );
}

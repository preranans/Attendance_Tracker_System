import React from "react";

export default function Footer() {
  const styles = {
    position: "fixed",
    bottom: "0",
    backgroundColor: "#360975",
    color: "white",
    width: "100%",
    // paddingLeft: "40%",
    justifyContent: 'center',
    alignItems: "center",
    display: "flex",
  };
  const styles1 = {
    marginRight: '15px',
    marginLeft: '15px'
  }

  const email = "nsprerana@gmail.com";
  const phoneNumber = "+917829639815";


  const sendEmail = () => {
    window.location.href = `mailto:${email}`;
  };


  const makeCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <footer style={styles}>
      <div>
        Contact us:{"    "}
        <a style={styles1} href={`mailto:${email}`} className="ml-2" onClick={sendEmail}>
          <i className="bi bi-envelope"></i>
        </a>
        <span className="ml-4">
          <i className="bi bi-telephone"></i>
          <a href={`tel:${phoneNumber}`} className="ml-2" onClick={makeCall}>
            {phoneNumber}
          </a>
        </span>
      </div>
    </footer>
  );
}

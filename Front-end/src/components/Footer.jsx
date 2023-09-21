import React from "react";

export default function Footer() {
  const styles = {
    position: "fixed",
    bottom: "0",
    backgroundColor: "#360975",
    color: "white",
    width: "100%",
    padding: "5px",
    justifyContent: "center", // Center align contents
    alignItems: "center",
    display: "flex",
  };

  const styles1 = {
    marginRight: "15px",
    marginLeft: "15px",
  };

  const email = "nsprerana@gmail.com";
  const phoneNumber = "+91 7829639815"; // Add your phone number here

  // Function to open the default email client when the envelope icon is clicked
  const sendEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  // Function to initiate a call when the phone icon is clicked
  const makeCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <footer style={styles}>
      <div>
        Contact us:{"    "}
        <a
          style={styles1}
          href={`mailto:${email}`}
          className="ml-2"
          onClick={sendEmail}
        >
          <i className="bi bi-envelope"></i>
        </a>
        <span className="ml-4">
          <i className="bi bi-telephone"></i>
          <a href={`tel:${phoneNumber}`} className="ml-2" onClick={makeCall}>
            {phoneNumber} {/* Use {" "} for space */}
          </a>
        </span>
      </div>
    </footer>
  );
}

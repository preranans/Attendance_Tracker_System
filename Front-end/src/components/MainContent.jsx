import React from "react";

const mainContentStyle = {
  textAlign: "left",
  margin: "0 auto",
  width: "80%",
  padding: "20px",
  backgroundColor: "#f5f5f5",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  fontFamily: "'Montserrat', sans-serif",
};

const subheaderStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px",
  color: "#555",
  fontFamily: "'Montserrat', sans-serif",
};

const bulletPointStyle = {
  listStyleType: "disc",
  marginLeft: "20px",
};

export default function MainContent() {
  return (
    <div style={mainContentStyle}>
      <p style={{ fontSize: "24px", fontWeight: "bold", color: "#333", marginBottom: "16px" }}>
        <center>Welcome to the Attendance Tracker System</center>
      </p>
      <p style={{ fontSize: "18px", color: "#666", lineHeight: "1.5" }}>
        Simplify attendance management for teachers and empower students to effortlessly track their attendance with our user-friendly system.
      </p>

      <br />
      <h2 style={subheaderStyle}>For Teachers:</h2>
      <ul style={bulletPointStyle}>
        <li>
          Add Student Details: Easily input and maintain student information,
          including names and Uinversity Seat Numbers, creating a
          comprehensive database.
        </li>
        <li>
          Mark Attendance: Mark student attendance with just a few clicks.
          Select the semester, specify the section, and mark students as 'present'
          or 'absent' quickly and efficiently.
        </li>
        <li>
          View Attendance Records: Access and review attendance records for each
          class or section. Stay organized and keep track of students' attendance
          histories.
        </li>
        <li>
          Log In and Log Out: Teachers can securely log in and out of the system
          to ensure data privacy and protection.
        </li>
      </ul>
      <br />
      <h2 style={subheaderStyle}>For Students:</h2>
      <ul style={bulletPointStyle}>
        <li>
          Student Login: Students can log in to access their attendance information.
        </li>
        <li>
          View Attendance: Upon logging in, students can view the number of
          classes attended, the number of classes missed, and their overall
          attendance percentage.
        </li>
        <li>
          Stay Informed: Our system keeps students informed about their
          attendance status, helping them take control of their academic
          responsibilities.
        </li>
      </ul>
      <br />
      <h2 style={subheaderStyle}>Why Choose Us:</h2>
      <ul style={bulletPointStyle}>
        <li>
          Simplicity: We understand that not every project needs to be
          complicated. Our system focuses on the essential features required for
          attendance tracking, ensuring a straightforward user experience.
        </li>
        <li>
          Efficiency: Teachers can efficiently manage attendance, and students
          can access their data with ease, saving time for both.
        </li>
      </ul>
      <br />
      <h2 style={subheaderStyle}>Getting Started:</h2>
      <p>
        Experience the simplicity and efficiency of the College Attendance
        Tracker System. Whether you're a teacher looking for an easy way to
        manage attendance or a student interested in tracking your progress, our
        platform is here to help. Join us in simplifying attendance management
        for a more organized and informed academic journey.
      </p>
    </div>
  );
}

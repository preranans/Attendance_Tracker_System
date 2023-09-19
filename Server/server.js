import express from "express";
import mysql from "mysql";
import cors from "cors";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Attendance_Tracking_System",
});

con.connect(function (err) {
  if (err) {
    console.log("Error in Connection");
  } else {
    console.log("Connected");
  }
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM user WHERE email = ? AND  password = ?";
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err)
      return res.json({
        Status: "Error",
        Error: "Error in running query" + err,
      });
    if (result.length > 0) {
      // const id = result[0].id;
      // const token = jwt.sign(id, "jwt-secret-key", { expiresIn: "1d" });
      // res.cookie("token", token);
      // console.log("Success");
      return res.json({ Status: "Success" });
    } else {
      return res.json({ Status: "Error", Error: "Wrong Email or Password" });
    }
  });
});
// app.get('/logout', (req, res) => {
//     res.clearCookie('token');
//     return res.json({ Status: "Success" });
// })

app.post("/query", (req, res) => {
  const sql = "SELECT * FROM Student WHERE class = ? AND section = ?";
  con.query(sql, [req.body.semester, req.body.section], (err, result) => {
    if (err) {
      return res.json({
        Status: "Error",
        Error: "Error in running query" + err,
      });
    }
    if (result.length > 0) {
      return res.json(result);
    } else {
      return res.json({ Status: "Error", Error: "No records found" });
    }
  });
});

app.post("/update", (req, res) => {
  const id = req.body.id;
  const isPresent = req.body.Present;
  const sql1 = "UPDATE Student SET No_Present=No_Present+1 WHERE USN = ?";
  const sql2 = "UPDATE Student SET No_Absent=No_Absent+1 WHERE USN = ?";
  if (isPresent) {
    con.query(sql1, [id], (err, result) => {
      if (err) {
        return res.json({
          Status: "Error",
          Error: "Unable to update due to " + err,
        });
      }
      return res.json(result);
    });
  } else {
    con.query(sql2, [id], (err, result) => {
      if (err) {
        return res.json({
          Status: "Error",
          Error: "Unable to update due to " + err,
        });
      }
      return res.json(result);
    });
  }
});

app.post("/updatePercentage", (req, res) => {
  // console.log("Received the request at /updatePercentage");
  const id = req.body.id;
  const percentage = req.body.percentage;
  // console.log(id);
  // console.log(percentage);
  const sql3 = "UPDATE Student SET Percentage = CAST(? AS DOUBLE) WHERE USN=?";

  con.query(sql3, [percentage, id], (err, result) => {
    if (err) {
      return res.json({
        Status: "Error",
        Error: "Unable to update due to " + err,
      });
    }
    // Check for SQL warnings
    const warn = "SHOW WARNINGS";
    con.query(warn, (warningErr, warnings) => {
      if (warningErr) {
        return res.json({
          Status: "Error",
          Error: "Unable to retrieve warnings due to " + warningErr,
        });
      }

      // Include warnings in the response
      const response = {
        Status: "Success",
        Result: result,
        Warnings: warnings,
      };
      // console.log(response);

      return res.json(response);
    });
  });
});

// const mysql = require("mysql2/promise");

// // Assuming you have already created a connection pool
// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "Attendance_Tracking_System",
// });

// app.post("/updatePercentage", async (req, res) => {
//   console.log("Received the request at /updatePercentage");
//   const id = req.body.id;
//   const percentage = req.body.precent;
//   const sql3 = "UPDATE Student SET Percentage = CAST(? AS DOUBLE) WHERE USN=?";

//   try {
//     const [result] = await pool.execute(sql3, [percentage, id]);

//     // Retrieve warnings
//     const [rows] = await pool.execute("SHOW WARNINGS");
//     const warnings = rows.map((row) => row.Message);

//     const response = {
//       Status: "Success",
//       Result: result,
//       Warnings: warnings,
//     };

//     return res.json(response);
//   } catch (err) {
//     return res.json({
//       Status: "Error",
//       Error: "Unable to update due to " + err.message,
//     });
//   }
// });

// const verifyUser = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.json({ Error: "You are no Authenticated" });
//   } else {
//     jwt.verify(token, "jwt-secret-key", (err, decoded) => {
//       if (err) return res.json({ Error: "Token wrong" });
//       // req.role = decoded.role;
//       // req.id = decoded.id;
//       next();
//     });
//   }
// };

// app.get("/dashboard", verifyUser, (req, res) => {
//   return res.json({ Status: "Success", role: req.role, id: req.id });
// });

app.post("/addStudent", (req, res) => {
  const { Name, USN, semester, section } = req.body;
  console.log("Receiving at addstudent");
  const insert = "INSERT INTO Student(Name,USN,Class, Section) VALUES(?,?,?,?)";
  const values = [Name, USN, semester, section];
  console.log(Name);
  console.log(section);
  console.log(USN);
  console.log(semester);

  con.query(insert, values, (err, result) => {
    if (err) {
      return res.json({
        Status: "Error",
        Error: "Values not inserted to database" + err,
      });
    }
    return res.json(result);
  });
});

app.post("/studentlogin", (req, res) => {
  console.log("Running in student login ");
  const usn = req.body.USN;
  const sql = "SELECT * FROM Student WHERE USN = ? AND Password = ?";
  con.query(sql, [req.body.USN, req.body.Password], (err, result) => {
    if (err) {
      return res.json({
        Status: "Error",
        Error: "Error in running query " + err,
      });
    }
    if (result.length > 0) {
      return res.json({ Status: "Success", USN: usn });
    } else {
      return res.json({ Status: "Error", Error: "Wrong USN or Password" });
    }
  });
});

app.post("/viewstudent", (req, res) => {
  console.log("running in usn");
  // const usn = req.body.USN;
  const sql = "SELECT * FROM Student WHERE USN = ?";
  con.query(sql, [req.body.USN], (err, result) => {
    if (err) {
      return res.json({
        Status: "Error",
      });
    }
    console.log(result);
    return res.json(result);
  });
});

app.listen(8081, () => {
  console.log("Running");
});

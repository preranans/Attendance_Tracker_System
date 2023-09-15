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
  const sql = "SELECT * FROM user Where email = ? AND  password = ?";
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err)
      return res.json({
        Status: "Error",
        Error: "Error in running query" + err,
      });
    if (result.length > 0) {
      // const id = result[0].id;
      // const token = jwt.sign({role: "admin"}, "jwt-secret-key", {expiresIn: '1d'});
      // res.cookie('token', token);
      // console.log("Success")
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
  const sql3 = "SELECT No_Present from Student where id= ?";
  const sql4 = "SELECT No_Absent from Student where id=?";
});

app.listen(8081, () => {
  console.log("Running");
});

import cors from "cors";
import Express from "express";
import { studentDB } from "./server/database/models/student.db.js";

const app = Express();
app.use(Express.json());

app.use(cors());
let arrStudentData = studentDB;

app.post("/api/InsertStudent", (req, res) => {
  let newStudent = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
  };
  arrStudentData.push(newStudent);
  res.send(newStudent);
});

app.delete("/api/InsertStudent/:firstname", (req, res) => {
  let newArrS = arrStudentData.filter(
    (a) => a.firstname !== req.params.firstname
  );
  arrStudentData = newArrS;
  res.send();
});

app.get("/api/InsertStudent", (req, res) => {
  res.send(arrStudentData);
});

app.listen(4000);

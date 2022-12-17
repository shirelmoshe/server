import React, { useEffect, useState } from "react";
import { getStudentServers, remmoveStudent } from "../../Servers/servers";
import { StudentRow } from "../studentRow/studentRow.component";

export const StudentList = () => {
  const [studentArr, setstudentArr] = useState([]);

  let getStudent = async () => {
    let arr = await getStudentServers();
    setstudentArr(arr);
  };
  useEffect(() => {
    getStudent();
  }, []);
  const handleremoveStudent = async (studentFirstName) => {
    await remmoveStudent(studentFirstName);
    let newStudent = studentArr.filter((a) => a.firstname !== studentFirstName);
    setstudentArr(newStudent);
    console.log("lama");
  };
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Age</th>
          <th scope="col">Operation</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        {studentArr.length > 0
          ? studentArr.map((a) => {
              console.log("map");
              return (
                <StudentRow
                  firstname={a.firstname}
                  lastname={a.lastname}
                  age={a.age}
                  removeStudent={handleremoveStudent}
                />
              );
            })
          : "loading"}
      </tbody>
    </table>
  );
};

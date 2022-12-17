import React from "react";
import { StudentInput } from "../../components/addStudents/addStudent.component";
import { StudentList } from "../../components/studentList/student.list.component";

export const InsertStudent = () => {
  return (
    <>
      <StudentInput />
      <StudentList />
    </>
  );
};

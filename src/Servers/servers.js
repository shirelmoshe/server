import axios from "axios";

export const addStudentServers = async (studest) => {
  await axios.post("http://localhost:4000/api/InsertStudent", studest);
};
export const getStudentServers = async () => {
  let newStudent = "http://localhost:4000/api/InsertStudent";
  let newStudentServer = await axios.get(newStudent);
  return newStudentServer.data;
};
export const remmoveStudent = async (firstname) => {
  await axios.delete(`http://localhost:4000/api/InsertStudent/${firstname}`);
};

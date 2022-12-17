import React, { useState } from "react";
import { addStudentServers } from "../../Servers/servers";

export const StudentInput = () => {
  const [firstname, setfirstname] = useState(" ");
  const [lastname, setlastname] = useState(" ");
  const [age, setage] = useState(" ");

  let hendleNewStudent = async () => {
    await addStudentServers({
      firstname: firstname,
      lastname: lastname,
      age: age,
    });
  };
  return (
    <>
      <div className="input-group mb-3">
        <button className="btn btn-info" id="inputGroup-sizing-default">
          First name
        </button>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={(a) => {
            setfirstname(a.target.value);
          }}
        />
      </div>
      <div className="input-group mb-3">
        <button className="btn btn-info" id="inputGroup-sizing-default">
          Last name
        </button>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={(a) => {
            setlastname(a.target.value);
          }}
        />
      </div>
      <div className="input-group mb-3">
        <button
          className="btn btn-info"
          id="inputGroup-sizing-default"
          onClick={hendleNewStudent}
        >
          Age
        </button>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={(a) => {
            setage(a.target.value);
          }}
        />
      </div>
    </>
  );
};

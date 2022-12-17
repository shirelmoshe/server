import React from "react";

export const StudentRow = ({ firstname, lastname, age, removeStudent }) => {
  return (
    <tr>
      <th scope="row"></th>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{age}</td>
      <td>
        <button
          className="btn btn-info"
          id="inputGroup-sizing-default"
          onClick={() => removeStudent(firstname)}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

import React, { useContext } from "react";
import Task from "./Task";
import Context from "../../Context/context";

export default function TaskList() {
  const { data } = useContext(Context);

  return (
    <>
      <br className='my-4' />
      {Object.keys(data).length > 0 && (
        <table className='table rounded'>
          <thead>
            <tr>
              <th>Select</th>
              <th>Title</th>
              <th>Description</th>

              <th>Due Date</th>
              <th>Edit / Delete</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((each) => (
              <Task idOfTask={each} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

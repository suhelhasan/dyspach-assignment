import React, { useContext, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Context from "../../Context/context";

export default function Task({ idOfTask }) {
  const {
    data,
    saveData,
    updateData,
    deleteData,
    activeEditID,
    setActiveEditID,
  } = useContext(Context);

  let toggleTask = (id) => {
    let obj = { ...data[id] };
    obj.completed = !data[id].completed;
    console.log("OBJ", obj);
    updateData(id, obj);
  };
  let deleteTask = (id) => {
    deleteData(id);
  };
  let editTask = (id) => {
    if (!activeEditID) {
      setActiveEditID(id);
    } else {
      setActiveEditID("");
    }
  };
  return (
    <tr>
      <td>
        <input
          type='checkbox'
          defaultChecked={data[idOfTask].completed}
          onChange={() => toggleTask(idOfTask)}
          aria-label='...'
        />
      </td>
      <td>
        <p
          className={`small fw-normal mb-0 ${
            data[idOfTask].completed && "linethrough"
          }`}
        >
          {data[idOfTask].title}
        </p>
      </td>
      <td>
        <p
          className={`small fw-normal mb-0 ${
            data[idOfTask].completed && "linethrough"
          }`}
        >
          {data[idOfTask].description}
        </p>
      </td>

      <td>
        <p
          className={`small fw-normal mb-0 ${
            data[idOfTask].completed && "linethrough"
          }`}
        >
          <i className='fas fa-hourglass-half me-2 text-warning'></i>
          {new Date(data[idOfTask].dueDate).toLocaleDateString()}
        </p>
      </td>
      <td>
        <a
          href='#!'
          className='text-info'
          data-mdb-toggle='tooltip'
          title='Edit todo'
        >
          <i
            className='fas fa-pencil-alt me-3'
            onClick={() => editTask(idOfTask)}
          ></i>
        </a>

        <a
          href='#!'
          className='text-danger'
          data-mdb-toggle='tooltip'
          title='Delete todo'
        >
          <i
            className='fas fa-trash-alt'
            onClick={() => deleteTask(idOfTask)}
          ></i>
        </a>
      </td>
    </tr>
  );
}

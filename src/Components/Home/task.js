import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Context from "../../Context/context";
import "./style.css";
export default function Task() {
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
    <>
      <br className='my-4' />

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
          {Object.keys(data).length > 0 &&
            Object.keys(data).map((each) => (
              <tr>
                <td>
                  <input
                    type='checkbox'
                    defaultChecked={data[each].completed}
                    onChange={() => toggleTask(each)}
                    aria-label='...'
                  />
                </td>
                <td>
                  <p
                    className={`small fw-normal mb-0 ${
                      data[each].completed && "linethrough"
                    }`}
                  >
                    {data[each].title}
                  </p>
                </td>
                <td>
                  <p
                    className={`small fw-normal mb-0 ${
                      data[each].completed && "linethrough"
                    }`}
                  >
                    {data[each].description}
                  </p>
                </td>

                <td>
                  <p
                    className={`small fw-normal mb-0 ${
                      data[each].completed && "linethrough"
                    }`}
                  >
                    <i className='fas fa-hourglass-half me-2 text-warning'></i>
                    {new Date(data[each].dueDate).toLocaleDateString()}
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
                      onClick={() => editTask(each)}
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
                      onClick={() => deleteTask(each)}
                    ></i>
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

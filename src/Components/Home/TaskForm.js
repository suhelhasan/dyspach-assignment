import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Context from "../../Context/context";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./style.css";

export default function TaskForm() {
  const { data, saveData, updateData, activeEditID } = useContext(Context);
  const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (activeEditID) {
      setTitle(data[activeEditID].title);
      setDescription(data[activeEditID].description);
      setStartDate(new Date(data[activeEditID].dueDate));
    } else {
      setTitle("");
      setDescription("");
      setStartDate(new Date());
    }
  }, [activeEditID]);

  let onSave = (e) => {
    e.preventDefault();
    let obj = {
      title: title,
      description: description,
      dueDate: startDate,
      completed: false,
    };

    if (obj.title.length > 3 && obj.description.length > 3) {
      toast.success("Task Added");
      saveData(obj);
      setDescription("");
      setTitle("");
      setStartDate(new Date());
    } else if (obj.title.length <= 3 || obj.description.length <= 3) {
      toast.warning("Please write proper title and description");
    }
  };
  let update = (e) => {
    e.preventDefault();
    let obj = {
      title: title,
      description: description,
      dueDate: startDate,
      completed: false,
    };
    if (obj.title.length > 3 && obj.description.length > 3) {
      toast.success("Task Updated");
      updateData(activeEditID, obj);
      setDescription("");
      setTitle("");
      setStartDate(new Date());
    } else if (obj.title.length <= 3 || obj.description.length <= 3) {
      toast.warning("Please write proper title and description");
    }
  };

  return (
    <div className='pb-2'>
      <ToastContainer />
      <div className='card'>
        <div className='card-body'>
          <label>Title: </label>
          <input
            type='text'
            className='form-control form-control-lg'
            id='exampleFormControlInput1'
            placeholder='add title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />

          <label>Description: </label>
          <input
            type='text'
            className='form-control form-control-lg'
            id='exampleFormControlInput1'
            placeholder='add description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />

          <label>Select Date: </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <br />

          <div className='d-flex flex-row align-items-center'>
            <button
              type='button'
              className='btn btn-primary btn-dataSave'
              onClick={(e) => (activeEditID ? update(e) : onSave(e))}
            >
              {activeEditID ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

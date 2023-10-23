import React, { useEffect, useState } from "react";
import Context from "./context";
import { v4 as uuidv4 } from "uuid";

export default function Provider({ children }) {
  let [data, setData] = useState({});
  let [activeEditID, setActiveEditID] = useState("");

  useEffect(() => {
    let storedValue = JSON.parse(localStorage.getItem("tasksNew2") || "{}");
    setData(storedValue);
  }, []);

  let saveData = (obj) => {
    let allData = { ...data, [uuidv4()]: obj };
    setData({ ...allData });
    localStorage.setItem("tasksNew2", JSON.stringify(allData));
  };
  let updateData = (id, value) => {
    let newData = { ...data, [id]: value };
    setData(newData);
    localStorage.setItem("tasksNew2", JSON.stringify(newData));
  };
  let deleteData = (id) => {
    let allData = { ...data };
    delete allData[id];
    setData({ ...allData });
    localStorage.setItem("tasksNew2", JSON.stringify(allData));
  };

  return (
    <Context.Provider
      value={{
        data,
        saveData,
        updateData,
        deleteData,
        activeEditID,
        setActiveEditID,
      }}
    >
      {children}
    </Context.Provider>
  );
}

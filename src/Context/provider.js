import React, { useEffect, useState } from "react";
import Context from "./context";
import { v4 as uuidv4 } from "uuid";

export default function Provider({ children }) {
  let [data, setData] = useState(
    {}
    // JSON.parse(localStorage.getItem("tasksNew1") || "{}")
  );
  let [activeEditID, setActiveEditID] = useState("");
  useEffect(() => {
    let storedValue = JSON.parse(localStorage.getItem("tasksNew2") || "{}");
    setData(storedValue);
    console.log("storedValue", storedValue);
  }, []);
  // storedValue = storedValue && JSON.parse(storedValue);
  // console.log("JSON.parse", data);

  let saveData = (obj) => {
    let allData = { ...data, [uuidv4()]: obj };
    setData({ ...allData });
    localStorage.setItem("tasksNew2", JSON.stringify(allData));
  };
  let updateData = (id, value) => {
    // localStorage.setItem("tasksNew1", JSON.stringify(value));
    let newData = { ...data, [id]: value };
    console.log("HEllo", newData[id]);

    // newData[id] = value;
    setData(newData);
    localStorage.setItem("tasksNew2", JSON.stringify(newData));
    // saveData(newData);
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

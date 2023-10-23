import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import NotFound from "../Components/NotFound";

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

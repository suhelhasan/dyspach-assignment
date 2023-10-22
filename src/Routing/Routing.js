import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
// import Blogs from "../Components/Blogs/Blogs";
// import Post from "../Components/Blogs/Post/Post";
// import NotFound from "../Components/NotFound/PageNotFound";
// import Projects from "../Components/Projects/Projects";

export default function Routing({ devDetails, github }) {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />

        {/* <Route exact path='/blog' component={Blogs} />

        <Route exact path='/projects' component={Projects} /> */}
        {/* <Route component={NotFound} /> */}
      </Routes>
    </div>
  );
}

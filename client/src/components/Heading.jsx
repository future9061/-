import React from "react";
import { Link } from "react-router-dom";

function Heading() {
  return (
    <>
      <h1>Hello React</h1>
      <Link to="/">home</Link>
      <Link to="/upload">upload</Link>
      <Link to="/list">list</Link>
    </>
  );
}

export default Heading;

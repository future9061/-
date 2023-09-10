import React, { useEffect, useState } from "react";
import axios from "axios";

function List() {
  useEffect(() => {
    axios.get("/api/post/list").then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <>
      <h1>{}</h1>
    </>
  );
}
export default List;

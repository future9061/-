import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

function List({ contentList }) {
  const [text, setText] = useState("");

  useEffect(() => {
    let body = {
      text: "보낸다",
    };

    axios
      .post("/api/test", body)
      .then((res) => {
        console.log(res);
        setText(res.data.text);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>{text}</h1>
      {contentList.map((elem, idx) => {
        return <li>{elem}</li>;
      })}
    </>
  );
}
export default List;

import React, { useState } from "react";

function Upload({ contentList, setContentList }) {
  const [content, setContent] = useState("");

  const onSubmit = () => {
    let tempArr = [...contentList];
    tempArr.push(content);
    setContentList([...tempArr]);
    setContent("");
    console.log(contentList);
  };

  return (
    <>
      <input
        type="text"
        value={content}
        onChange={(e) => {
          setContent(e.currentTarget.value);
        }}
      />
      <button
        onClick={() => {
          onSubmit();
        }}
      >
        제출
      </button>
    </>
  );
}

export default Upload;

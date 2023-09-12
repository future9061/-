import React, { useEffect, useState } from "react";
import { UploadButtonDiv, UploadDiv, UploadForm } from "../../Style/UploadCSS";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ImgUpload from "./ImgUpload";

function Upload() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const onSubmit = () => {
    let body = {
      title: title,
      content: content,
      image: image,
    };

    if (title === "" || content === "") {
      alert("모든 항목을 채워주세요");
    }

    if (title !== "" && content !== "") {
      axios
        .post("/api/post/submit", body)
        .then((res) => {
          if (res.data.success) {
            navigate("/");
            alert("글 작성이 완료되었습니다");
          } else {
            alert("글 작성이 실패하였습니다");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="title">제목</label>
        <input
          id="form"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
        />
        <ImgUpload setImage={setImage} />
        <label htmlFor="content">내용</label>
        <textarea
          id="form"
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
        />
        <UploadButtonDiv>
          <button
            onClick={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            제출
          </button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
}

export default Upload;

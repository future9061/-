import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UploadButtonDiv, UploadDiv, UploadForm } from "../../Style/UploadCSS";
import Detail from "./Detail";
import ImgUpload from "./ImgUpload";
import { useSelector } from "react-redux";

function Edit() {
  let params = useParams();
  let navigate = useNavigate();
  let [postInfor, setPostInfor] = useState({});
  let [flag, setFlag] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const ImgState = useSelector((state) => state.ImgState);

  // useEffect(() => {
  //   console.log("에딧에서 파일", editImage);
  // }, [setEditImage]);

  useEffect(() => {
    let body = {
      postNum: params.postNum,
    };
    axios
      .post("/api/post/detail", body)
      .then((res) => {
        if (res.data.post) {
          setPostInfor(res.data.post);
          setFlag(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setTitle(postInfor.title);
    setContent(postInfor.content);
  }, [postInfor]);

  const onSubmit = () => {
    let body = {
      title: title,
      content: content,
      postNum: params.postNum,
      image: ImgState,
    };

    if (title === "" || content === "") {
      alert("모든 항목을 채워주세요");
    }

    if (title !== "" && content !== "") {
      axios
        .post("/api/post/edit", body)
        .then((res) => {
          if (res.data.success) {
            navigate(`/post/${params.postNum}`);
            alert("글 수정이 완료되었습니다");
          } else {
            alert("글 수정이 실패하였습니다");
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
          id="title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
        />
        <ImgUpload />
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
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
          <button
            className="cancle"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            취소
          </button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
}

export default Edit;

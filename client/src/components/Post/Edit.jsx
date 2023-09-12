import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UploadButtonDiv, UploadDiv, UploadForm } from "../../Style/UploadCSS";
import Detail from "./Detail";
import ImgUpload from "./ImgUpload";

function Edit() {
  let params = useParams();
  let navigate = useNavigate();
  let [postInfor, setPostInfor] = useState({});
  let [flag, setFlag] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
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

  useEffect(() => {
    console.log("image", image, "postInfor", postInfor);
  }, [setImage]);

  const onSubmit = () => {
    let body = {
      title: title,
      content: content,
      postNum: params.postNum,
      image: image,
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
  //왜 edit 에서는 imgupload가 404 에로 나는지 알았ㅇ음
  //edit은 url뒤에 고유의 postNum이 붙으니까!
  //해결방법은 고민해봐야할듯
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
        <ImgUpload setImage={setImage} />
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

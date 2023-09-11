import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { DetaliContent, DetaliDiv, DetaliBtn } from "../../Style/DetailCSS";

function Detail() {
  let params = useParams();
  let [postInfor, setPostInfor] = useState({});
  let [flag, setFlag] = useState(false);

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

  return (
    <DetaliDiv>
      {flag ? (
        <DetaliContent>
          <h1>{postInfor.title}</h1>
          <p>{postInfor.content}</p>
        </DetaliContent>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      <DetaliBtn>
        <button>수정</button>
        <button>삭제</button>
      </DetaliBtn>
    </DetaliDiv>
  );
}

export default Detail;

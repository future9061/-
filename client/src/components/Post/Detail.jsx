import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { DetaliContent, DetaliDiv, DetaliBtn } from "../../Style/DetailCSS";

function Detail() {
  let params = useParams();
  let [postInfor, setPostInfor] = useState({});
  let [flag, setFlag] = useState(false);
  let navigate = useNavigate();

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

  const DeleteHandler = () => {
    let body = {
      postNum: params.postNum,
    };

    if (window.confirm("정말로 삭제하겠습니까?")) {
      axios
        .post("/api/post/delete", body)
        .then((res) => {
          if (res.data.success) {
            alert("게시글이 삭제되었습니다.");
            navigate("/");
          }
        })
        .catch(() => {
          alert("게시글 삭제를 실패하였습니다.");
        });
    } else {
      return;
    }
  };

  return (
    <DetaliDiv>
      {flag ? (
        <DetaliContent>
          <h1>{postInfor.title}</h1>
          {postInfor.image && (
            <img
              src={`http://localhost:5000/${postInfor.image}`}
              alt={postInfor.image}
            />
          )}
          <p>{postInfor.content}</p>
        </DetaliContent>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      <DetaliBtn>
        <Link to={`/edit/${postInfor.postNum}`}>
          <button>수정</button>
        </Link>

        <button onClick={DeleteHandler}>삭제</button>
      </DetaliBtn>
    </DetaliDiv>
  );
}

export default Detail;

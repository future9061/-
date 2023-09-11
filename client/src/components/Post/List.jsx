import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListDiv, ListItem } from "../../Style/ListCSS";
import { Link } from "react-router-dom";

function List() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    axios
      .post("/api/post/list")
      .then((res) => {
        if (res.data.postList) {
          setPostList([...res.data.postList]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ListDiv>
        {postList.map((post, idx) => {
          return (
            <ListItem key={idx}>
              <Link to={`/post/${post.postNum}`}>
                <h4 className="title">{post.title}</h4>
                <p>{post.content}</p>
              </Link>
            </ListItem>
          );
        })}
      </ListDiv>
    </>
  );
}
export default List;

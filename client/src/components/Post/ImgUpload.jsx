import axios from "axios";
import React from "react";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { changeImg } from "../../Reducer/ImgSlice.js";

function ImgUpload() {
  const dispatch = useDispatch();

  const FileUpload = (e) => {
    var formData = new FormData();
    formData.append("file", e.target.files[0]);

    axios
      .post(`/api/post/image`, formData)
      .then((res) => {
        dispatch(changeImg(res.data.filePath));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Form.Control
        type="file"
        className="shadow-none"
        accept="image/*"
        onChange={(e) => FileUpload(e)}
      />
    </div>
  );
}

export default ImgUpload;

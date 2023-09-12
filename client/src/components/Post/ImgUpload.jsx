import axios from "axios";
import React from "react";
import Form from "react-bootstrap/Form";

function ImgUpload(props) {
  const FileUpload = (e) => {
    var formData = new FormData();
    formData.append("file", e.target.files[0]);

    axios
      .post("api/post/image/", formData)
      .then((res) => {
        props.setImage(res.data.filePath);
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

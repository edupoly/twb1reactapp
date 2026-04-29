import { useFormik } from "formik";
import React from "react";

function Photos() {
  var photoForm = useFormik({
    initialValues: {
      photo: "",
    },
    onSubmit: (values) => {
      var fd = new FormData();
      fd.append("photo", values.photo);
      fd.append("username", window.localStorage.getItem("username"));
      fetch("http://localhost:4400/user/uploadPic", {
        method: "POST",
        body: fd,
      }).then((res) => {
        console.log(res);
      });
    },
  });
  return (
    <div>
      <h1>Photos</h1>
      <form onSubmit={photoForm.handleSubmit} enctype="multipart/form-data">
        <input
          type="file"
          name="photo"
          onChange={(event) => {
            photoForm.setFieldValue("photo", event.currentTarget.files[0]);
          }}
        />
        <button>Upload Photo</button>
      </form>
    </div>
  );
}

export default Photos;

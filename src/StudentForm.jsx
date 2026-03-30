import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function StudentForm() {
  //prepare the form object//
  let sform = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      age: "",
      gender: "",
      tech: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Yooo... Suskobadla"),
      age: Yup.number().required("Number matrame allowed.."),
    }),
    onSubmit: () => {
      console.log(sform.values);
    },
  });

  return (
    <div className="mybox">
      <p>{JSON.stringify(sform)}</p>
      <h1>StudentForm</h1>
      <form onSubmit={sform.handleSubmit}>
        <input
          type="text"
          name="firstname"
          onChange={sform.handleChange}
          onBlur={sform.handleBlur}
        />
        {sform.touched.firstname && <div>{sform.errors.firstname}</div>}
        <br />
        <input
          type="text"
          name="lastname"
          onChange={sform.handleChange}
          onBlur={sform.handleBlur}
        />
        <br />
        <input
          type="text"
          name="age"
          onChange={sform.handleChange}
          onBlur={sform.handleBlur}
        />
        <div>{sform.touched.age && sform.errors.age}</div>
        <br />
        <label>Gender</label>
        :
        <input
          type="radio"
          name="gender"
          onChange={sform.handleChange}
          value="F"
          onBlur={sform.handleBlur}
        />
        :Female :
        <input
          type="radio"
          name="gender"
          onChange={sform.handleChange}
          value="M"
          onBlur={sform.handleBlur}
        />
        :Male :
        <input
          type="radio"
          name="gender"
          onChange={sform.handleChange}
          value="O"
          onBlur={sform.handleBlur}
        />
        :Others
        <br />
        Technologies:
        <input
          type="checkbox"
          name="tech"
          value="nodejs"
          onChange={sform.handleChange}
          onBlur={sform.handleBlur}
        />
        :NodeJS
        <input
          type="checkbox"
          name="tech"
          value="expressJS"
          onChange={sform.handleChange}
          onBlur={sform.handleBlur}
        />
        :expressJS
        <input
          type="checkbox"
          name="tech"
          value="ReactJS"
          onChange={sform.handleChange}
          onBlur={sform.handleBlur}
        />
        :ReactJS
        <input
          type="checkbox"
          name="tech"
          value="Angular"
          onChange={sform.handleChange}
          onBlur={sform.handleBlur}
        />
        :Angular
        <input
          type="checkbox"
          name="tech"
          value="MongoDB"
          onChange={sform.handleChange}
          onBlur={sform.handleBlur}
        />
        :MongoDB
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}

export default StudentForm;

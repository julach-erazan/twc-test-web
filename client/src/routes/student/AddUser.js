import { React, useState, useRef } from "react";
import { useFormik } from "formik";
import { studentAddSchema } from "../../schemas/addUserSchema";
import { handleAddStudent } from "../../controller/handleAddStudent";

const AddUser = () => {
  const [image, setImage] = useState("Images/blanckImage.png");
  const inputImage = useRef(null);

  const [status, setStatus] = useState();

  const onSubmit = (value, actions) => {
    actions.resetForm(); //Reset form data
    inputImage.current.value = ""; //Clear image input field

    handleAddStudent(value.studentName);
  };

  const handleUpload = (e) => {
    setImage(e.target.files[0]);
    setFieldValue("imagePath", e.target.files[0]);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
    setFieldValue("status", e.target.value);
  };

  const {
    values,
    handleBlur,
    errors,
    touched,
    setFieldValue,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      userName: "",
    },
    validationSchema: studentAddSchema,
    onSubmit,
  });
  return (
    <div className="w-full h-full text-[#fff] flex flex-col justify-center items-center relative z-20">
      <div className="w-full pt-[30px]">
        <h1 className="text-[50px] font-bold ">New Contact</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full text-[#fff] flex flex-col items-start"
          autoComplete="off"
          action="POST"
        >
          <div className="w-full text-[#083F46] flex items-center">
            <div className="w-[50%]">
              <input
                id="userName"
                className="w-[90%] h-[40px] rounded-[20px] p-[18px] my-[10px]"
                type="text"
                placeholder="full name"
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.userName && touched.userName && (
                <p className="error">{errors.userName}</p>
              )}

              <input
                id="userName"
                className="w-[90%] h-[40px] rounded-[20px] p-[18px] my-[10px]"
                type="text"
                placeholder="full name"
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.userName && touched.userName && (
                <p className="error">{errors.userName}</p>
              )}
            </div>

            <div className="w-[50%]">
              <input
                id="userName"
                className="w-[90%] h-[40px] rounded-[20px] p-[18px] my-[10px]"
                type="text"
                placeholder="full name"
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.userName && touched.userName && (
                <p className="error">{errors.userName}</p>
              )}

              <input
                id="userName"
                className="w-[90%] h-[40px] rounded-[20px] p-[18px] my-[10px]"
                type="text"
                placeholder="full name"
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.userName && touched.userName && (
                <p className="error">{errors.userName}</p>
              )}
            </div>
          </div>

          <button
            className="
               w-[220px] h-[40px] font-semibold rounded-[20px] border-[2px] border-[#fff] hover:text-[#083F46] hover:bg-[#fff] my-[50px]
              flex justify-center items-center
            "
            type="submit"
          >
            <h1>add your first contact</h1>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;

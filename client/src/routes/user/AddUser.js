import { React, useState, useRef } from "react";
import { useFormik } from "formik";
import { userAddSchema } from "../../schemas/addUserSchema";

const AddUser = ({ onHandleAddContact }) => {
  const [gender, setGender] = useState();

  const onSubmit = (value, actions) => {
    actions.resetForm(); //Reset form data
    document.getElementById("gender").checked = false;
    onHandleAddContact(value.userName, value.email, value.phoneNumber, gender);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
    setFieldValue("gender", e.target.value);
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
      email: "",
      phoneNumber: "",
      gender: "",
    },
    validationSchema: userAddSchema,
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
                id="phoneNumber"
                className="w-[90%] h-[40px] rounded-[20px] p-[18px] my-[10px]"
                type="text"
                placeholder="phone number"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <p className="error">{errors.phoneNumber}</p>
              )}
            </div>

            <div className="w-[50%]">
              <input
                id="email"
                className="w-[90%] h-[40px] rounded-[20px] p-[18px] my-[10px]"
                type="email"
                placeholder="e-mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}

              <div className="w-[90%] h-[40px] text-[#fff] my-[10px] flex justify-between flex-row items-center">
                <h1>gender</h1>
                <label htmlFor="gender" className="flex flex-row items-center">
                  <input
                    id="gender"
                    name="gender"
                    type="radio"
                    value="male"
                    onChange={handleGender}
                  />
                  <h1 className="ml-[5px]">male</h1>
                </label>

                <label
                  htmlFor="gender"
                  className="flex flex-row items-center ml-[20px]"
                >
                  <input
                    id="gender"
                    name="gender"
                    type="radio"
                    value="female"
                    onChange={handleGender}
                  />
                  <h1 className="ml-[5px]">female</h1>
                </label>
              </div>
              {errors.gender && touched.gender && (
                <p className="error">{errors.gender}</p>
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

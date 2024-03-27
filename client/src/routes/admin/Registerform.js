import React from "react";
import { useFormik } from "formik";
import { registerSchema } from "../../schemas/registerSchema";
import { handleRegister } from "../../controller/handleRegister";

const Registerform = () => {
  const onSubmit = (value, actions) => {
    actions.resetForm(); //Reset form data
    handleRegister(value.email, value.password);
  };

  const { values, handleBlur, errors, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: registerSchema,
      onSubmit,
    });
  return (
    <div className="w-full h-full text-[#fff] flex flex-col justify-center items-center relative z-20">
      <div className="w-[50%]">
        <h1 className="text-[50px] font-bold">Register Now!</h1>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          action="POST"
          className="w-full text-[#083F46] flex flex-col items-center mt-[50px]"
        >
          <input
            id="email"
            className="w-full h-[40px] rounded-[20px] p-[18px] my-[10px]"
            type="email"
            placeholder="e-mail"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}

          <input
            id="password"
            className="w-full h-[40px] rounded-[20px] p-[18px] my-[10px]"
            type="password"
            placeholder="create password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <p className="error">{errors.password}</p>
          )}

          <input
            id="confirmPassword"
            className="w-full h-[40px] rounded-[20px] p-[18px] my-[10px]"
            type="password"
            placeholder="confirm password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}

          <div className="w-full h-[80px] text-[#fff] mt-[50px]">
            <button
              className="w-[100px] h-[40px] font-semibold rounded-[20px] border-[2px] border-[#fff] hover:text-[#083F46] hover:bg-[#fff] my-[10px]"
              type="submit"
            >
              <h1>register</h1>
            </button>

            <u>
              <h2 className="text-[20px] font-semibold my-[50px]">
                <a href="/login">&lt; Back to login</a>
              </h2>
            </u>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registerform;

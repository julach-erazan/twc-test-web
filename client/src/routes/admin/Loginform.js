import React from "react";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas/loginSchema";
import { handleLogin } from "../../controller/handleLogin";

const Loginform = () => {
  const onSubmit = (value, actions) => {
    actions.resetForm(); //Reset form data
    handleLogin(value.email, value.password);
  };

  const { values, handleBlur, errors, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  return (
    <div className="w-full h-full text-[#fff] flex flex-col justify-center items-center relative z-20">
      <div className="w-[50%]">
        <h1 className="text-[50px] font-bold">Hi there,</h1>
        <h2 className="text-[30px] font-semibold">
          Welcome to our contacts portal
        </h2>

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
            placeholder="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <p className="error">{errors.password}</p>
          )}

          <div className="w-full h-[80px] flex text-[#fff] justify-between items-center mt-[50px]">
            <button
              className="w-[100px] h-[40px] font-semibold rounded-[20px] border-[2px] border-[#fff] hover:text-[#083F46] hover:bg-[#fff] my-[10px]"
              type="submit"
            >
              <h1>login</h1>
            </button>

            <h2 className="text-[20px] font-semibold">or</h2>

            <u>
              <h2 className="text-[20px] font-semibold">
                <a href="/register">Click here to Register</a>
              </h2>
            </u>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginform;

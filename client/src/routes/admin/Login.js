import React from "react";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas/loginSchema";
import { handleLogin } from "../../controller/handleLogin";
import { handleGoogleLogin } from "../../controller/handleGooogleLogin";

const Login = () => {
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
    <div className="w-[350px] h-[550px] p-[10px] my-[20px]">
      <div className="w-full h-[50px] bg-[#E2ECFC] text-[#5B6271] flex justify-start items-center px-[10px]">
        <h1 className="text-[23px] font-semibold">Login</h1>
      </div>
    </div>
  );
};

export default Login;

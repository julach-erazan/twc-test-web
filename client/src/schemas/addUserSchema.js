import * as yup from "yup";

const phoneNumberRules = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//Must contain 10 numbers

export const userAddSchema = yup.object().shape({
  userName: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  phoneNumber: yup
    .string()
    .matches(phoneNumberRules, "Please enter valid Phone number")
    .required("Required"),
  gender: yup.string().required("Required"),
});

import * as yup from "yup";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;
export const loginSchema = yup
  .object({
    email: yup.string().email("Please enter a valid email").required(),
    password: yup
      .string()
      .min(8)
      .matches(PWD_REGEX, { message: "Please create a stronger password" })
      .required("Required"),
  })
  .required();

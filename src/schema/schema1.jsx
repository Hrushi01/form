import * as Yup from "yup";
import "yup-phone";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const part1 = Yup.object({
  title: Yup.string().required("Title is required"),
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  designation: Yup.string().max(25).required("This field is required"),
  objective: Yup.string().max(25).required("This field is required"),

  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .max(10, "Phone number is not valid")
    .min(10, "Phone number is not valid"),

  git: Yup.string()
    .min(5, "mininum length 5")
    .required("Please enter valid profile"),
  lin: Yup.string()
    .min(5, "mininum length 5")
    .required("Please enter valid profile"),
});
export const part2 = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),

  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .max(10, "Phone number is not valid")
    .min(10, "Phone number is not valid"),

  git: Yup.string()
    .min(5, "mininum length 5")
    .required("Please enter valid profile"),
  lin: Yup.string()
    .min(5, "mininum length 5")
    .required("Please enter valid profile"),
});
export const part3 = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),

  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .max(10, "Phone number is not valid")
    .min(10, "Phone number is not valid"),

  git: Yup.string()
    .min(5, "mininum length 5")
    .required("Please enter valid profile"),
  lin: Yup.string()
    .min(5, "mininum length 5")
    .required("Please enter valid profile"),
});

import * as Yup from "yup";
import "yup-phone";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),

  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .max(10, "Phone number is not valid")
    .min(10, "Phone number is not valid"),
  gender: Yup.string().required("Please select one"),
  git: Yup.string()
    .min(5, "mininum length 5")
    .required("Please enter valid profile"),
  lin: Yup.string()
    .min(5, "mininum length 5")
    .required("Please enter valid profile"),
  address: Yup.array().of(
    Yup.object().shape({
      country: Yup.string().required("Required"),
      city: Yup.string().max(10).required("Required"),
      location: Yup.string().required("Required"),
    })
  ),

  accept: Yup.boolean().oneOf([true], "Please accept terms and conditions"),
});

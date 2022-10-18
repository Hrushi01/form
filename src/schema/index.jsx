import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),

  phone: Yup.string()
    .min(10)
    .max(10)
    .required("Please enter correct mobile number"),
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
